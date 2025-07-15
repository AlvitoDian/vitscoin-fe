import { Wallet, Send, Sun, Moon, X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  themeClasses,
  setCurrentPage,
  currentPage,
  setIsDarkMode,
  setIsMenuOpen,
  isDarkMode,
  isMenuOpen,
}) {
  const navigate = useNavigate();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.nav} backdrop-blur-md ${themeClasses.navBorder} border-b`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentPage("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-yellow-500">VITS COIN</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`hover:text-yellow-500 transition-colors font-medium ${
                currentPage === "home" ? "text-yellow-500" : themeClasses.text
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/wallet")}
              className={`hover:text-yellow-500 transition-colors flex items-center gap-2 font-medium ${
                currentPage === "wallet" ? "text-yellow-500" : themeClasses.text
              }`}
            >
              <Wallet className="w-4 h-4" />
              Wallet
            </button>
            <button
              onClick={() => navigate("/transfer")}
              className={`hover:text-yellow-500 transition-colors flex items-center gap-2 font-medium ${
                currentPage === "send" ? "text-yellow-500" : themeClasses.text
              }`}
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-xl ${themeClasses.cardHover} transition-all duration-300 transform hover:scale-105`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 ${themeClasses.navBorder} border-t`}
          >
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition-colors font-medium ${
                  currentPage === "home" ? "text-yellow-500" : themeClasses.text
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => {
                  setCurrentPage("wallet");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition-colors flex items-center gap-2 font-medium ${
                  currentPage === "wallet"
                    ? "text-yellow-500"
                    : themeClasses.text
                }`}
              >
                <Wallet className="w-4 h-4" />
                Wallet
              </button>
              <button
                onClick={() => {
                  setCurrentPage("send");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition-colors flex items-center gap-2 font-medium ${
                  currentPage === "send" ? "text-yellow-500" : themeClasses.text
                }`}
              >
                <Send className="w-4 h-4" />
                Kirim
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
