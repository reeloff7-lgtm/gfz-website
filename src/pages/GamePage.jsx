import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGames from '../hooks/useGames';
import Navbar from '../components/navbar';
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";
import GlobalLoader from "../components/GlobalLoader";

export default function GamePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { games, loading, error } = useGames();

  if (loading) return <GlobalLoader/>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  const game = games.find((g) => String(g.id) === String(id));

  if (!game) {
    return (
      <div className="p-6">
        <p className="text-red-600 mb-4">Game not found.</p>
        <Link to="/games" className="text-amber-600 underline">Back to Games</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar/>

      <div className="p-6">
        {/* <Link to="/games" className="text-amber-600 underline">← Back to Games</Link> */}

        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <img src={game.image} alt={game.title} className=" h-[350px] md:h-[530px] rounded-xl m-auto md:m-0 md:self-end md:justify-self-end" />

          <div className="flex gap-5 flex-col w-full">

            <h1 className="text-lg md:text-3xl font-bold mb-2">{game.title}</h1>

            <p className="text-xl">
              <del>Rs. {game.original_price}</del>{" "}
              <span className="text-green-700 font-bold">Rs. {game.price}</span>
            </p>

            {!game.in_stock && (
              <p className="text-red-600 mt-2">Out of Stock</p>
            )}

            {/* Extra details can go here */}
            <button className="mt-6 px-6 py-3 w-fit bg-amber-500 text-black font-semibold rounded-xl shadow hover:bg-amber-400 transition cursor-pointer"
                onClick={() => navigate(`/buy/${game.id}`)}
            >
              Buy Now
            </button>

          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
