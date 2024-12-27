// import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <section className="footer">
    <div className="section__container footer__container">
      <div className="footer__col">
        <a href="#" className="footer__logo">
          <img src="src/images/logo-dark.png" alt="logo" />
    
          <div className="footer__section">
        <h4>Contact</h4>
        <ul>
            <li><strong>Email:info@yourteam.com</strong> </li>
            <li><strong>Phone:+1234567890</strong> </li>
            <li><strong>Address:123,Main,Street,City,Country</strong></li>
        </ul>
    </div>
    
        </a>

      
      </div>
  


      <div className="footer__col">
    <div className="footer__section">
        <h4>Gym Hours</h4>
        <ul>
            <li>Monday: 5am-10pm</li>
            <li>Tuesday: 5am-10pm</li>
            <li>Wednesday:5am-10pm</li>
            <li>Thursday: 5am-10pm</li>
            <li>Friday: 5am-10pm</li>
            <li>Saturday: 5am-10pm</li>
            <li>Sunday: 5am-1pm</li>
        </ul>
    </div>
  

    
</div>
</div>

<ul className="footer__links">
          <li>
          <a href="https://www.facebook.com/YourTeam" target="_blank" rel="noopener noreferrer">
            <img  className="icon" src="src/images/icons8-facebook-logo-50.png" alt="Facebook" />
        </a>
        <a href="https://www.WhatsApp.com/YourTeam" target="_blank" rel="noopener noreferrer">
            <img  className="icon" src="src/images/icons8-whatsapp-50.png" alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/YourTeam" target="_blank" rel="noopener noreferrer">
            <img className="icon"  src="src/images/icons8-instagram-50.png"  alt="Instagram"/>
        </a>
          </li>
        </ul>


    <div className="footer__bar">
    All rights reserved © 2024 Mastering Sports Club Design. </div>
  </section>

  );
}

export default Footer;
