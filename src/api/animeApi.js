import axios from "axios";

const API_URL = "https://api.jikan.moe/v4";

// Fetch trending anime dengan pagination
export const fetchTrendingAnime = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/top/anime?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending anime:", error);
    return { data: [], pagination: {} };
  }
};

// Fetch anime berdasarkan pencarian
export const fetchAnimeSearch = async (query) => {
  if (!query.trim()) return [];

  try {
    const response = await axios.get(`${API_URL}/anime`, {
      params: { q: query, limit: 10 },
    });

    console.log("API Response:", response.data); // Debug API response

    return response.data.data || [];
  } catch (error) {
    console.error("Error searching anime:", error);
    return [];
  }
};

export const fetchAnimeByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/anime`, {
      params: { q: category, limit: 10 }, // Mencari anime berdasarkan kata kunci kategori
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching anime by category:", error);
    return [];
  }
};
