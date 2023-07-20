import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div className="">
      <Link className="px-2 py-1 w-screen rounded-full border-transparent border-black hover:bg-blackfont-medium text-md" to={props.to}>
        {props.children}
      </Link>
    </div>
  );
};

export default NavItem;
