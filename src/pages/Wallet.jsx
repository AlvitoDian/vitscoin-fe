import {
  Bell,
  Settings,
  ArrowUp,
  Send,
  Plus,
  TrendingUp,
  ArrowDown,
  Copy,
} from "lucide-react";

export default function Wallet({
  themeClasses,
  walletBalance = 0,
  transactions = [],
  isDarkMode,
  setCurrentPage,
}) {
  return (
    <div
      className={`min-h-screen ${themeClasses?.bg} ${themeClasses?.text} p-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-yellow-500">
              VITS Wallet
            </h1>
            <p className={themeClasses?.textSecondary}>
              Manage your digital assets easily and securely
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className={`p-3 ${themeClasses?.card} rounded-xl ${themeClasses?.cardHover} transition-colors`}
            >
              <Bell className="w-5 h-5 text-yellow-500" />
            </button>
            <button
              className={`p-3 ${themeClasses?.card} rounded-xl ${themeClasses?.cardHover} transition-colors`}
            >
              <Settings className="w-5 h-5 text-yellow-500" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Enhanced Balance Card */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 p-8 rounded-3xl mb-8 text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-sm opacity-80 font-medium">
                        Total Balance
                      </p>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                    <h2 className="text-5xl font-bold mb-2">
                      {walletBalance.toFixed(2)}
                    </h2>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <span>VITS</span>
                      <span>≈ ${(walletBalance * 2.47).toFixed(2)} USD</span>
                      <div className="flex items-center gap-1 text-green-700">
                        <ArrowUp className="w-3 h-3" />
                        +5.2%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Wallet className="w-8 h-8 mb-2" />
                    <div className="text-xs opacity-80">Active</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentPage("send")}
                    className="bg-black/20 hover:bg-black/30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                  <button className="bg-black/20 hover:bg-black/30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                    <Plus className="w-4 h-4" />
                    Buy
                  </button>
                  <button className="bg-black/20 hover:bg-black/30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4" />
                    Swap
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div
              className={`${themeClasses?.card} p-6 rounded-2xl ${themeClasses?.border} border`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-yellow-500">
                  Recent Transactions
                </h3>
                <button
                  className={`text-sm ${themeClasses?.textSecondary} hover:text-yellow-500 transition-colors`}
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div
                    key={tx.id}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-50"
                    } hover:scale-[1.02] transition-transform`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          tx.type === "received"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {tx.type === "received" ? (
                          <ArrowDown className="w-5 h-5" />
                        ) : (
                          <ArrowUp className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">
                          {tx.type === "received" ? "Received from" : "Sent to"}
                        </p>
                        <p
                          className={`text-sm ${themeClasses?.textMuted} font-mono`}
                        >
                          {tx.type === "received"
                            ? `${tx.from?.slice(0, 16)}...`
                            : `${tx.to?.slice(0, 16)}...`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          tx.type === "received"
                            ? themeClasses?.success
                            : themeClasses?.error
                        }`}
                      >
                        {tx.type === "received" ? "+" : "-"}
                        {tx.amount} VITS
                      </p>
                      <p className={`text-sm ${themeClasses?.textMuted}`}>
                        {tx.date} {tx.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Wallet Address */}
            <div
              className={`${themeClasses?.card} p-6 rounded-2xl ${themeClasses?.border} border`}
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                Wallet Address
              </h3>
              <div
                className={`flex items-center gap-3 p-4 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${themeClasses?.textMuted} font-mono`}>
                    0x742d35Cc...
                  </p>
                </div>
                <button className="text-yellow-500 hover:text-yellow-400 p-2 rounded-lg hover:bg-yellow-500/10 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className={`${themeClasses?.card} p-6 rounded-2xl ${themeClasses?.border} border`}
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={themeClasses?.textSecondary}>
                    Total Transactions
                  </span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeClasses?.textSecondary}>
                    This Month
                  </span>
                  <span className="font-semibold text-green-500">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={themeClasses?.textSecondary}>
                    Staking Reward
                  </span>
                  <span className="font-semibold">25.4 VITS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
