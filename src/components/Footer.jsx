import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Logo and Navigation Links */}
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-green-400 animate-pulse">
              AnimeDiki
            </h3>
            <p className="text-gray-400 max-w-xs">
              Your go-to place for anime recommendations, reviews, and more. Stay updated with the latest trending anime!
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-all">Home</a></li>
              <li><a href="/trending" className="text-gray-400 hover:text-white transition-all">Trending</a></li>
              <li><a href="/categories" className="text-gray-400 hover:text-white transition-all">Categories</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-all">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 glow-icon"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 glow-icon"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 glow-icon"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 glow-icon"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright Section) */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            website ini dibuat oleh <span className="text-green-400 animate-pulse">Muhamad Sidik</span>. gak tau apa lagi.
          </p>
        </div>
      </div>

      {/* Tambahkan style Tailwind custom */}
      <style>
        {`
          @keyframes glow {
            0% { opacity: 0.3; transform: translateY(0); filter: drop-shadow(0 0 5px rgba(34,197,94,0.5)); }
            50% { opacity: 1; transform: translateY(-5px); filter: drop-shadow(0 0 15px rgba(34,197,94,0.9)); }
            100% { opacity: 0.3; transform: translateY(0); filter: drop-shadow(0 0 5px rgba(34,197,94,0.5)); }
          }

          .glow-icon {
            animation: glow 2s infinite ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
