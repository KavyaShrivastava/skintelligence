import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AiSection from "../components/AISection";
import { HomeObjOne } from "../components/AISection/Data";
import Explore from "../components/ExploreSection";
import LoginButton from "../components/LoginButton";

const Home = () => {

  // const { loginWithRedirect } = useAuth0();

  // loginWithRedirect()

  return (
    <>
      <Navbar />
      <HeroSection />
      <AiSection {...HomeObjOne} />
      <Explore />     
    </>
  );
};
export default Home;

