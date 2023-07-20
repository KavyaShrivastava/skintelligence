import React, { useEffect } from "react";
import img2 from "../../images/community.jpg";
import img1 from "../../images/resources.jpg";
import img3 from "../../images/skinexperts.jpg";
import {
  ExploreContainer,
  ExploreCard1,
  ExploreCard2,
  ExploreCard3,
  ExploreH1,
  ExploreH2,
  ExploreImage,
  ExploreP,
  ExploreWrapper,
  StyledLink
} from "./ExploreElements";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Explore = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div id="Explore" className="pt-16 pb-24 bg-gray-100">
  <h1 className="text-center font-bold text-3xl mb-8">Explore</h1>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
    <div
      className="bg-white rounded-xl shadow-lg flex-grow-0 flex-shrink-0 w-96 h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('src/images/community.jpg)"}}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="500"
    >
      <Link to={"/resources"}>
        <div className="h-full flex justify-center items-center bg-red-200 rounded-3xl">
        <h2 className="text-2xl font-bold text-gray-800">Resources</h2>
        </div>
      </Link>
    </div>
    <div
      className="bg-white shadow-lg flex-grow-0 flex-shrink-0 w-96 h-96 bg-cover bg-center rounded-3xl"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="500"
    >
      <Link to={"/community"}>
        <div className="h-full flex justify-center items-center bg-yellow-100 rounded-3xl">
        <h2 className="text-2xl font-bold text-gray-800">Community</h2>
        </div>
      </Link>
    </div>
    <div
      className="bg-white rounded-3xl shadow-lg flex-grow-0 flex-shrink-0 w-96 h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('../../images/skinexperts.jpg')" }}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="500"
    >
      <Link to={"/skinexperts"}>
        <div className="h-full flex justify-center items-center bg-orange-200 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-800">Skin Experts</h2>
        </div>
      </Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Explore;
