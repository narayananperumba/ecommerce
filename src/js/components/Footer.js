import React from "react"
import { Link } from "react-router"
// footer section
var FootSection = React.createClass({displayName: 'footerarea',
  render: function() {
    return (
      <section class="footer-container">
      
      <div class="footer-container" id="footer-container">
      <div class="footer">
      <div class="newsletter-container float-left1">
      <h5>Newsletter</h5>
      <p>Opportunity may knock only once, but temptation leans on the doorbell. Subscribes to our newsletters here</p>
      <form name="newsletter-form" action="" method="post">
      <input class="newsletter-email" type="email" placeholder="Email" required />
      <input class="newsletter-button" type="submit" defaultValue="SUBSCRIBE" />
      </form>
      </div>
      <div class="sitemap-container">
      <div class="cart-links float-left">
      <h5>testCoName</h5>
      <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="packets">Packets</Link></li>
      <li><Link to="offers">Offers</Link></li>
      <li><Link to="stores">Stores</Link></li>
      <li><Link to="faq">FAQ</Link></li>
      </ul>
      </div>
      <div class="cart-contact float-left">
      <h5>testCoName Care</h5>
      <ul>
      <li><div class="footer-location"><div class="footer-icon location float-left"></div><div class="address-text">171 93 Solna Sverige</div></div></li>
      <li><div class="footer-phone"><div class="footer-icon phone float-left"></div><div class="phone-text">08-56 15 00 00 556048-2837</div></div></li>
      <li><div class="footer-mailto"><div class="footer-icon mailto float-left"></div><div class="mailto-text"><a href="mailto:care@testCoName.com" target="_blank">care@testCoName.com</a></div></div></li>
      </ul>
      </div>
      </div>
      <div class="cart-more">
      <div class="about-us">
      <h5>About Us</h5>
      <p>Shopping is really complicated if you are not at the right place. So we present testCoName infront of you, the multi store with all your wishes at your finger tips.</p>
      </div>
      <div class="follow-us">
      <h5>Follow Us</h5>
      <div class="social">
      <a href="https://facebook.com" target="_blank"><div class="footer-icon follow-facebook float-left"></div></a>
      </div>
      </div>
      </div>
      </div>

      </div>
      <div class="copyright" id="site-name"> Copyright 2016 {'\u00A9'} <a href="#">testCoName</a> &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;All rights reserved</div>

      </section>
      );
}
});
export default class Footer extends React.Component {
  render() {
    return (
      <FootSection/>
      );
  }
}