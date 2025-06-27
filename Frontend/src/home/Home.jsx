import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      <h1>Welcome to the Old Bookstore</h1>
<p>Explore rare collections, vintage editions, and timeless stories.</p>

    </>
  );
}

export default Home;
