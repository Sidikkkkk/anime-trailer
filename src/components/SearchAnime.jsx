import { useState } from "react";
import { fetchAnimeSearch } from "../api/animeApi";
import { FaSearch } from "react-icons/fa"; // Import ikon search

const SearchAnime = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const results = await fetchAnimeSearch(query);

    if (results.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setSearchResults(results);
  };

  // Menjalankan pencarian ketika menekan "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto my-6">
      <div className="relative w-full">
        {/* Input */}
        <input
          type="text"
          placeholder="Search anime..."
          className="p-3 pl-10 w-full text-white bg-gray-800 rounded-full border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Ikon Search */}
        <button
          onClick={handleSearch}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
            query
              ? "bg-green-500 text-white shadow-md shadow-green-400/50 hover:bg-green-600"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!query.trim()}
        >
          <FaSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchAnime;
