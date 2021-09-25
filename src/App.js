import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {
  productsData,
  productsDataTwo,
  productsDataThree
} from "./components/Products/data";
import Feature from "./components/Feature";
import VideoBanner from "./components/VideoBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productsData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productsDataTwo} />
      <VideoBanner />
      <Products heading="Enjoy these drinks" data={productsDataThree} />
      <Footer />
    </Router>
  );
}

export default App;
