import GameGrid from "./GameGrid";

export default function CategorySection({ title, games, limit }) {
  const list = limit ? games.slice(0, limit) : games;
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <GameGrid games={list} />
    </section>
  );
}
