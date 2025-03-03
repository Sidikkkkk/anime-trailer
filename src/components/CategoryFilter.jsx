const categories = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];

const CategoryFilter = ({ onSelectCategory }) => {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-orange-500"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
