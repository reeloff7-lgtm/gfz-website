// src/pages/BuyNow.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import QRCode from "react-qr-code";

function BuyNow() {
  const { id } = useParams();
  const { games } = useGames();
  const [game, setGame] = useState(null);
  const upiId = `rishi1947@fam`;
  const yourNumber = "918360369655"; // ✅ no '+'

  useEffect(() => {
    if (games.length > 0) {
      const foundGame = games.find((g) => String(g.id) === id);
      setGame(foundGame || null);
    }
  }, [games, id]);

  if (!game) return <p className="absolute top-1/2 left-1/2 -translate-x-1/2">Processing Your Order...</p>;

  const orderId = `GFZ-${Date.now()}`;

  const upiLink = `upi://pay?pa=${upiId}&pn=GameStore&am=${game.price}&cu=INR&tn=Order%20${orderId}`;

  // const handleConfirm = () => {
  //   const message = `Hi! I’ve paid for "${game.title}" (INR ${game.price}).\n\nOrder ID: ${orderId}\n\nHere is my payment screenshot:`;
  //   const whatsappUrl = `https://wa.me/${yourNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(whatsappUrl, "_blank");
  // };

  const handleConfirm = () => {
    const botUsername = "gfz_ai_bot"; // your bot username
    // Always use https://t.me instead of tg://
    const telegramUrl = `https://t.me/${botUsername}?start=${orderId}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Buy {game.title}</h1>
      <p className="text-lg text-gray-700 mb-6">
        Price: <span className="font-semibold">₹{game.price}</span>
      </p>

      {/* ✅ Dynamic Fampay QR */}
      <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
        <QRCode value={upiLink} size={200} />
      </div>

      <p className="text-center text-gray-600 max-w-2xl">
        📌 Please scan the QR using <b>Any UPI APP</b> and send
        <b> ₹{game.price}</b> to complete the purchase. <br />
        <b>Also don't forget to take ScreenShot of the Payment.</b> <br/>
        After payment, click the button below to confirm via WhatsApp.
      </p>

      <button
        onClick={handleConfirm}
        className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600"
      >
        I’ve Paid – Confirm Order
      </button>

      <p className="mt-4 text-sm text-gray-500">Order ID: {orderId}</p>
    </div>
  );
}

export default BuyNow;



