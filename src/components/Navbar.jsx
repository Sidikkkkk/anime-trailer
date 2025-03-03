import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">AnimeDiki</h1>

        {/* Ikon User & Menu Mobile */}
        <div className="flex items-center gap-6 relative">
          {/* Dropdown Profil */}
          <div className="relative">
            <FaUserCircle
              className="text-green-400 text-3xl cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                <ul className="flex flex-col">
                  <Link to="/profile">
                    <li className="px-6 py-3 border-b border-gray-700 hover:bg-green-500 transition cursor-pointer">
                      👤 Profil Saya
                    </li>
                  </Link>
                  <Link to="/setting">
                    <li className="px-6 py-3 border-b border-gray-700 hover:bg-green-500 transition cursor-pointer">
                      🔧 Pengaturan
                    </li>
                  </Link>
                  <li className="px-6 py-3 hover:bg-red-500 transition cursor-pointer">
                    🚪 Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="md:hidden text-green-400 text-2xl transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Navigasi */}
        <ul
          className={`md:flex gap-6 absolute md:static left-0 top-16 md:top-0 w-full md:w-auto bg-black md:bg-transparent transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Home dengan Dropdown */}
          <li className="relative p-4 text-white cursor-pointer hover:text-green-400 transition">
            <div
              className="flex items-center gap-2"
              onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            >
              Home <FaChevronDown size={12} />
            </div>
            {isHomeDropdownOpen && (
              <ul className="absolute left-0 top-full mt-1 w-48 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                <Link to="/">
                  <li className="px-4 py-2 hover:bg-green-500 transition">🏠 Beranda</li>
                </Link>
                <Link to="/faq">
                  <li className="px-4 py-2 hover:bg-green-500 transition">❓ Bantuan (FAQ)</li>
                </Link>
              </ul>
            )}
          </li>

          <li className="p-4 text-white cursor-pointer hover:text-green-400 transition">
            <Link to="/trending">Trending</Link>
          </li>
          <li className="p-4 text-white cursor-pointer hover:text-green-400 transition">
            <Link to="/about">Tentang Kami</Link>
          </li>
          <li className="p-4 text-white cursor-pointer hover:text-green-400 transition">
            <Link to="/membership">Membership</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
