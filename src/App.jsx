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

function App() {

  return (
    <>

      <GlobalLoader>

        <Routes>

          <Route path='/' element={<Body/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/buy/:id" element={<BuyNow />} />
          <Route path='/privacy' element={<Privacyy />} />
          <Route path='/faq' element={<Faq/>} />

          <Route path='*' element={<PageNotFound/>}/>

        </Routes>

      </GlobalLoader>
    </>
  )
}

export default App
