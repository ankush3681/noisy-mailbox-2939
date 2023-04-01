import { Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import img1 from "../images/my-glow-logo.jpg";
import img2 from "../images/logo3my.jpg";
import img3 from "../images/logo4my.jpg";
import { BsSearch, BsHandbagFill, BsPersonCircle } from "react-icons/bs";
import { IoPersonCircleOutline ,IoBagHandle } from "react-icons/io5";
import { Show, Hide ,Text} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Box className="f-nav mob-nav">
        <Box className="logobox">
          {" "}
          <Link to='/'> <img  src={img2} className="logocss" alt="" /></Link>
         
        </Box>

        <Box className="search-box1 hov">
          <input type="text" placeholder='Try"Liquid Lipstick"' />{" "}
          <button>
            <img
              width={"25px"}
              src="https://img.icons8.com/ios/x/search.png"
              alt=""
            />
          </button>
        </Box>

        <Box className="icon-box ">
          <Link to="/login"><Text className="login-hov" padding={"5px"} fontSize={'md'} fontWeight={'bold'} >LogIn</Text></Link>
          <Link to="/cart">
            {/* <img
              src="https://img.icons8.com/material-sharp/2x/shopping-cart.png"
              alt="cart"
            /> */}
            <IoBagHandle className="hov ic" size={'40px'}/>
          </Link>
          <Link to="/admin">
            {" "}
            {/* <img
              width={"50px"}
              src="https://static.vecteezy.com/system/resources/previews/009/636/683/original/admin-3d-illustration-icon-png.png"
              alt="admin"
            /> */}
            <IoPersonCircleOutline className="hov ic" size={'40px'} />
          </Link>
        </Box>
      </Box>
      
      <Box className="s-nav mob-nav">
        <ul>
          <li>
            <Link to="/product">LIPS</Link>
          </li>
          <li>
            <Link to="/product">EYES</Link>
          </li>
          <li>
            <Link to="/product">FACE</Link>
          </li>
          <li>
            <Link to="/product">SKINCARES</Link>
          </li>
          <li>
            <Link to="/product">NAILS</Link>
          </li>
          <li>
            <Link to="/product">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="/product">GIFTS & KITS</Link>
          </li>
          <li>
            <Link to="/product">BESTSELLERS</Link>
          </li>
          <li>
            <Link to="/product">NEW LAUNCHES</Link>
          </li>
          <li>
            <Link to="/product">OFFERS</Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
