import React from 'react';
import Navbar from './navbar';
import useGames from '../hooks/useGames';
import CategorySection from './CategorySection';
import Footer from './Footer';
import ReviewSlider from './ReviewSlider';
import GlobalLoader from './GlobalLoader';

function body() {
  const { games, loading, error } = useGames();

  if (loading) return <GlobalLoader/>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  const bestGames = games.filter((g) => g.category?.includes("best-seller"));
  const pcGames = games.filter((g) => g.category?.includes("pc"));

  return (

    <>
        <Navbar/>

        {/* HERO SECTION */}
        <div className="hero w-screen aspect-video relative">

            <img src="/GFZ Hero.webp" alt="" className='w-full' />

        </div>

         <div className="p-6 space-y-10">
          <CategorySection title="Best Sellers" games={bestGames} limit={12} />

          <ReviewSlider/>

          <CategorySection title="PC Games" games={pcGames} limit={6} />
        </div>


        <Footer/>
    </>
  )
}

export default body
