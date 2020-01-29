import React, { Component }from 'react';

class LeatherFabric extends Component{
  render(){
  return (
    <div className="Leather">
    <section className="banner">
           <div className="container">
    </div>
  
  </section>
  <div className="widget-categories">
    <div className="widget-archieve">
      <div className="blog_archieve">
        <h2> Leather Fabric </h2>
        </div>
        <div className="Images"> 
          <img className="Leatherimg" src="../img/leather/leather.jpg" title="" />
          {/* <div className="description">
          <p>We have a wide range of beautiful engraved and printed designs rexine sheets. Made up of plastic and leather fabric which gives an elegant, soft and shiny touch to the look of interior on which it is used.
              Moreover, the plus of using it is its soft and solid surface which can be easily washable or can be wipe off with cloth, as well as its water resistant.
                It can be use as poshish of vehicle interior, furniture poshish, sofa covers, cars poshish,wall designing, floor designing etc.
                  There are many different uses for leather as it is a versatile material. It is both durable and fashionable, and therefore its applications are nearly endless.
                    You currently enjoy leather products
          </p>
        </div> */}
          <img className="Leatherimg" src="../img/leather/leather1.jpg" title="" />
          <img className="Leatherimg" src="../img/leather/leather2.jpeg" title="" />  
          <img className="Leatherimg" src="../img/leather/leather4.jpg" title="" />   
          <img className="Leatherimg" src="../img/leather/leather5.jpg" title="" />  
          <img className="Leatherimg" src="../img/leather/leather6.jpeg" title="" /> 
          <img className="Leatherimg" src="../img/leather/leather7.jpg" title="" />  
          <img className="Leatherimg" src="../img/leather/leather8.jpg" title="" />       
        </div>

    </div>
  </div>
  <section id="contact" class="section-bg wow fadeInUp">
      <div class="container">

        <div class="section-header">
          <h3>Contact Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
              <i class="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+92 3032600101">+92 3032600101</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>

        </div>
        </div>
        </section>
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
               <p><i class="fa fa-phone fa-2x"></i><a href="tel:+92 3032600101">+92 3032600101</a></p>
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
  <a href="/" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div> 
     
  );
 }
}

export default LeatherFabric;