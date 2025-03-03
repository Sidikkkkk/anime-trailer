import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa"; // Import ikon play

const AnimeCard = ({ anime }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-800 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-400/50">
      
      {/* Gambar Anime */}
      <div className="relative">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full h-56 md:h-64 object-cover"
        />
        
        {/* Label Genre */}
        {anime.genres.length > 0 && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-green-300 px-2 py-1 text-sm rounded-md">
            {anime.genres.slice(0, 2).map((genre) => genre.name).join(", ")}
          </div>
        )}
      </div>

      {/* Konten Card */}
      <div className="p-3">
        {/* Judul Anime */}
        <h3 className="text-white font-bold text-lg truncate hover:overflow-visible hover:whitespace-normal">
          {anime.title}
        </h3>

        {/* Skor Anime */}
        <p className="text-gray-400 text-sm mt-1">⭐ {anime.score || "N/A"}</p>

        {/* Tombol View Details */}
        <Link
          to={`/anime/${anime.mal_id}`}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-center py-2 mt-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-400/50"
        >
          <FaPlay /> View Details
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;
