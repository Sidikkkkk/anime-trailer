import React from "react";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const username = "JohnDoe"; 
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-white">
      {/* Header Profile */}
      <div className="relative w-full h-60 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
        <div className="absolute bottom-0 left-6 -mb-12 flex items-center">
          <img
            src={avatarUrl}
            alt="Profile User"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-green-400 shadow-lg"
          />
        </div>
      </div>

      {/* Informasi Profile */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-400">{username}</h2>
        <p className="text-gray-400 text-sm">Fullstack Developer & Anime Enthusiast</p>

        {/* Bio */}
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Seorang pengembang web yang mencintai anime. Website ini dibuat untuk
          memberikan pengalaman terbaik bagi pecinta anime dengan desain modern
          dan responsif.
        </p>

        {/* Statistik */}
        <div className="mt-6 grid grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-400">250</h3>
            <p className="text-gray-400 text-xs">Anime Ditonton</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-400">120</h3>
            <p className="text-gray-400 text-xs">Anime Favorit</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-400">5 Tahun</h3>
            <p className="text-gray-400 text-xs">Pengalaman</p>
          </div>
        </div>

        {/* Tombol Edit & Logout */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-md transition-all">
            <FaUserEdit />
            Edit Profil
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md shadow-md transition-all">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Riwayat Anime yang Baru Ditonton */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-green-400">Riwayat Anime yang Baru Ditonton</h3>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-lg">
          <ul className="space-y-3">
            <li className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-300">Attack on Titan</span>
              <span className="text-gray-400 text-sm">S4E10</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-300">Demon Slayer</span>
              <span className="text-gray-400 text-sm">S3E5</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-300">Jujutsu Kaisen</span>
              <span className="text-gray-400 text-sm">S2E12</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Anime Favorit */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-green-400">Anime Favorit</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Card Anime */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <img
              src="/images/one.jpeg"
              alt="Anime"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h4 className="text-gray-300 font-semibold">One Piece</h4>
              <p className="text-gray-400 text-sm">⭐ 9.5/10</p>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <img
              src="/images/naruto.jpeg"
              alt="Anime"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h4 className="text-gray-300 font-semibold">Naruto</h4>
              <p className="text-gray-400 text-sm">⭐ 9.2/10</p>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <img
              src="/images/sten.jpg"
              alt="Anime"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h4 className="text-gray-300 font-semibold">Steins</h4>
              <p className="text-gray-400 text-sm">⭐ 9.7/10</p>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <img
              src="/images/aot.jpg"
              alt="Anime"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h4 className="text-gray-300 font-semibold">aot</h4>
              <p className="text-gray-400 text-sm">⭐ 9.1/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
