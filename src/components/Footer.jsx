import React from 'react';
import './css/Footer.css';
import payment from '../icons/footer-payment-image.png';

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-upper-line">HOMEGROWN INDIAN BRAND</div>
      <div className="footer-content">
        <div className="first-content">
          <div className="footer-text">
            Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts they live
          </div>
        </div>
        <div className="second-content">
          <div className="footer-table-content">
            <table>
              <thead>
                <tr>
                  <th>Need Help</th>
                  <th>About Company</th>
                  <th>Useful Links</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
            <div className="payment-section">
              <div>100% Secure Payment:</div>
              <div>
                <img src={payment} alt="Secure Payment" className="payment-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower-line">
        ©2024. Solo Site. All Rights Reserved. <span className="footer-lower-V-line"></span>
      </div>
    </div>
  );
}

export default Footer;
