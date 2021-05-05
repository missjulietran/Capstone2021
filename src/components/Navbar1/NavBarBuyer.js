import React from "react";
import { useSelector } from "react-redux";

import NavBarNotAuthenticated from "./NavBarNotAuthenticated";
import NavBarBuyerAuthenticated from "./NavBarBuyerAuthenticated";
function NavBar() {
  // const [click, setClick] = useState(false);
  const auth = useSelector((state) => state.login);
  const { isAuthenticated } = auth;
  // // const handleClick = () => setClick(!click);
  return (
    <>
      {isAuthenticated ? (
        <NavBarBuyerAuthenticated />
      ) : (
        <NavBarNotAuthenticated />
      )}
    </>
  );
}

export default NavBar;
