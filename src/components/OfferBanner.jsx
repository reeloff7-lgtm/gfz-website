import { useEffect, useState } from "react";

export default function OfferBanner() {
  const [offerBanner, setOfferBanner] = useState(true);

  // Always 24 hours in milliseconds
  const COUNTDOWN_TIME = 24 * 60 * 60 * 1000;

  // Save start time in state so it resets properly on rerender
  const [startTime] = useState(Date.now());

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!offerBanner) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = (now - startTime) % COUNTDOWN_TIME; // loop every 24h
      const diff = COUNTDOWN_TIME - elapsed;

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [offerBanner, startTime]);

  if (!offerBanner) return null;

  return (
    <div className="z-90 overflow-hidden bg-violet-500 min-h-20 w-full justify-evenly p-2 items-center text-white font-bold flex flex-col md:flex-row relative group">

      {/* Text section */}
      <div className="text-center md:w-1/2">
        <p className="text-2xl md:text-4xl font-extrabold">DARK SALE IS LIVE</p>
        <p className="text-lg md:text-2xl font-poppins">SALE ENDS IN</p>
      </div>

      {/* Timer section */}
      <div className="mt-2 md:mt-0 flex flex-col items-center md:w-1/2">
        <div className="flex gap-6 md:gap-8 text-2xl md:text-4xl">
          <p className="text-amber-400">{timeLeft.days}</p>
          <p>{timeLeft.hours}</p>
          <p>{timeLeft.minutes}</p>
          <p>{timeLeft.seconds}</p>
        </div>
        <div className="flex gap-6 md:gap-12 font-normal font-poppins text-sm">
          <p>DAY</p>
          <p>HR</p>
          <p>MIN</p>
          <p>SEC</p>
        </div>
      </div>
    </div>
  );
}
