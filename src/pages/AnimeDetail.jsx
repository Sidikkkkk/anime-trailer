import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaUserCircle } from "react-icons/fa";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };
    fetchAnimeDetail();

    const fetchTrendingAnime = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        setTrendingAnime(response.data.data.slice(0, 5)); // Ambil 5 anime trending
      } catch (error) {
        console.error("Error fetching trending anime:", error);
      }
    };
    fetchTrendingAnime();
  }, [id]);

  if (!anime) return <p className="text-white text-center mt-10">Loading...</p>;

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        username: "User" + (comments.length + 1), // Simulasi username
        text: comment,
        time: new Date().toLocaleTimeString(),
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-400 drop-shadow-lg">
              {anime.title}
            </h1>
            <p className="text-center text-gray-300 mb-6 max-w-3xl">
              {anime.synopsis.slice(0, 200)}...
            </p>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(anime.trailer?.url, "_blank");
              }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all shadow-md shadow-green-400/50"
            >
              🎬 Watch Trailer
            </Link>
          </div>
        </div>

        {/* Detail Anime */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-80">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-green-400">{anime.title}</h2>
            <p className="mt-4 text-gray-300">{anime.synopsis}</p>
            <p className="mt-2"><strong>Episodes:</strong> {anime.episodes || "Unknown"}</p>
            <p className="mt-2"><strong>Rating:</strong> ⭐ {anime.score}</p>
            <p className="mt-2"><strong>Genres:</strong> {anime.genres.map(g => g.name).join(", ")}</p>
          </div>
        </div>

        {/* Trailer YouTube */}
        {anime.trailer?.embed_url && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Trailer</h2>
            <div className="w-full max-w-3xl mx-auto">
              <iframe
                width="100%"
                height="400"
                src={anime.trailer.embed_url}
                title="Anime Trailer"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Komentar */}
        <div className="mt-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-green-400">Komentar</h2>
            <div className="mt-4 flex gap-4">
              <input
                type="text"
                placeholder="Tambahkan komentar..."
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className={`px-6 py-3 rounded-lg text-white transition-all ${
                  comment.trim()
                    ? "bg-green-500 hover:bg-green-600 shadow-md shadow-green-400/50"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
                onClick={handleAddComment}
                disabled={!comment.trim()}
              >
                Kirim
              </button>
            </div>

            <ul className="mt-6 space-y-4">
              {comments.length > 0 ? (
                comments.map((c) => (
                  <li key={c.id} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start gap-4">
                    <FaUserCircle size={40} className="text-green-400" />
                    <div>
                      <p className="text-green-400 font-semibold">{c.username} <span className="text-gray-400 text-sm">{c.time}</span></p>
                      <p className="text-gray-300">{c.text}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">Belum ada komentar.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Trending Anime */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-green-400">🔥 Trending Anime Hari Ini</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trendingAnime.map((anime) => (
              <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-green-400 font-semibold">{anime.title}</h3>
                <p className="text-gray-400 text-sm">⭐ {anime.score}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
