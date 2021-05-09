import React from "react";
import { useSelector } from "react-redux";

import NavBarNotAuthenticated from "./NavBarNotAuthenticated";
import NavBarBuyerAuthenticated from "./NavBarBuyerAuthenticated";
import NavBarSellerAuthenticated from "./NavBarSellerAuthenticated";

function NavBar() {
  // const [click, setClick] = useState(false);
  const auth = useSelector((state) => state.login);
  const { isAuthenticated, isBuyer } = auth;
  // // const handleClick = () => setClick(!click);

  return (
    <>
      {isAuthenticated && isBuyer ? (
        <NavBarBuyerAuthenticated />
      ) : isAuthenticated && isBuyer === false ? (
        <NavBarSellerAuthenticated />
      ) : (
        <NavBarNotAuthenticated />
      )}
    </>
  );
}

export default NavBar;
