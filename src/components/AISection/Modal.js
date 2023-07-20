import React, { useState } from 'react';
import styled from 'styled-components';
import ResultModal from './ResultModal';
import {ModalContainer,
  ButtonModal,
  ModalBackground,
  ModalWrapper,
  ModalImg,
  ModalContent,
  ModalP,
  CloseModalButton
} from './AiElements'
import img3 from "../../images/skinexperts.jpg";


export const Modal = ({showModal, setShowModal, modal2, setAcneType, setSkinTone}) =>{

  const [imageFile, setImageFile] = useState(null);

  const handleFileInputChange = (event) => {
    setImageFile(event.target.files[0]);
  }


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Your image is uploaded. You skin tone is predicted to be " + data.skin_tone + " and your acne level is predicted to be " + data.acne_type + ". You'll now see a dialog box that'll ask you concerns you have for your skin. You can choose to keep your acne level and skin tone the same as predicted or you can choose to change!");
        setAcneType(JSON.stringify(data.acne_type));
        setSkinTone(JSON.stringify(data.skin_tone));
        modal2(true);
      } else {
        console.log('Upload failed');
      }
    } catch (error) {
      console.log(error);
    }
  };


      return (
        <>
        {showModal && (
        <ModalBackground>
        <ModalWrapper showModal = {showModal}>
          <ModalContent>
            <h1>Upload a Selfie</h1>
            <ModalP>Our AI based skincare recommendation system will detect your skin tone and acne grading to recommend products that work best for you skin. Upload a file and find your favorite products. </ModalP>
            <form onSubmit={handleFormSubmit}>
              <label>
                Upload Image:
                <input
                  onChange={handleFileInputChange}
                  type="file"
                  name="ImageUpload"
                  accept="image/png, image/jpeg"
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </ModalContent>
          <CloseModalButton aria-label='Close Model' onClick={()=> setShowModal(prev => !prev)}/>
        </ModalWrapper>
      </ModalBackground>
        )}
      </>
      );
  }
      
    
    



