import { useEffect, useState } from "react";

export default function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/data.json") // make sure data.json is in public/
        .then((res) => res.json())
        .then((data) => {
          setGames(data.games);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000); // ⏱️ add delay of 2 sec

    return () => clearTimeout(timer);
  }, []);

  return { games, loading, error };
}
