import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer } from "./HeroElements";
import { HeroBg } from "./HeroElements";
import { VideoBg } from "./HeroElements";
import {
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDown,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";


const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="relative">
      <video
        className="w-screen -z-10"
        autoplay
        loop
        muted
        src={Video}
        type="video/mp4"
      ></video>
      <div className="absolute top-1/3 left-1/3 right-1/3 text-center">
        <h1 className="text-4xl font-bold font-sans text-white">Skintelligence</h1>
        <h2 className="text-xl mt-4 text-white  font-sans">Making intelligent choices</h2>
        <div className="mt-8">
          <Button
            to="Discover"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? <ArrowDown /> : <ArrowRight />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
