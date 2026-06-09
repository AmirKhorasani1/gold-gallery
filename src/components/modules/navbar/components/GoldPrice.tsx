"use client";

import React, { useState, useEffect } from "react";

export default function GoldPrice() {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Function to fetch real-time gold price
    const fetchGoldPrice = async () => {
      try {
        // TODO: Replace with your actual API endpoint for gold prices
        // const response = await fetch("https://api.yoursite.com/gold-price");
        // const data = await response.json();
        // setPrice(data.price);

        // MOCK DATA: Simulating real-time price changes for demonstration
        const basePrice = 184910000;
        // Adding a random fluctuation between -50,000 and +50,000
        const randomFluctuation = Math.floor(Math.random() * 100000) - 50000; 
        
        setPrice(basePrice + randomFluctuation);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gold price:", error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchGoldPrice();

    // Set up an interval to fetch data every 60 seconds
    const interval = setInterval(fetchGoldPrice, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-2.5 text-center text-xs font-semibold bg-[#10494b1a] md:bg-transparent">
      <span className="text-gray-700">قیمت هر گرم طلا ۱۸ عیار :</span>
      {loading ? (
        // Skeleton loader for better UX during initial load
        <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
      ) : (
        <span className="text-[#10494b] transition-all duration-300">
          {price ? new Intl.NumberFormat("fa-IR").format(price) : "---"} ریال
        </span>
      )}
    </div>
  );
}
