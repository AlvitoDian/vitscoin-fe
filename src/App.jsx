import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Navbar from "./component/Navbar";
import Transfer from "./pages/Transfer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [walletBalance] = useState(1250.75);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transactions] = useState([
    {
      id: 1,
      type: "received",
      amount: 500,
      from: "0x742d35Cc6634C0532925a3b8d83f9d2b...",
      date: "2024-07-15",
      time: "14:30",
    },
    {
      id: 2,
      type: "sent",
      amount: 250,
      to: "0x8ba1f109551bD432803012645Hac136c...",
      date: "2024-07-14",
      time: "09:15",
    },
    {
      id: 3,
      type: "received",
      amount: 1000,
      from: "0x267be1C1D684F78cb4F6a176C4911b74...",
      date: "2024-07-13",
      time: "16:45",
    },
    {
      id: 4,
      type: "sent",
      amount: 75,
      to: "0x8ba1f109551bD432803012645Hac136c...",
      date: "2024-07-12",
      time: "11:20",
    },
  ]);

  const themeClasses = {
    bg: isDarkMode ? "bg-black" : "bg-gray-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    card: isDarkMode ? "bg-gray-900" : "bg-white",
    cardHover: isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50",
    input: isDarkMode
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-300",
    nav: isDarkMode ? "bg-black/80" : "bg-white/80",
    navBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    gradient: isDarkMode
      ? "from-yellow-500/20 via-black to-black"
      : "from-yellow-400/20 via-gray-50 to-gray-50",
    glowYellow: isDarkMode ? "bg-yellow-500/10" : "bg-yellow-400/20",
    glowYellowSmall: isDarkMode ? "bg-yellow-500/5" : "bg-yellow-400/10",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    success: isDarkMode ? "text-green-400" : "text-green-600",
    error: isDarkMode ? "text-red-400" : "text-red-600",
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}
      >
        <Navbar
          themeClasses={themeClasses}
          setIsDarkMode={setIsDarkMode}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          isMenuOpen={isMenuOpen}
        />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={<Home themeClasses={themeClasses} />}
            />
            <Route
              path="/wallet"
              element={
                <Wallet
                  themeClasses={themeClasses}
                  walletBalance={walletBalance}
                  transactions={transactions}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/transfer"
              element={
                <Transfer
                  themeClasses={themeClasses}
                  walletBalance={walletBalance}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
