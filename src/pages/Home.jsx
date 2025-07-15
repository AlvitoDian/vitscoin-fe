import {
  Wallet,
  ArrowRight,
  ArrowUp,
  Shield,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function Home({ themeClasses, setCurrentPage }) {
  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${themeClasses.gradient}`}
        ></div>

        {/* Animated background elements */}
        <div
          className={`absolute top-20 left-20 w-72 h-72 ${themeClasses.glowYellow} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 ${themeClasses.glowYellowSmall} rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${themeClasses.glowYellow} rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
            VITS COIN
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed`}
          >
            The digital currency revolution of the future. Smart blockchain with
            AI technology for an unparalleled trading experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setCurrentPage("wallet")}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Open Wallet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Price ticker */}
          <div
            className={`inline-flex items-center gap-4 ${themeClasses.card} px-6 py-4 rounded-xl ${themeClasses.border} border backdrop-blur-sm`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">VITS/USD</span>
            </div>
            <div className="text-2xl font-bold text-yellow-500">$2.47</div>
            <div className="flex items-center gap-1 text-green-500 text-sm">
              <ArrowUp className="w-4 h-4" />
              +12.5%
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
              Why VITS Coin?
            </h2>
            <p
              className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Cutting-edge blockchain technology with revolutionary features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`group ${themeClasses.card} p-8 rounded-2xl ${themeClasses.cardHover} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${themeClasses.border} border`}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quantum Security</h3>
              <p className={themeClasses.textSecondary}>
                Quantum-resistant encryption and multi-signature for maximum
                protection of your digital assets.
              </p>
            </div>

            <div
              className={`group ${themeClasses.card} p-8 rounded-2xl ${themeClasses.cardHover} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${themeClasses.border} border`}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Lightning Fast</h3>
              <p className={themeClasses.textSecondary}>
                Instant transactions with 100,000 TPS throughput and near-zero
                fees.
              </p>
            </div>

            <div
              className={`group ${themeClasses.card} p-8 rounded-2xl ${themeClasses.cardHover} transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${themeClasses.border} border`}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Ecosystem</h3>
              <p className={themeClasses.textSecondary}>
                DeFi, NFTs, and smart contracts in one perfectly integrated
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className={`py-20 px-4 ${themeClasses.card}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-black" />
              </div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                $2.5M+
              </div>
              <div className={`${themeClasses.textSecondary} font-medium`}>
                Total Volume
              </div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
              <div className={`${themeClasses.textSecondary} font-medium`}>
                Active Wallets
              </div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
              <div className={`${themeClasses.textSecondary} font-medium`}>
                Uptime
              </div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-500 mb-2">
                24/7
              </div>
              <div className={`${themeClasses.textSecondary} font-medium`}>
                AI Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
