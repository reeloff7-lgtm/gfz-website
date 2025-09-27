import { useParams, Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGames from '../hooks/useGames';
import Navbar from '../components/navbar';
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";
import GlobalLoader from "../components/GlobalLoader";
import SupabaseDB from "../components/SupabaseDB";

export default function GamePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryKey = queryParams.get("cat"); // 👉 pc OR playstation

  const { games, loading, error } = useGames();

  if (loading) return <GlobalLoader />;
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

  // 🎮 Decide image
  const getImage = () => {
    if (categoryKey === "playstation") {
      return game.playImg;
    }
    return game.image;
  };

  // 🎮 Decide title (if you want diff names per platform)
  const getTitle = () => {
    if (categoryKey === "playstation") {
      return `${game.title} (PS Edition)`;
    }
    return game.title;
  };

  // Decide Game Prices...


  return (
    <>
      <Navbar />

      <div className="p-6 flex flex-col items-center">
        <div className="mt-4 grid md:grid-cols-2 gap-6">

          <img
            src={getImage()}
            alt={game.title}
            className="h-[350px] md:h-[530px] rounded-xl m-auto md:m-0 md:self-start lg:self-end lg:justify-self-end"
          />

          <div className="flex gap-5 flex-col w-full">

            <h1 className="text-lg md:text-3xl font-bold mb-2">{getTitle()}</h1>

            <p className="text-xl">
              <del>Rs. {game.original_price}</del>{" "}
              <span className="text-green-700 font-bold">Rs. {game.price}</span>
            </p>

            {!game.in_stock && (
              <p className="text-red-600 mt-2">Out of Stock</p>
            )}

            <button
              className="mt-6 px-6 py-3 w-fit bg-amber-500 text-black font-semibold rounded-xl shadow hover:bg-amber-400 transition cursor-pointer"
              onClick={() => navigate(`/buy/${game.id}/?cat=${categoryKey}`)}
            >
              Buy Now
            </button>

            {/* Purchase Instructions */}
            <div>
              <h3 className="font-bold text-2xl p-4">How to Purchase</h3>
              <ol className="list-decimal flex flex-col gap-2 px-4">
                <li>Click the <strong>"Buy Now"</strong> button.</li>
                <li>Pay the required amount by scanning the QR code with any UPI app.</li>
                <li>After paying, click the <strong>"I Have Paid"</strong> button.</li>
                <li>You will be redirected to our Telegram bot. Click <strong>"Start"</strong>.</li>
                <li>Send the screenshot (SS) of your payment to the bot.</li>
                <li>Join our main Telegram group using the link provided.</li>
                <li>
                  An admin will confirm your payment and process your order.
                  <br />
                  <strong>If you bought a Combo:</strong> Please mention the combo in the group chat.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* COMMENTS */}
        <SupabaseDB />

      </div>

      <Footer />
    </>
  );
}
