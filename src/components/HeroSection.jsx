import { useEffect, useState } from "react";
import { fetchTrendingAnime } from "../api/animeApi";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import ikon

const HeroSection = () => {
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getAnime = async () => {
      const { data } = await fetchTrendingAnime();
      setAnimeList(data.slice(0, 5)); // Ambil 5 anime teratas
    };
    getAnime();
  }, []);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [animeList]);

  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden pt-20">
      {animeList.length > 0 && (
        <div className="relative w-full h-full">
          {/* Carousel Card */}
          <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg overflow-hidden">
            {/* Image */}
            <img
              src={animeList[currentIndex]?.images.jpg.large_image_url}
              alt={animeList[currentIndex]?.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
          </div>

          {/* Overlay Gelap dengan Konten */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white px-4 text-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-green-400 drop-shadow-lg">
                {animeList[currentIndex]?.title}
              </h1>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                {animeList[currentIndex]?.synopsis.slice(0, 150)}...
              </p>
              <a
                href={`/anime/${animeList[currentIndex]?.mal_id}`}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-lg shadow-lg transition-all hover:bg-green-400 hover:shadow-green-400/50 hover:scale-105"
              >
                <FaPlay className="text-lg" /> Detail Anime
              </a>
            </div>
          </div>

          {/* Navigasi Carousel (Tombol Next/Previous) */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + animeList.length) % animeList.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 text-3xl bg-black/50 p-3 rounded-full transition-all hover:bg-green-500 hover:text-black hover:scale-110"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400 text-3xl bg-black/50 p-3 rounded-full transition-all hover:bg-green-500 hover:text-black hover:scale-110"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
