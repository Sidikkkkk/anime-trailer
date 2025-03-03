import { useEffect, useState } from "react";
import { fetchTrendingAnime, fetchAnimeByCategory, fetchAnimeSearch } from "../api/animeApi";
import AnimeCard from "./AnimeCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AnimeGrid = ({ title, animeList = [], category, searchQuery = "" }) => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getAnime = async () => {
      setLoading(true);
      setError(null);
      let data = [];

      try {
        if (searchQuery.trim()) {
          data = await fetchAnimeSearch(searchQuery, page);
        } else if (category) {
          data = await fetchAnimeByCategory(category, page);
        } else {
          const response = await fetchTrendingAnime(page);
          data = response.data;
          setTotalPages(response.pagination.last_visible_page);
        }

        setAnimeData(data);
      } catch (err) {
        setError("Gagal mengambil data anime. Coba lagi nanti.");
        console.error("Error fetching anime:", err);
      } finally {
        setLoading(false);
      }
    };

    getAnime();
  }, [category, searchQuery, page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  // Fungsi untuk menampilkan pagination dengan "..."
  const renderPagination = () => {
    let pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      pages = [...Array(totalPages).keys()].map((p) => p + 1);
    } else {
      if (page <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (page >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", page, "...", totalPages];
      }
    }

    return pages.map((p, index) =>
      p === "..." ? (
        <span key={index} className="text-gray-500 px-2">...</span>
      ) : (
        <button
          key={p}
          className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
            page === p ? "bg-green-500 text-white shadow-md" : "bg-gray-800 text-green-400 hover:bg-green-600 hover:text-white"
          }`}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </button>
      )
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-green-400 mb-4">{title}</h2>

      {loading ? (
        <p className="text-green-300 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {animeData.length > 0 ? (
              animeData.map((anime, index) => (
                <div
                  key={anime.mal_id}
                  className="anime-card relative opacity-0 transform transition-opacity duration-500 ease-in-out"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AnimeCard anime={anime} />
                </div>
              ))
            ) : (
              <p className="text-green-300 text-center w-full col-span-2 md:col-span-4">
                Anime tidak ditemukan.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 gap-2">
              <button
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-green-400 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white disabled:opacity-50"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                <FaArrowLeft />
              </button>

              {/* Nomor Halaman dengan "..." */}
              {renderPagination()}

              <button
                className="w-10 h-10 flex items-center justify-center bg-gray-800 text-green-400 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white disabled:opacity-50"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AnimeGrid;
