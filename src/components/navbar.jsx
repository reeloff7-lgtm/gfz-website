import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useGames from "../hooks/useGames";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [instaLink] = useState("https://www.instagram.com/gfz_stationn/");
  const navigate = useNavigate();

  // 🔎 Search states
  const [query, setQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  // ✅ get games from custom hook
  const { games } = useGames();

  // ✅ update search results when query changes
  useEffect(() => {
    if (!query.trim()) {
      setFilteredGames([]);
      return;
    }

    // case-insensitive filter
    const results = games.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredGames(results);
  }, [query, games]);

  return (
    <div className="relative">
      {/* SEARCH BOX */}
      <div
        className={`duration-500 h-full w-full flex justify-center items-center gap-5 bg-white absolute left-0 z-20 ${
          showSearch ? "top-0" : "-top-[230px]"
        }`}
      >
        <div className="relative flex gap-10 items-center w-full p-4 md:w-1/2">
          <i className="fi fi-br-search cursor-pointer flex absolute right-20 top-1/2 translate-y-[-50%]"></i>

          {/* 🔍 Search input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..."
            className="border rounded p-2 w-full"
          />

          <i
            id="cross"
            onClick={() => {
              setShowSearch(false);
              setQuery("");
            }}
            className="fi fi-br-cross cursor-pointer hover:text-amber-500 duration-300 flex"
          ></i>

          {/* 📌 Search Suggestions (dropdown style) */}
          {filteredGames.length > 0 && (
            <ul className="absolute top-[110%] left-0 w-full bg-white border rounded shadow-md z-30">
              {filteredGames.map((game) => (
                <li
                  key={game.id}
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer"
                  onClick={() => {
                    navigate(`/game/${game.id}`);
                    setShowSearch(false);
                    setQuery("");
                  }}
                >
                  {game.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* HeaderTop Part */}
      <div className="top flex justify-evenly items-center text-xl p-6">
        <i
          onClick={() => setShowSearch(true)}
          className="fi fi-br-search cursor-pointer hover:text-amber-500 duration-300 block"
        ></i>

        <img
          onClick={() => navigate("/")}
          src="/GFZ.jpg"
          alt="logo"
          className="h-20 aspect-square rounded-full cursor-pointer"
        />

        <i
          className="fi fi-br-user-link cursor-pointer hover:text-amber-500 duration-150"
          onClick={() => window.open(instaLink, "_blank")}
        ></i>
      </div>

      {/* HeaderLower Part */}
      <div className="headLow p-4 text-[#00000080]">
        <ul className="flex gap-6 justify-center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/games">CATEGORIES</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* FooterUnder Header */}
      <div className="footerOfHeader bg-amber-500 w-full h-max text-center p-2 flex justify-center items-center font-bold text-white tracking-widest gap-3">
        Top Games. Best Deals. Play More.
      </div>
    </div>
  );
}

export default Navbar;
