import React from "react";
import Deposer from "./Deposer";
import Offres from "./Offres";
import logo from "./img/Leboncoin.fr_Logo.PNG";
class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="barreOrange">
          <div className="orange-button">
            {" "}
            <div className="button">
              <img src={logo} alt="logoBonCoin" className="logoBonCoin" />
            </div>
            <Deposer />
            <Offres />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
