// src/pages/CategoryPage.jsx
import { useState, useMemo } from "react";
import useGames from "../hooks/useGames";
import GameGrid from "../components/GameGrid";
import Pagination from "../components/Pagination";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import GlobalLoader from "../components/GlobalLoader";

export default function CategoryPage({ title, categoryKey }) {
  const { games, loading, error } = useGames();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 20;

  // ✅ Filter by category (or all if null)
  const filteredGames = categoryKey
    ? games.filter((g) => g.category?.includes(categoryKey))
    : games;

  // ✅ Best sellers *inside this category*
  const bestInCategory = filteredGames.filter((g) =>
    g.category?.includes("best-seller")
  );

  // ✅ Sort
  const sortedGames = useMemo(() => {
    return [...filteredGames].sort((a, b) => {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  }, [filteredGames, sortOrder]);

  const totalPages = Math.ceil(sortedGames.length / itemsPerPage);

  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedGames.slice(start, start + itemsPerPage);
  }, [sortedGames, currentPage]);

  if (loading) return <GlobalLoader />;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-10">
        {/* 🔥 Category Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>

          {/* Sort dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 border rounded-lg bg-gray-800 text-white"
          >
            <option value="asc">Sort: A → Z</option>
            <option value="desc">Sort: Z → A</option>
          </select>
        </div>

        {/* ✅ Show Best Sellers in this category */}
        {bestInCategory.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-3">🔥 Best Sellers</h3>
            {/* 🔧 pass categoryKey here */}
            <GameGrid games={bestInCategory} categoryKey={categoryKey} />
          </section>
        )}

        {/* ✅ Show All Games in this category */}
        <section>
          <h3 className="text-2xl font-bold mb-3">All {title}</h3>
          {/* 🔧 pass categoryKey here */}
          <GameGrid games={paginatedGames} categoryKey={categoryKey} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
