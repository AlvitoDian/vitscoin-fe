import { useState } from "react";

export default function Transfer({ themeClasses, walletBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const contacts = [
    {
      name: "Alice Johnson",
      address: "0x742d35Cc6634C0532925a3b8d83f9d2b...",
      avatar: "A",
    },
    {
      name: "Bob Smith",
      address: "0x8ba1f109551bD432803012645Hac136c...",
      avatar: "B",
    },
    {
      name: "Charlie Brown",
      address: "0x267be1C1D684F78cb4F6a176C4911b74...",
      avatar: "C",
    },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} p-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-yellow-500">Send VITS</h1>
          <p className={themeClasses.textSecondary}>
            Transfer VITS to another address quickly and securely
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div
              className={`${themeClasses.card} p-8 rounded-2xl ${themeClasses.border} border`}
            >
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-yellow-500">
                  Select Contact or Enter Address
                </label>
                <div className="flex gap-3 mb-4">
                  {contacts.map((contact, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedContact(contact.name);
                        setRecipientAddress(contact.address);
                      }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        selectedContact === contact.name
                          ? "bg-yellow-500/20 border-yellow-500 border"
                          : `${
                              isDarkMode ? "bg-gray-800" : "bg-gray-50"
                            } hover:bg-yellow-500/10`
                      }`}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-sm">
                        {contact.avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-sm">{contact.name}</p>
                        <p className={`text-xs ${themeClasses.textMuted}`}>
                          {contact.address.slice(0, 8)}...
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search
                    className={`absolute left-3 top-3 w-5 h-5 ${themeClasses.textMuted}`}
                  />
                  <input
                    type="text"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    placeholder="Enter wallet address or search contacts..."
                    className={`w-full ${themeClasses.input} ${themeClasses.border} border rounded-xl px-12 py-3 ${themeClasses.text} placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-yellow-500">
                  VITS Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    placeholder="0.00"
                    className={`w-full ${themeClasses.input} ${themeClasses.border} border rounded-xl px-4 py-4 ${themeClasses.text} placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 text-2xl font-bold`}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        setSendAmount((walletBalance * 0.25).toFixed(2))
                      }
                      className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded"
                    >
                      25%
                    </button>
                    <button
                      onClick={() =>
                        setSendAmount((walletBalance * 0.5).toFixed(2))
                      }
                      className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded"
                    >
                      50%
                    </button>
                    <button
                      onClick={() =>
                        setSendAmount((walletBalance - 0.001).toFixed(2))
                      }
                      className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded"
                    >
                      MAX
                    </button>
                  </div>
                </div>
                <p className={`text-sm ${themeClasses.textMuted} mt-2`}>
                  Available balance: {walletBalance.toFixed(2)} VITS ≈ $
                  {(walletBalance * 2.47).toFixed(2)} USD
                </p>
              </div>

              <div
                className={`mb-6 p-4 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-semibold mb-3">Transaction Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={themeClasses.textMuted}>Send amount:</span>
                    <span>{sendAmount || "0.00"} VITS</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={themeClasses.textMuted}>Network fee:</span>
                    <span>0.001 VITS</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={themeClasses.textMuted}>
                      Estimated time:
                    </span>
                    <span className="text-green-500">~2 seconds</span>
                  </div>
                  <div
                    className={`flex justify-between text-sm pt-2 border-t ${themeClasses.border}`}
                  >
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">
                      {sendAmount
                        ? (parseFloat(sendAmount) + 0.001).toFixed(3)
                        : "0.001"}{" "}
                      VITS
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                <Send className="w-5 h-5" />
                Send Now
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Security Info */}
            <div
              className={`${themeClasses.card} p-6 rounded-2xl ${themeClasses.border} border`}
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                Transaction Security
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      End-to-End Encryption
                    </p>
                    <p className={`text-xs ${themeClasses.textMuted}`}>
                      Encrypted transactions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      Instant Confirmation
                    </p>
                    <p className={`text-xs ${themeClasses.textMuted}`}>
                      No waiting required
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Audit Trail</p>
                    <p className={`text-xs ${themeClasses.textMuted}`}>
                      Complete history
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Recipients */}
            <div
              className={`${themeClasses.card} p-6 rounded-2xl ${themeClasses.border} border`}
            >
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                Recent Recipients
              </h3>
              <div className="space-y-3">
                {contacts.slice(0, 3).map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedContact(contact.name);
                      setRecipientAddress(contact.address);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${themeClasses.cardHover}`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center text-black font-bold">
                      {contact.avatar}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-sm">{contact.name}</p>
                      <p
                        className={`text-xs ${themeClasses.textMuted} font-mono`}
                      >
                        {contact.address.slice(0, 12)}...
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
