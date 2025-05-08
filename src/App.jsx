import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import WomanSection from '../components/WomanSection'
import ManSection from '../components/ManSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ShoppingBag from '../components/ShoppingBag';
import { Dataprovider } from './Appcontext';
import Favorite from '../components/Favorite';

function App() {


  return (
    <Dataprovider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/WomanSection' element={<WomanSection />} />
          <Route path='/ManSection' element={<ManSection />} />
          <Route path='/About-us' element={<AboutUs />} />
          <Route path='/bag' element={<ShoppingBag />} />
          <Route path='/Favorite' element={<Favorite />} />
        </Routes>
        <Footer />
      </div>
    </Dataprovider>
  )
}

export default App;
