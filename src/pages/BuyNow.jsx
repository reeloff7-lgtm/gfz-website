// src/pages/BuyNow.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import QRCode from "react-qr-code";

function BuyNow() {
  const { id } = useParams();
  const { games } = useGames();
  const [game, setGame] = useState(null);
  const [qrSize, setQrSize] = useState(200); // ✅ default for small screens

  const upiId = `parikshitpushkar@slc`;
  const yourNumber = "#";

  const queryParams = new URLSearchParams(location.search);
  const categoryKey = queryParams.get("cat");

  // ✅ handle QR responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setQrSize(300); // md and up
      } else {
        setQrSize(200); // sm
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get Price
  const getPrice = () => {
    if (categoryKey === "playstation") {
      return game.playPrice;
    }
    return game.price;
  };

  // Get Name
  const getName = () => {
    if (categoryKey === "playstation") {
      return `${game.title} ( Ps Edition )`;
    }
    return game.title;
  };

  useEffect(() => {
    if (games.length > 0) {
      const foundGame = games.find((g) => String(g.id) === id);
      setGame(foundGame || null);
    }
  }, [games, id]);

  if (!game)
    return (
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2">
        Processing Your Order...
      </p>
    );

  const orderId = `GFZ-${Date.now()}`;

  const upiLink = `upi://pay?pa=${upiId}&pn=GameStore&am=${getPrice()}&cu=INR&tn=Order%20${orderId}`;

  const handleConfirm = () => {
    const botUsername = "gfz_ai_bot";
    const telegramUrl = `https://t.me/${botUsername}?start=${orderId}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <>
      <div className="bg-[url(/bg/bg1.png)] bg-center bg-cover absolute top-0 left-0 h-screen w-screen"></div>

      <div className="text-center relative flex flex-col items-center justify-center gap-20 min-h-screen p-6 text-slate-50 backdrop-blur-sm bg-[#00000050]">
        <h1 className="text-3xl font-bold mb-4">Buy {getName()}</h1>

        <div className="flex flex-col gap-10 md:flex-row justify-center items-center ">
          <div>
            <p className="max-w-2xl text-lg md:text-2xl lg:text-3xl flex gap-4 flex-col">
              <p>
                📌 Please scan the QR using <b>Any UPI APP</b> and send the req.
                amount to{" "}
              </p>
              complete the purchase. <b>Also don’t forget to take a Screenshot of the Payment.</b> After payment, click the button below to confirm via Telegram.
            </p>
          </div>

          {/* ✅ Dynamic QR size */}
          <div className="p-4 rounded-xl shadow-lg mb-6 flex flex-col items-center">
            <p className="text-xl md:text-3xl mb-6">
              Price: <span className="font-semibold">₹{getPrice()}</span>
            </p>

            <QRCode
              value={upiLink}
              size={qrSize} // 👈 responsive size
              className="bg-white p-4 rounded-xl"
            />

            <button
              onClick={handleConfirm}
              className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600"
            >
              I’ve Paid – Confirm Order
            </button>

            <p className="mt-4 text-md text-white font-bold">
              Order ID: {orderId}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNow;

