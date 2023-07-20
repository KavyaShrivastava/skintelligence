import styled from "styled-components";
import {GiSunflower} from 'react-icons/gi'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height:50%;
    position: relative;
    z-index: 1;

`
export const HeroBg = styled.div `
    position: relative;
    top: 20px;
    right: 0%;
    bottom: 0;
    left: -770px;
    width: 100%;


`
export const VideoBg = styled.video `
    width: 100%;
    height: auto;
    background-fit: cover:
    z-index:-1;
    margin: 0;

`
export const HeroContent = styled.div `
    z-index: 4
    max-width: 1200px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-item: left;
`
export const HeroH1 = styled.h1`
    font-size: 48px;
    text-align: left;
    background: -webkit-linear-gradient(#a84207, #de8b62);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `

export const HeroP = styled.p `
    margin-top: 24px;
    color: #fff;
    font-size: 36px;
    text-align: center;
    max-width: 600px;

`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    z-index: 10

`
export const ArrowDown = styled(GiSunflower)`
    font-size: 25px;

`
export const ArrowRight = styled(GiSunflower)`
    font-size: 25px;
`