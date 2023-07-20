import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {MdClose} from 'react-icons/md';


export const AiContainer =  styled.div`
    display: flex;
    position: relative;
    height: auto;
    z-index: 4;
    margin-top: 730px;
    margin-bottom: 40px;
    background: linear-gradient(-60deg, #c37c4d, #b86948, #D19477, #a53900);
	background-size: 200% 100%;
	animation: gradient 15s ease infinite;
	height: 80vh;

    @keyframes gradient {
        0% {
            background-position: 0% 25%;
        }
        25% {
            background-position: 50% 25%;
        }
        50% {
            background-position: 0% 50%;
        }
        100%{
            background-position: 50% 100%;

        }
    }

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    
`
export const AiWrapper = styled.div`
    margin-bottom: 0px;
    display: grid;
    z-index: 1; 
    height: auto;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
    justify-content: center: 
    color: white;
`
export const AiRow = styled.div`
    margin-left: 400px;
    padding-top: 24px;
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
      
`
export const AiColumn1 = styled.div`
    width: 150%;
    margin-left: -200px;

`
export const AiColumn2 = styled.div`
    width: 50%;

`

export const TextWrapper = styled.div `
    background: rgba(190,140,120, 0.3);
    backdrop-filter: blur(10px);
    max-width: 540px;
    padding-top: 5px;
    padding-left: 20px;
    padding-bottom: 60px;
    margin-right: 100px;
    margin-top: 150px;

`
export const Topline = styled.p `
    margin-top: 50px;
    color:  black;
    font-size: 24px;
    font-family: Arial;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4vh;
    margin-bottom: 24px;
    justify-content: center;
    align-items: center;
    padding-left: 100px;

`
export const Heading = styled.h1`

    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: white;
    margin-bottom: 24px;
    padding-left: 40px;

    

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    justify-content: center;

`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content:  center;

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 10%;
`
export const Img = styled.img`
    padding-right: 0;
    overflow: hidden;
    


`
export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    z-index
`
export const ButtonModal = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

`
export const ModalBackground = styled.div`
    width: 80%;
    height: 80%;
    background: rgba(0,0,0,0.8);
    position: fixed; 
    display: fixed;
    justify-content: center;
    align-items: center;

`
export const ModalWrapper = styled.div`
    border-radius: 
    margin-bottom: 0px;
    z-index: 12; 
    height: 300px;
    width: 400px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    max-width: 1100px;
    padding: 0 24px;
    justify-content: center: 
    color: white;
    background: #fff;

`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center: 
    align-items: center;
    line-height: 1.8;
    color: #141414;

`
export const ModalP = styled.p`
    margin-bottom: 1rem;
    justify-content: justify;
`
   
export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 5px;
    height: 24px;
    width: 24px;
    
`

export const GlobalStyle = createGlobalStyle `
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Arial';



    }
`
