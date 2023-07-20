import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav `
    background: black;
    backdrop-filter: blur(7px);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`
// export const NavbarContainer = styled.div `
//     display: flex;
//     background: rgba(0,0,0, 0.2);
//     backdrop-filter: blur(10px)
//     align-items: center
//     justify-content: center;
//     height: 40px;
//     z-index: 1;
//     width: 100%;
    
// `
export const NavLogo = styled(LinkR) `
    color: #fff;
    cusrsor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    justify-content: center;
    margin-right: 30px;
    margin-left: 35px;

    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.1);  
    }

`
export const NavMenu = styled.ul `
    display: flex;
    align-items: center; 
    list-style: none;
    text-align: center;

`

export const NavItem = styled.li`
    width: 110px;
    height: 50px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: -20px;
    height: 100%;
    cursor: pointer;
    margin-left: 20px;

    &.active{
        border-bottom: 3px solid #01bf71;
    }

    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.1);  
    }
`

