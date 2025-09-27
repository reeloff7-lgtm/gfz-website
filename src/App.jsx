import React from 'react'
import { Routes, Route } from "react-router-dom";
import Body from './components/body'
import Categories from './pages/Categories'
import PageNotFound from './components/pageNotFound';
import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import GlobalLoader from './components/GlobalLoader';
import BuyNow from "./pages/BuyNow";
import Footer from './components/Footer';
import Privacyy from './pages/Privacyy';
import Faq from './pages/Faq';
import OfferBanner from './components/OfferBanner';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
  <div className='bg-zinc-800 text-white'>


      <GlobalLoader>
        <OfferBanner/>

        <Routes>

          <Route path='/' element={<Body/>} />
          <Route path='/categories' element={<Categories/>} />
          {/* <Route path="/games" element={<GamesPage />} /> */}
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/buy/:id" element={<BuyNow />} />
          <Route path='/privacy' element={<Privacyy />} />
          <Route path='/faq' element={<Faq/>} />

        <Route
          path="/games"
          element={<CategoryPage title="All Games" categoryKey={null} />}
        />
        <Route
          path="/best"
          element={<CategoryPage title="Best Seller Games" categoryKey="best-seller" />}
        />
        <Route
          path="/pc"
          element={<CategoryPage title="PC Games" categoryKey="pc" />}
        />
        <Route
          path="/playStation"
          element={<CategoryPage title="PlayStation Games" categoryKey="playstation" />}
        />

          <Route
            path="/ott"
            element={<CategoryPage title="OTT Subscriptions" categoryKey="ott" />}
          />

          <Route path='*' element={<PageNotFound/>}/>

        </Routes>

      </GlobalLoader>
    </div>
  )
}

export default App
