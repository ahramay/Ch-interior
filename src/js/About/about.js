import React, { Component }from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class About extends Component{
  render(){
  return (
    <div class="About">
     <footer className="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
          <img className="logo" src="../img/logo.png" alt="logo" />
            {/* <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p> */}
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
            <li className="menu-active"><a href="/">Home</a></li>
            <li class="menu-has-children"><a href="/">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="contact">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>  
            <p>
              <i class="fa fa-home fa-2x"></i>
               Chaudhry Tarpal House & Fiberglass,
               Fatima Jinnah Road, Sargodha, Pakistan
               <p><i class="fa fa-phone fa-2x"></i><a href="tel:+92 3153060633">+92 3153060633</a></p>
              <p><i class="fa fa-envelope fa-2x"></i><a href="mailto:info@example.com">info@example.com</a></p>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Services</h4>
            <ul>
              <li><a href="Sofa House">Sofa House</a></li>
              <li><a href="Hard Cloth & Mattress">Hard Cloth & Mattress</a></li>
              <li><a href="Leather Fabric">Leather Fabric</a></li>
              <li><a href="Fiber Glass Sheets">Fiber Glass Sheets</a></li>
              <li><a href="Tarpal House">Tarpal House</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>CH Interior Maker And Seller</strong>.
      </div>
      <div class="credits">
        Designed by <a href="http://localhost8082/">Smart IT Tech</a>
      </div>
    </div>
  </footer>
  <a href="Contact" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div> 
     
  );
 }
}
export default About;