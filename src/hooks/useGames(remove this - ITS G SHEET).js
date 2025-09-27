import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useGames(refreshInterval = 60000) { // default: 60s
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7W5jqUwho9RHCrXDNUV8ndIk6a_V8fc9kJyRxzR0MQqQhWd5FxU-1SKToxwB6yeTFV_jM5ikzMDB6/pub?gid=650552493&single=true&output=csv";

  // helper: compare arrays by JSON string
  const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const fetchData = async () => {
    try {
      const res = await fetch(url + "&t=" + Date.now()); // cache-bust
      const csv = await res.text();
      const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

      const mapped = data.map(r => ({
        id: r.id,
        title: r.title,
        in_stock: r.in_stock?.toLowerCase() === "true",
        original_price: Number(r.original_price),
        price: Number(r.price),
        image: r.image,
        category: r.category ? r.category.split(",").map(c => c.trim()) : []
      }));

      setGames(prev => (isEqual(prev, mapped) ? prev : mapped));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData(); // initial fetch
    const interval = setInterval(fetchData, refreshInterval); // auto-refresh
    return () => clearInterval(interval); // cleanup
  }, [refreshInterval]);

  return { games, error };
}
