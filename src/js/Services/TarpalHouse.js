import React, { Component }from 'react';

class TarpalHouse extends Component{
  render(){
  return (
    <div className="TarpalHouse">
    <section className="banner">
           <div className="container">
    </div>
  
  </section>
  <div className="work-inner">
    <div className="Tarpal-work-inner">
      <div className="Tarpal-work-wrap">
        <h2> Tarpal House </h2>
        </div>
        <div className="newImage">
        <img className="Tarpalimg" src="../img/Tarpal/Tarpal.jpeg" title="" />
        <div className="description">
          <p>A strong cloth made of hemp, flax, or cotton; -- used for tents, sails, etc. (n.) A coarse cloth so woven as to form regular meshes for working with the needle, as in tapestry, or worsted work. (n.) A piece of strong cloth of which the surface has been prepared to receive painting, commonly painting in oil.
          </p>
        </div>
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal1.jpeg" title="" />
         
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal2.jpeg" title="" />
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal3.jpeg" title="" />  
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal4.jpeg" title="" />   
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal5.jpeg" title="" />  
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal6.jpeg" title="" /> 
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal7.jpeg" title="" />  
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal8.jpeg" title="" />
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal9.jpeg" title="" />
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal10.jpeg" title="" />  
          <img className="Tarpalimg" src="../img/Tarpal/Tarpal11.jpeg" title="" />         
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
              <i class="fa fa-home fa-2x"></i>
              <h3>Address</h3>
              <address> Chaudhry Tarpal House & Fiberglass,
               Fatima Jinnah Road, Sargodha, Pakistan</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="fa fa-phone fa-2x"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+92 3153060633">+92 3153060633</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
            <i class="fa fa-envelope fa-2x"></i>
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
  <a href="/" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div> 
     
     
  );
 }
}

export default TarpalHouse;