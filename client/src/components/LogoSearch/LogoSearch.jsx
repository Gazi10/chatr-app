import React from "react";
import Logo from "../../assets/img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img className="logo" src={Logo} alt="" />
      <div className="Search">
          <input type="text" placeholder="Search..."/>
          <div className="s-icon">
              <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
