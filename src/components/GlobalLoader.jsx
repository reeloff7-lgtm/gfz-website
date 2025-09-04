import { useEffect, useState } from "react";

export default function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ show loader for 2 sec

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative flex items-center justify-center h-screen w-screen bg-white text-amber-400">
            
            <img src="/GFZ.jpg" alt="" className="relative rounded-full h-40 z-10"/>
            <div className='absolute rounded-full bg-amber-400 h-30 aspect-square animate-ping'></div>
      </div>
    );
  }

  return children;
}
