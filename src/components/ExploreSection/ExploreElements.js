import styled from "styled-components";
import img2 from "../../images/community.jpg";
import img1 from "../../images/resources.jpg";
import img3 from "../../images/skinexperts.jpg";
import {Link} from 'react-router-dom';

export const ExploreContainer = styled.div`
    background-image: url(${img1});
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480 px){
        height: 1300px;
    }

`
export const ExploreWrapper = styled.div`

    max-width: 1000px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 140px;
    justfiy-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
         
    }

`
export const ExploreCard1 = styled.div`
    background-image: url(${img1});
    background-size: cover;
    opacity: 0.8;
    display: flex;
    flex-direction: flex-start;
    align-itmes: center;
    border-radius: 20%;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    width: 350px;
    height: 350px;
    
    &:hover{
        transform: scale(1.1);
        transition: all 0.3 ease-in-out;
        cursor: pointer;

    }



`
export const ExploreCard2 = styled.div`
    background-image: url(${img2});
    background-size: cover;
    opacity: 0.9;
    display: flex;
    flex-direction: flex-start;
    align-itmes: center;
    border-radius: 20%;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    width: 350px;
    height: 350px;
    
    &:hover{
        transform: scale(1.1);
        transition: all 0.2 ease-in-out;
        cursor: pointer;

    }

`
export const ExploreCard3 = styled.div`
    background-image: url(${img3});
    background-size: cover;
    opacity: 0.9;
    display: flex;
    flex-direction: flex-start;
    align-itmes: center;
    border-radius: 20%;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgb(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    width: 350px;
    height: 350px;
    
    &:hover{
        transform: scale(1.1);
        transition: all 0.2 ease-in-out;
        cursor: pointer;

    }

`

export const ExploreImage = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`
export const ExploreH1 = styled.h1`
    font-size: 1.5rem;
    color: black;
    letter-spacing: 1vh;
    font-family: Arial;
    margin-left: 650px;
    display: inline;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`
export const ExploreH2 = styled.h1`
    font-size: 1rem;
    margin-bottom: 10px;
    font-size: 2.5rem; 
    font-weight: bolder;
    justify-content: center;
    align-items: center;
    margin-left: 65px;
    margin-top: 100px;
    color: orange;

`
export const StyledLink = styled(Link) `
    color: black;
    text-decoration: none;
    position: relative;
`