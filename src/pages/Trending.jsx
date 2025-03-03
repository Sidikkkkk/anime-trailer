import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaPlay, FaFire, FaStar, FaBolt } from "react-icons/fa";

const categories = ["All", "Action", "Adventure", "Romance", "Fantasy", "Sci-Fi"];

const TrendingAnime = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [topRatedAnime, setTopRatedAnime] = useState([]);
  const [hypeAnime, setHypeAnime] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setLoading(true);
        
        // Ambil data trending anime
        const trendingResponse = await axios.get("https://api.jikan.moe/v4/top/anime");
        setTrendingAnime(trendingResponse.data.data);
        setFilteredAnime(trendingResponse.data.data);

        // Ambil anime dengan rating tertinggi
        const topRatedResponse = await axios.get("https://api.jikan.moe/v4/top/anime?filter=bypopularity");
        setTopRatedAnime(topRatedResponse.data.data);

        const hypeResponse = await axios.get("https://api.jikan.moe/v4/seasons/now");
        setHypeAnime(hypeResponse.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  // Filter anime berdasarkan kategori
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredAnime(trendingAnime);
    } else {
      const filtered = trendingAnime.filter((anime) =>
        anime.genres.some((genre) => genre.name.toLowerCase() === selectedCategory.toLowerCase())
      );
      setFilteredAnime(filtered);
    }
  }, [selectedCategory, trendingAnime]);

  return (
    <div className="bg-black min-h-screen p-6 py-24">
      {/* Trending Anime */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <FaFire /> Trending Anime
        </h2>

        {/* Kategori */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-2 py-1 text-xs md:text-sm rounded-md font-medium transition-all ${
                selectedCategory === category
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-white hover:bg-green-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loader */}
        {loading ? (
          <p className="text-center text-white">Loading anime...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAnime.length > 0 ? (
              filteredAnime.slice(0, 8).map((anime) => (
                <div
                  key={anime.mal_id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-800 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-400/50"
                >
                  <div className="relative">
                    <img
                      src={anime.images.jpg.image_url}
                      alt={anime.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-white font-semibold text-sm truncate">{anime.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">⭐ {anime.score}</p>
                    <Link
                      to={`/anime/${anime.mal_id}`}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-1 text-xs md:text-sm mt-2 rounded-lg transition-all"
                    >
                      <FaPlay size={12} /> Lihat Detail
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">Anime tidak ditemukan.</p>
            )}
          </div>
        )}
      </section>

      {/* 🌟 Anime dengan Rating Tertinggi */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
          <FaStar /> Anime dengan Rating Tertinggi
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topRatedAnime.slice(0, 8).map((anime) => (
            <div key={anime.mal_id} className="bg-gray-900 rounded-lg shadow-md hover:shadow-yellow-400 transition">
              <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-white font-semibold text-sm truncate">{anime.title}</h3>
                <p className="text-gray-400 text-xs mt-1">⭐ {anime.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ Anime yang Sedang Hype */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <FaBolt /> Anime yang Sedang Hype
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hypeAnime.slice(0, 8).map((anime) => (
            <div key={anime.mal_id} className="bg-gray-900 rounded-lg shadow-md hover:shadow-blue-400 transition">
              <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-white font-semibold text-sm truncate">{anime.title}</h3>
                <p className="text-gray-400 text-xs mt-1">⭐ {anime.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingAnime;
