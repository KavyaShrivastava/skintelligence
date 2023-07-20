import React from "react";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavItem from "./NavItem";


const Navbar = () => {
  const {isAuthenticated} = useAuth0();
  if (isAuthenticated) {
    return (
      <nav>
        <div className="flex flex-row justify-center h-fit w-screen">
          <div className="z-50 fixed w-10/12 text-black bg-white bg-opacity-50 md:rounded-full items-center mt-8 text-sm border-black-200">
            <div className="sm:flex gap-8 pt-3 pb-3 pl-6 pr-6 flex flex-row justify-center items-center">
              <NavItem to="/">Skintelligence</NavItem>
              <NavItem to="/resources">Resources</NavItem>
              <NavItem to="/community">Community</NavItem>
              <LogoutButton/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  else{
    return(
      <nav>
        <div className="flex flex-row justify-center h-fit w-screen">
        <div className="z-50 fixed w-10/12 text-black bg-white bg-opacity-50 md:rounded-full items-center mt-8 text-sm border-black-200">
            <ul className="sm:flex gap-8 pt-3 pb-3 pl-6 pr-6 flex flex-row justify-center items-center">
              <NavItem to="/">Skincare</NavItem>
              <NavItem to="/resources">Resources</NavItem>
              <NavItem to="/community">Community</NavItem>
              <LoginButton />
            </ul>
          </div>
        </div>
      </nav>

    );
  }

}

// const {isAuthenticated} = useAuth0();
//   if (isAuthenticated) {
//     console.log(isAuthenticated)
//     return (
//         <>
//         <Nav>
//           <div to="/">Skintelligence</div>
//           <NavMenu>
//             <NavItem>
//               <NavLinkDiscover to="Discover">Discover AI</NavLinkDiscover>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/resources">Resources</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/community">Community</NavLinks>
//             </NavItem>
//             <LogoutButton />
//           </NavMenu>
//         </Nav>
//         </>
//     );
//   } else {
//     return (
//       <>
//         <Nav>
//           <NavLogo to="/">Skintelligence</NavLogo>
//           <NavMenu>
//             <NavItem>
//               <NavLinkDiscover to="Discover">Discover AI</NavLinkDiscover>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/resources">Resources</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/community">Community</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/login">Login</NavLinks>
//             </NavItem>
//                 <LoginButton/>
//           </NavMenu>
//         </Nav>
//       </>
//     );
//   }
// };

export default Navbar;
