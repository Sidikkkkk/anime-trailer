import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaMoon,
  FaSun,
  FaBell,
  FaSignOutAlt,
  FaFilm,
  FaShieldAlt,
} from "react-icons/fa";

const Settings = () => {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Daftar menu pengaturan
  const menuItems = [
    { id: "profile", name: "Profil", icon: <FaUser /> },
    { id: "security", name: "Keamanan", icon: <FaLock /> },
    { id: "appearance", name: "Tampilan", icon: darkMode ? <FaSun /> : <FaMoon /> },
    { id: "notifications", name: "Notifikasi", icon: <FaBell /> },
    { id: "animePreferences", name: "Preferensi Anime", icon: <FaFilm /> },
    { id: "privacy", name: "Privasi & Keamanan", icon: <FaShieldAlt /> },
    { id: "logout", name: "Keluar", icon: <FaSignOutAlt />, danger: true },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-white">
      <h2 className="text-3xl text-center font-bold text-green-400 mb-6">Pengaturan</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Menu */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-lg w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Menu</h3>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all ${
                  selectedMenu === item.id
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-800 text-gray-400"
                }`}
              >
                <span className={`text-lg ${item.danger ? "text-red-400" : "text-green-400"}`}>
                  {item.icon}
                </span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Konten Pengaturan */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex-1">
          {selectedMenu === "profile" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Profil</h3>
              <p className="text-gray-400 mt-2">Edit informasi akun Anda.</p>
              <div className="mt-4 space-y-4">
                <input type="text" className="w-full p-3 bg-gray-800 text-white rounded-md outline-none" placeholder="Nama Lengkap" />
                <input type="email" className="w-full p-3 bg-gray-800 text-white rounded-md outline-none" placeholder="Email" />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md">Simpan Perubahan</button>
              </div>
            </div>
          )}

          {selectedMenu === "security" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Keamanan</h3>
              <p className="text-gray-400 mt-2">Ubah kata sandi Anda.</p>
              <div className="mt-4 space-y-4">
                <input type="password" className="w-full p-3 bg-gray-800 text-white rounded-md outline-none" placeholder="Kata Sandi Lama" />
                <input type="password" className="w-full p-3 bg-gray-800 text-white rounded-md outline-none" placeholder="Kata Sandi Baru" />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md">Ubah Kata Sandi</button>
              </div>
            </div>
          )}

          {selectedMenu === "appearance" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Tampilan</h3>
              <p className="text-gray-400 mt-2">Pilih mode tampilan website.</p>
              <div className="mt-4">
                <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md">
                  {darkMode ? "Matikan Mode Gelap" : "Aktifkan Mode Gelap"}
                </button>
              </div>
            </div>
          )}

          {selectedMenu === "notifications" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Notifikasi</h3>
              <p className="text-gray-400 mt-2">Kelola notifikasi akun Anda.</p>
              <div className="mt-4">
                <button onClick={() => setNotifications(!notifications)} className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md">
                  {notifications ? "Matikan Notifikasi" : "Aktifkan Notifikasi"}
                </button>
              </div>
            </div>
          )}

          {selectedMenu === "animePreferences" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Preferensi Anime</h3>
              <p className="text-gray-400 mt-2">Atur genre favorit & rekomendasi anime.</p>
              <div className="mt-4 space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-green-600" />
                  <span className="text-gray-300">Action</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-green-600" />
                  <span className="text-gray-300">Fantasy</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-green-600" />
                  <span className="text-gray-300">Romance</span>
                </label>
              </div>
            </div>
          )}

          {selectedMenu === "privacy" && (
            <div>
              <h3 className="text-xl font-semibold text-green-400">Privasi & Keamanan</h3>
              <p className="text-gray-400 mt-2">Kelola sesi login & keamanan akun.</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md">Keluar dari Semua Perangkat</button>
              </div>
            </div>
          )}

          {selectedMenu === "logout" && (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-red-500">Keluar</h3>
              <p className="text-gray-400 mt-2">Apakah Anda yakin ingin keluar?</p>
              <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md">Logout</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Settings;
