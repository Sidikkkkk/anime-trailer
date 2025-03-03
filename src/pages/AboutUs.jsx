import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaVuejs,
  FaQuoteLeft,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-400">Tentang Kami</h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Selamat datang di <span className="text-green-400 font-semibold">AnimeStream</span>! Kami adalah tim yang berdedikasi untuk menghadirkan pengalaman menonton anime yang nyaman, modern, dan menyenangkan.
        </p>
      </div>

      {/* Profil Tim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Profile */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-green-500/50 transition-all duration-300">
          <img
            src="/images/sidik.jpg"
            alt="Profile Pembuat"
            className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
          />
          <h3 className="text-xl font-semibold text-green-400 mt-4">Muhamad Sidik</h3>
          <p className="text-gray-300 text-sm mt-2">Fullstack Developer</p>
          <p className="text-gray-400 mt-3">
            Seorang pengembang dengan keahlian dalam React.js, Node.js, dan MongoDB.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-green-500/50 transition-all duration-300">
          <img
            src="/images/sidik.jpg"
            alt="Profile Pembuat"
            className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
          />
          <h3 className="text-xl font-semibold text-green-400 mt-4">Muhamad Sidik</h3>
          <p className="text-gray-300 text-sm mt-2">UI/UX Designer</p>
          <p className="text-gray-400 mt-3">
            Bertanggung jawab atas desain antarmuka yang menarik dan user-friendly.
          </p>
        </div>
      </div>

      {/* Teknologi yang Digunakan */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-6">Teknologi yang Digunakan</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <FaReact className="text-blue-400 text-5xl tech-icon" />
          <FaNodeJs className="text-green-500 text-5xl tech-icon" />
          <FaDatabase className="text-yellow-400 text-5xl tech-icon" />
          <FaHtml5 className="text-orange-500 text-5xl tech-icon" />
          <FaCss3Alt className="text-blue-500 text-5xl tech-icon" />
          <FaJs className="text-yellow-500 text-5xl tech-icon" />
          <FaLaravel className="text-red-500 text-5xl tech-icon" />
          <FaVuejs className="text-green-500 text-5xl tech-icon" />
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-6">Visi & Misi</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300 text-lg">
            <strong>Visi:</strong> Menjadi platform streaming anime terbaik dengan pengalaman yang cepat, aman, dan interaktif.
          </p>
          <p className="text-gray-300 text-lg mt-4">
            <strong>Misi:</strong> 
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>Menyediakan anime dengan kualitas terbaik dan update cepat.</li>
              <li>Mengembangkan fitur interaktif bagi komunitas anime.</li>
              <li>Mengutamakan kenyamanan dan kemudahan pengguna.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Testimoni Pengguna */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-green-400 text-center mb-6">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimoni Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaQuoteLeft className="text-green-400 text-3xl mx-auto mb-3" />
            <p className="text-gray-300 italic">
              "AnimeStream adalah tempat terbaik untuk nonton anime! Cepat, lengkap, dan tidak ada iklan yang mengganggu!"
            </p>
            <h4 className="text-green-400 font-semibold mt-4">- Asep, Otaku</h4>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaQuoteLeft className="text-green-400 text-3xl mx-auto mb-3" />
            <p className="text-gray-300 italic">
              "UI/UX website ini sangat modern dan enak digunakan. Suka banget dengan fitur dark mode-nya!"
            </p>
            <h4 className="text-green-400 font-semibold mt-4">- Budi, Web Developer</h4>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaQuoteLeft className="text-green-400 text-3xl mx-auto mb-3" />
            <p className="text-gray-300 italic">
              "Punya koleksi anime yang sangat lengkap! Bahkan anime klasik pun ada di sini."
            </p>
            <h4 className="text-green-400 font-semibold mt-4">- Citra, Anime Lover</h4>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-6">FAQ (Pertanyaan yang Sering Diajukan)</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
          <div className="mb-4">
            <h3 className="text-green-400 font-semibold">Apakah AnimeStream Gratis?</h3>
            <p className="text-gray-300">Ya! AnimeStream menyediakan layanan streaming gratis untuk semua pengguna.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-green-400 font-semibold">Apakah ada fitur premium?</h3>
            <p className="text-gray-300">Ya, kami memiliki layanan premium untuk pengalaman tanpa iklan dan akses eksklusif.</p>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold">Bagaimana cara request anime?</h3>
            <p className="text-gray-300">Silakan hubungi tim kami melalui email atau sosial media.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
