import React, { Component }from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Contact extends Component{
  render(){
  return (
    <div class="Contact-us">
    <div class="container">
      <div class="text-center">
        <div class="wow bounceInDown" data-wow-offset="0" data-wow-delay="0.3s">
          <h2>Contact Us</h2>
        </div>
        <div class="wow bounceInDown" data-wow-offset="0" data-wow-delay="0.6s">
          <p>We have 3 different type of shopes .
             If You want any kind of information then Please contact us . 
               </p>
        </div>
      </div>
    </div>

  <div class="container">
    <div class="col-md-7">
      <div class="map">
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
        </Map>
      </div>
    </div>

    <div class="contact-info">
      <div class="col-md-5">
        <h2>We Give Our Best</h2>
        <h3>That Inspires Our Customers & Clients</h3>
        <ul>
          <li><i class="fa fa-home fa-2x"></i>Chaudhry Tarpal House & Fiberglass, Fatima Jinnah Road, Sargodha, Pakistan</li>
          <li><i class="fa fa-phone fa-2x"></i> +92 3153060633</li>
          <li><i class="fa fa-envelope fa-2x"></i> info@domain.net</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="contact-form">
    <div class="container">
      <div class="col-md-8 col-md-offset-2">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" class="contactForm">
          <div class="form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div class="validation"></div>
          </div>

          <div class="text-center"><button type="submit" class="btn btn-primary btn-lg">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>
    <footer className="footer">
    <div class="footer-top">
    <div class="container">
      <div class="row">

        <div class="col-lg-3 col-md-6 footer-info">
          <h3>BizPage</h3>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">About us</a></li>
            <li> <a href="#">Services</a></li>
            <li> <a href="#">Terms of service</a></li>
            <li> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
            <i class="fa fa-home fa-2x"></i>
          Chaudhry Tarpal House & Fiberglass, Fatima Jinnah Road, Sargodha, Pakistan
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
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
        </div>

      </div>
    </div>
  </div>
  </footer>
  <a href="Contact" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div> 
     
  );
 }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDusfpYM3GTTcvHQfpGxsvUiShO4R-tDNo",
            "AIzaSyAtdOdT0yu9W0ikJmjqGbaJcweb2PB-ANA",
            "AIzaSyAfowrlfKRr9X-R7PmKB60eOyNJtFKm2VU",
            "AIzaSyDka1VkJz3EWxFgj9uwk1u8rK0AMOsjnCg"
    )
  })(Contact)