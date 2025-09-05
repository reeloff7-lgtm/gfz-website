import { useState, useMemo } from "react";
import useGames from "../hooks/useGames";
import CategorySection from "../components/CategorySection";
import GameGrid from "../components/GameGrid";
import Pagination from "../components/Pagination";
import Navbar from '../components/navbar';
import Footer from "../components/Footer";
import GlobalLoader from "../components/GlobalLoader";

export default function GamesPage() {
  const { games, loading, error } = useGames();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 🟢 Hooks should always be before any returns
  const bestGames = games.filter((g) => g.category?.includes("best-seller"));
  const pcGames = games.filter((g) => g.category?.includes("pc"));

  const totalPages = Math.ceil(games.length / itemsPerPage);

  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return games.slice(start, start + itemsPerPage);
  }, [games, currentPage]);

  // 🟢 Now safely return based on state
  if (loading) {
    return <GlobalLoader/>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (

    <>
      <Navbar/>

      <div className="p-6 space-y-10">
        <CategorySection title="Best Sellers" games={bestGames} limit={12} />
        <CategorySection title="PC Games" games={pcGames} limit={12} />

        <section>
          <h2 className="text-3xl font-bold mb-4">🎮 All Games</h2>
          <GameGrid games={paginatedGames} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            />
        </section>
      </div>

      <Footer/>
    </>
  );
}
