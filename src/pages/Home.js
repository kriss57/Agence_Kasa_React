import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

import image from '../_assets/images/banner.png'
import './home.scss'

const Home = () => {
  return (
    <main className="Home">
      <Banner image={image} title='Chez vous, partout et ailleurs' />
      <Card />
    </main>
  );
};

export default Home;
