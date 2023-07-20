import React, { useState, useContext } from "react";
import "./ResultModal.css";
import dataset from './DataSet';

const ResultModal = ({ skinTone, acneType}) => {


  // const [modalData, setModalData] = useState(false);

  // const[modalDataSet, setModalDataSet] = useState[null];

  const features = [
    "fine lines",
    "wrinkles",
    "redness",
    "dull",
    "pore",
    "pigmentation",
    "blackheads",
    "whiteheads",
    "blemishes",
    "dark circles",
    "eye bags",
    "dark spots",
  ];

  
  

  const [isOpen, setIsOpen] = useState(true);

  const [selectedSkinType, setSelectedSkinType] = useState("");
  const [selectedAcneType, setSelectedAcneType] = useState(acneType);
  const [selectedSkinTone, setSelectedSkinTone] = useState(skinTone);
  const [selectedFeatures, setSelectedFeatures] = useState("");

  const [formData, setFormData] = useState({
    skinType: null,
    acneType: null,
    skinTone: null,
    features: []
  });
  

  const handleSkinTypeSelection = (e) => {
    setSelectedSkinType(e.target.value);
    setFormData({
      ...formData,
      skinType: e.target.value
    });
  };
  
  const handleAcneTypeSelection = (e) => {
    console.log(e.target.value)
    setSelectedAcneType(e.target.value);
    setFormData({
      ...formData,
      acneType: e.target.value
    });
  };
  
  const handleSkinToneSelection = (e) => {
    setSelectedSkinTone(e.target.value);
    setFormData({
      ...formData,
      skinTone: e.target.value
    });
  };
  
  const handleFeatureSelection = (e) => {
    const value = e.target.value;
    const isSelected = selectedFeatures.includes(value);
    setSelectedFeatures((prevFeatures) => {
      if (isSelected) {
        return prevFeatures.filter((feature) => feature !== value);
      } else {
        return [...prevFeatures, value];
      }
    });
    setFormData({
      ...formData,
      features: isSelected ? selectedFeatures.filter((feature) => feature !== value) : [...selectedFeatures, value]
    });
  };
  
  const handleSaveButtonClick = () => {
    const updatedFormData = {
      skinType: String(selectedSkinType),
      acneType: String(selectedAcneType),
      skinTone: String(selectedSkinTone),
      features: selectedFeatures
    };
    setFormData(updatedFormData);
    fetch("http://127.0.0.1:8000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        //setModalDataSet(data)
        // setModalDataSet(data)
        //setShowModal(true)
      })
      .catch(error => console.error(error));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
      <div class="flex justify-center items-center bg-gray-100 py-8">
  <div class="max-w-5xl mx-auto px-6">
    <div class="result-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Select Skin and Beauty Preferences</h4>
          <button class="close-btn" onClick={handleClose}>
            x
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="skinType" class="block font-medium text-gray-700">Skin Type:</label>
            <select id="skinType" value={selectedSkinType} onChange={handleSkinTypeSelection} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="default"></option>
              <option value="normal">Normal</option>
              <option value="oily">Oily</option>
              <option value="combination">Combination</option>
              <option value="dry">Dry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="skinTone" class="block font-medium text-gray-700">Skin Tone:</label>
            <select id="skinTone" value={selectedSkinTone} onChange={handleSkinToneSelection} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="default"></option>
              <option value="fair to light">Fair to light</option>
              <option value="light to medium">Light to Medium</option>
              <option value="Medium to Dark">Medium to Dark</option>
            </select>
          </div>
          <div class="form-group">
            <label for="acneType" class="block font-medium text-gray-700">Acne Type:</label>
            <select id="acneType" value={selectedAcneType} onChange={handleAcneTypeSelection} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="default"></option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
          <div class="form-group">
            <label class="block font-medium text-gray-700">Features:</label>
            <div class="features-container mt-1">
              {features.map((feature, index) => (
                <div key={index} class="feature flex items-center">
                  <input
                    type="checkbox"
                    id={`feature-${index}`}
                    value={feature}
                    checked={selectedFeatures.includes(feature)}
                    onChange={handleFeatureSelection}
                    class="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label for={`feature-${index}`} class="ml-2 block text-gray-900">{feature}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn">
            Cancel
           </button>
        <button className="save-btn" onClick={handleSaveButtonClick}>
           Save
          </button>
         </div>
         </div>  
         </div> 
         </div>
         </div>

         );

    {/* // <div >
    // <div className="result-modal">
    //   <div className="modal-content">
    //     <div className="modal-header">
    //       <h4 className="modal-title">Select Skin and Beauty Preferences</h4>
    //       <button className="close-btn">
    //         &times;
    //       </button>
    //     </div>
    //     <div className="modal-body">
    //       <div className="form-group">
    //         <label htmlFor="skinType">Skin Type:</label>
    //         <select id="skinType" value={selectedSkinType} onChange={handleSkinTypeSelection}>
    //         <option value="default"></option>
    //           <option value="normal">Normal</option>
    //           <option value="oily">Oily</option>
    //           <option value="combination">Combination</option>
    //           <option value="dry">Dry</option>
    //         </select>
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="skinTone">Skin Tone:</label>
    //         <select id="skinTone" value={selectedSkinTone} onChange={handleSkinToneSelection}>
    //         <option value="default"></option>
    //           <option value="fair to light">Fair to light</option>
    //           <option value="light to medium">Light to Medium</option>
    //           <option value="Medium to Dark">Medium to Dark</option>
    //         </select>
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="acneType">Acne Type:</label>
    //         <select id="acneType" value={selectedAcneType} onChange={handleAcneTypeSelection}>
    //         <option value="default"></option>
    //           <option value="Low">Low</option>
    //           <option value="Moderate">Moderate</option>
    //           <option value="Severe">Severe</option>
    //         </select>
    //       </div>
    //       <div className="form-group">
    //         <label>Features:</label>
    //         <div className="features-container">
    //           {features.map((feature, index) => (
    //             <div key={index} className="feature">
    //               <input
    //                 type="checkbox"
    //                 id={`feature-${index}`}
    //                 value={feature}
    //                 checked={selectedFeatures.includes(feature)}
    //                 onChange={handleFeatureSelection}
    //               />
    //               <label htmlFor={`feature-${index}`}>{feature}</label> */}
    {/* //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="modal-footer">
    //       <button className="cancel-btn">
    //         Cancel
    //       </button>
    //       <button className="save-btn" onClick={handleSaveButtonClick}>
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </div> */}


 }

export default ResultModal;
