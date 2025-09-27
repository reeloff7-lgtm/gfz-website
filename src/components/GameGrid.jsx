import GameCard from "./GameCard";

export default function GameGrid({ games, categoryKey }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} categoryKey={categoryKey} />
      ))}
    </div>
  );
}
