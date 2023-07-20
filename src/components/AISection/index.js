import React, { useEffect, useState } from "react";
import { ButtonGetStarted } from "../ButtonElement";
import ResultModal from "./ResultModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal } from "./Modal";
import Dataset from "./DataSet";

const AiSection = ({
  id,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [showResultModal, setShowResultModal] = useState(false);

  const [acneType, setAcneType] = useState("");
  const [skinTone, setSkinTone] = useState("");


  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div
        id={id}
        className="flex flex-col md:flex-row items-center justify-center bg-orange-300"
      >
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="backdrop-blur-lg bg-white bg-opacity-30 w-2/3 h-96">
            <div
              className="ml-10"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <div className="text-center md:text-left mt-36 text-xl">
                {topLine}
              </div>
              <h1 className="text-center md:text-left">
                Your Personalised Skincare
              </h1>
              <h2 className="text-center md:text-left w">
                Upload a selfie and answer a few questions to get your very own
                personal skincare recommendations
              </h2>
              <div className="flex flex-col md:flex-row justify-center md:justify-start">
                <button
                  onClick={openModal}
                  className=" px-5 rounded-md bg-black text-white bg-opacity-30"
                >
                  Get Started
                </button>
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  modal2={setShowResultModal}
                  setAcneType={setAcneType}
                  setSkinTone={setSkinTone}
                />
                {showResultModal && (
                  <ResultModal
                    skinTone={skinTone}
                    acneType={acneType}
                  /> 
                )}
                 {/* /* {showModalData &&(
                  <Dataset data = {modalDataSet}
                  />
                  )}  */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div>
            <img
              src={img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSection;
