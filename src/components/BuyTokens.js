import React, { useState } from "react";

const BuyTokens = () => {
  const [amount, setAmount] = useState("");
  const [tokens, setTokens] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    const tokenCount = inputAmount ? Math.floor(inputAmount / 100) : "";
    setTokens(tokenCount);
  };

  const handleBuyToken = () => {
    // Logic for buying tokens
    console.log("Buying tokens...", { amount, tokens, accountNumber });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg z">
      <h2 className="text-lg font-semibold">Buy Tokens</h2>
      <p className="text-gray-600 mt-2">
        Buy more tokens - 1 token is equivalent to <strong>NGN 100</strong>. Top
        performing agents buy up to <strong>1000 tokens</strong>. They often
        close a good number of sales before they exhaust it.
      </p>

      <div className="mt-6">
        <input
          type="number"
          placeholder="Enter amount (NGN)"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-3 mb-4 border rounded border-gray-300 focus:outline-none focus:border-green-500"
        />
        <input
          type="text"
          placeholder="Amount in Token"
          value={tokens}
          readOnly
          className="w-full p-3 mb-4 border rounded border-gray-300 bg-gray-100"
        />
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full p-3 mb-4 border rounded border-gray-300 focus:outline-none focus:border-green-500"
        />

        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
            onClick={() => {
              setAmount("");
              setTokens("");
              setAccountNumber("");
            }}
          >
            Close
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            onClick={handleBuyToken}
          >
            Buy Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTokens;
