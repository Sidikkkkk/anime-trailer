import React, { useState, useEffect } from "react";
import faqData from "../data/faqData.json";

const FaqHelp = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0]?.category || "Umum");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const categoryData = faqData.find((cat) => cat.category === selectedCategory);
    setFilteredQuestions(categoryData ? categoryData.questions : []);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-400">FAQ & Bantuan</h1>
        <p className="mt-4 text-gray-300">Temukan jawaban untuk pertanyaan yang sering diajukan.</p>
      </div>

      {/* Pilihan Kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {faqData.map((item) => (
          <button
            key={item.category}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === item.category
                ? "bg-green-500 text-black"
                : "bg-gray-800 text-white hover:bg-green-500"
            }`}
            onClick={() => setSelectedCategory(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* List Pertanyaan */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filteredQuestions.map((faq, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-green-500/50 transition-all">
            <h3 className="text-lg font-semibold text-green-400">{faq.question}</h3>
            <p className="text-gray-300 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Bantuan Tambahan */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Masih butuh bantuan?</h2>
        <p className="text-gray-300 mb-6">Hubungi tim dukungan kami untuk pertanyaan lebih lanjut.</p>
        <a
          href="mailto:support@animestream.com"
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-all font-semibold"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
};

export default FaqHelp;
