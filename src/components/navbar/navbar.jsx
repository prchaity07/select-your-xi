import React from 'react';
import navImg from "../../assets/logo.png";
import dollarLogo from "../../assets/coin.png"

const Navbar = ({availableBalance}) => {
    return (
         <div className="max-w-[1200px] mx-auto flex justify-between">
  <div className ="flex-1">
    <a className ="text-xl">
      <img className="w-[60px] h-[60px]" src={navImg} alt="" />

    </a>
  </div>
  <div className="flex gap-1 items-center">
    <span> {availableBalance} </span>
    <span> Coin </span>
    <img className="w-[30px]" src={dollarLogo} alt="" />
  </div>
</div>
    );
};

export default Navbar;