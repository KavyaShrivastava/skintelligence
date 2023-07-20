import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link) `
    background: rgba(168,66,7, 0.4);
    backdrop-filter: blur(7px);
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    margin-left: 13em;
    margin-right: 12em;

    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.1); 

    }

`
export const ButtonGetStarted = styled(Link) `
    background: rgba(215,255,255, 0.5);
    backdrop-filter: blur(7px);
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 10%;
    width: 80%
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.1); 

    }

`