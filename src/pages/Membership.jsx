import React, { useState } from "react";
import { FaCrown, FaStar, FaCheckCircle } from "react-icons/fa";

const Membership = () => {
  const [membership, setMembership] = useState("Gratis");

  const handleUpgrade = (level) => {
    setMembership(level);
    alert(`Membership berhasil diupgrade ke ${level}`);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-white">Membership</h1>
        <p className="text-gray-200 mt-2">Tingkatkan pengalaman menonton anime dengan membership eksklusif!</p>
      </div>

      {/* Status Membership */}
      <div className="bg-gray-900 p-6 mt-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-green-400">Status Membership</h2>
        <p className="text-lg text-white mt-2">{membership}</p>
        <p className="text-gray-400 text-sm">Nikmati berbagai keuntungan dengan tingkat membership yang lebih tinggi!</p>
      </div>

      {/* Pilihan Membership */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Gratis */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-green-400">Gratis</h3>
          <FaCheckCircle className="text-green-400 text-3xl mx-auto my-4" />
          <p className="text-gray-300 text-sm">Akses anime terbatas, ada iklan.</p>
          <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md cursor-not-allowed">
            Aktif
          </button>
        </div>

        {/* Premium */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-yellow-400">Premium</h3>
          <FaStar className="text-yellow-400 text-3xl mx-auto my-4" />
          <p className="text-gray-300 text-sm">Akses anime lengkap tanpa iklan.</p>
          <button
            onClick={() => handleUpgrade("Premium")}
            className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md transition-all"
          >
            Upgrade
          </button>
        </div>

        {/* VIP */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-purple-400">VIP</h3>
          <FaCrown className="text-purple-400 text-3xl mx-auto my-4" />
          <p className="text-gray-300 text-sm">Akses eksklusif + fitur premium.</p>
          <button
            onClick={() => handleUpgrade("VIP")}
            className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md transition-all"
          >
            Upgrade
          </button>
        </div>
      </div>
    </section>
  );
};

export default Membership;
