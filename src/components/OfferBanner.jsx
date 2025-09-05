import { useEffect, useState } from "react";

export default function OfferBanner() {
  const [offerBanner, setOfferBanner] = useState(true);
  const targetDate = new Date("2025-09-10T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!offerBanner) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setOfferBanner(false);
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, offerBanner]);

  if (!offerBanner) return null;

  return (
    <div className="z-90 overflow-hidden bg-violet-500 min-h-20 flex-col md:flex-row w-full justify-evenly p-2 items-center text-2xl text-white font-bold flex relative group">
      {/* Text section - hidden on mobile, hover-hide on desktop */}
      <div className="block text-center w-1/2 group-hover:hidden md:group-hover:block">
        <p className="md:text-4xl font-extrabold">DARK SALE IS LIVE</p>
        <p className="md:text-2xl font-poppins">SALE ENDS IN</p>
      </div>

      {/* Timer section - always visible on mobile, hover-visible on desktop */}
      <div className="hidden md:flex group-hover:flex flex-col items-center w-1/2">
        <div className="flex gap-6 md:gap-8 md:text-4xl">
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
