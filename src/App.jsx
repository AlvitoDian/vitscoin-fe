import React, { useState } from "react";
import {
  Wallet,
  Send,
  Eye,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Copy,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [walletBalance] = useState(1250.75);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transactions] = useState([
    {
      id: 1,
      type: "received",
      amount: 500,
      from: "0x742d35Cc6634C0532925a3b8d83f9d2b...",
      date: "2024-07-15",
    },
    {
      id: 2,
      type: "sent",
      amount: 250,
      to: "0x8ba1f109551bD432803012645Hac136c...",
      date: "2024-07-14",
    },
    {
      id: 3,
      type: "received",
      amount: 1000,
      from: "0x267be1C1D684F78cb4F6a176C4911b74...",
      date: "2024-07-13",
    },
  ]);

  const HomePage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            VITS COIN
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Revolusi mata uang digital masa depan. Cepat, aman, dan
            terdesentralisasi untuk ekosistem blockchain yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("wallet")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Buka Wallet
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
            Mengapa VITS Coin?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Keamanan Terdepan</h3>
              <p className="text-gray-300">
                Teknologi blockchain dengan enkripsi tingkat militer untuk
                melindungi aset digital Anda.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Transaksi Kilat</h3>
              <p className="text-gray-300">
                Proses transaksi dalam hitungan detik dengan biaya yang sangat
                rendah.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <Globe className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Global & Terdesentralisasi
              </h3>
              <p className="text-gray-300">
                Akses ke jaringan global tanpa batasan geografis dan kontrol
                terpusat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                $2.5M+
              </div>
              <div className="text-gray-300">Total Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                50K+
              </div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                99.9%
              </div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const WalletPage = () => (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-yellow-500">
            Wallet VITS
          </h1>
          <p className="text-gray-300">
            Kelola aset digital Anda dengan mudah dan aman
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-xl mb-8 text-black">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-80">Total Balance</p>
              <h2 className="text-4xl font-bold">
                {walletBalance.toFixed(2)} VITS
              </h2>
            </div>
            <Wallet className="w-8 h-8" />
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setCurrentPage("send")}
              className="bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Kirim
            </button>
            <button className="bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Beli
            </button>
          </div>
        </div>

        {/* Wallet Address */}
        <div className="bg-gray-900 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Alamat Wallet
          </h3>
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
            <span className="text-sm text-gray-300 flex-1 font-mono">
              0x742d35Cc6634C0532925a3b8d83f9d2b11e9c3d1
            </span>
            <button className="text-yellow-500 hover:text-yellow-400">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Transaksi Terakhir
          </h3>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      tx.type === "received" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <div>
                    <p className="font-semibold">
                      {tx.type === "received" ? "Diterima" : "Dikirim"}
                    </p>
                    <p className="text-sm text-gray-400 font-mono">
                      {tx.type === "received"
                        ? `From: ${tx.from?.slice(0, 20)}...`
                        : `To: ${tx.to?.slice(0, 20)}...`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      tx.type === "received" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tx.type === "received" ? "+" : "-"}
                    {tx.amount} VITS
                  </p>
                  <p className="text-sm text-gray-400">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SendPage = () => {
    const [sendAmount, setSendAmount] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");

    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-yellow-500">
              Kirim VITS
            </h1>
            <p className="text-gray-300">
              Transfer VITS ke alamat lain dengan cepat dan aman
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-yellow-500">
                Alamat Penerima
              </label>
              <input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="0x742d35Cc6634C0532925a3b8d83f9d2b11e9c3d1"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-yellow-500">
                Jumlah VITS
              </label>
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
              <p className="text-sm text-gray-400 mt-2">
                Saldo tersedia: {walletBalance.toFixed(2)} VITS
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Biaya Transaksi:</span>
                <span>0.001 VITS</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Total:</span>
                <span>
                  {sendAmount
                    ? (parseFloat(sendAmount) + 0.001).toFixed(3)
                    : "0.001"}{" "}
                  VITS
                </span>
              </div>
            </div>

            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Kirim Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-yellow-500 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            VITS COIN
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`hover:text-yellow-500 transition-colors ${
                currentPage === "home" ? "text-yellow-500" : "text-white"
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => setCurrentPage("wallet")}
              className={`hover:text-yellow-500 transition-colors flex items-center gap-2 ${
                currentPage === "wallet" ? "text-yellow-500" : "text-white"
              }`}
            >
              <Wallet className="w-4 h-4" />
              Wallet
            </button>
            <button
              onClick={() => setCurrentPage("send")}
              className={`hover:text-yellow-500 transition-colors flex items-center gap-2 ${
                currentPage === "send" ? "text-yellow-500" : "text-white"
              }`}
            >
              <Send className="w-4 h-4" />
              Kirim
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition-colors ${
                  currentPage === "home" ? "text-yellow-500" : "text-white"
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => {
                  setCurrentPage("wallet");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition-colors flex items-center gap-2 ${
                  currentPage === "wallet" ? "text-yellow-500" : "text-white"
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
                className={`text-left hover:text-yellow-500 transition-colors flex items-center gap-2 ${
                  currentPage === "send" ? "text-yellow-500" : "text-white"
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

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        {currentPage === "home" && <HomePage />}
        {currentPage === "wallet" && <WalletPage />}
        {currentPage === "send" && <SendPage />}
      </div>
    </div>
  );
}

export default App;
