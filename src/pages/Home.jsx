import { useState } from "react";
import HeroSection from "../components/HeroSection";
import SearchAnime from "../components/SearchAnime";
import CategoryFilter from "../components/CategoryFilter";
import AnimeGrid from "../components/AnimeGrid";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <SearchAnime setSearchResults={setSearchResults} />
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      {searchResults.length > 0 ? (
        <AnimeGrid title="Search Results" animeList={searchResults} />
      ) : (
        <AnimeGrid title={selectedCategory ? `Genre: ${selectedCategory}` : "New Releases"} category={selectedCategory} />
      )}
    </div>
  );
};

export default Home;
