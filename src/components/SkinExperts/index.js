import React, { useEffect, useState } from "react";
import {
  SkinCard1,
  SkinCard2,
  SkinCard3,
  SkinExpertContainer,
  SkinH1,
  SkinP,
  SkinWrapper,
  Grid,
  Card,
  CardText,
  CardTitle,
  CardImage,
} from "./SkinExpertsElements";
import Navbar from "../Navbar";
import "./SkinExpert.css";

const SkinExpert = () => {

  const [dermatologists, setDermatologists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://127.0.0.1:8001/dermatologists`, {
        method: "GET",
      });
      const data = await response.json(); // Extract the JSON data
      setDermatologists(data);
    };
    getData();
  }, []);

  //console.log(JSON.stringify(dermatologists))

  let doctors = dermatologists
  return (
    <div className="grid-container">
      {doctors.map((doctor) => (
        <div key={doctor.ID} className="card">
          <h2>{doctor.Name}</h2>
          <p>{doctor.Location}</p>
          <p>{doctor.Contact}</p>
        </div>
      ))}
    </div>
  );
};
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(`http://127.0.0.1:5000/dermatologists`, {
  //       method: "GET",
  //     });
  //     setDermatologists(response);
  //   };
  //   getData();
  // }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://127.0.0.1:5000/dermatologists`);

  //     const newData = await response.json();
  //   };
  
  //   fetchData();
  // });


export default SkinExpert;
