import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`} className="block flex-shrink-0">
      <div className="relative bg-white rounded-xl p-4 shadow hover:shadow-lg transition w-full h-full justify-between flex flex-col text-center">
        <div className="absolute top-2.5 left-2.5 z-10 bg-amber-500 px-2 py-0.5 text-sm font-bold rounded-sm">
          SALE
        </div>

        <div className="gImg mb-3">
          <img src={game.image} alt={game.title} className="w-full rounded-lg" />
        </div>

        <p className="gTitle text-lg font-semibold">{game.title}</p>

        <p className="text-lg mt-1">
          <del>Rs. {game.original_price}</del>{" "}
          <span className="text-green-700 font-semibold">Rs. {game.price}</span>
        </p>

        {!game.in_stock && (
          <div className="mt-2 inline-block text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
    </Link>
  );
}
