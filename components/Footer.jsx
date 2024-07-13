import React from "react";
import "./css/Footer.css";
import logo from "../logo-150x122.png";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-upper-line"></div>
      <div className="footer-content">
        <div className="first-content">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-text">
            Behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts they live
          </div>
          <div></div>
        </div>
        <div className="second-content">
          <div className="table-content">
            <table>
              <tr>
                <td>Need Help</td>
                <td>About Company</td>
                <td>Useful Links</td>
              </tr>
              <tr>
                <td>FAQs</td>
                <td>My Account</td>
                <td>Contact Us</td>
              </tr>
              <tr>
                <td>Men</td>
                <td>Women</td>
                <td>About Us</td>
              </tr>
              <tr>
                <td>Terms of Use</td>
                <td>Privacy Policy</td>
                <td>Return Policy</td>
              </tr>
            </table>
          </div>
          <div>100% Secure Payment:</div>
        </div>
      </div>
      <div className="footer-lower-line"></div>
    </div>
  );
}

export default Footer;
