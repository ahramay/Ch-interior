import React, { Component }from 'react';
class Contact extends Component{
  render(){
   return(
    <div class="Contact-us">
      <div class="container">
       <div class="text-center">
        <div class="wow">
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
      <div class="contact-info">
       <div class="col-md-5">
        <h2>We Give Our Best</h2>
         <h3>That Inspires Our Customers & Clients</h3>
          <ul>
           <li><i class="fa fa-home fa-2x"></i>Chaudhry Tarpal House & Fiberglass, Fatima Jinnah Road, Sargodha, Pakistan</li>
           <li><i class="fa fa-phone fa-2x"></i> +92 3153060633</li>
           <li><i class="fa fa-envelope fa-2x"></i>chintermaker3@gmail.com</li>
          </ul>
       </div>
      </div>
     </div>
     <footer className="footer">
      <div class="footer-top">
       <div class="container">
        <div class="row">
         <div class="col-lg-3 col-md-6 footer-info">
          <h3>CHinterior</h3>
           <p>
            If you love the home section then you are on right place.
            then you'll definitely find yourself lusting after all of the super cool furniture available here.
            It doesn't matter if you're on the hunt for new high-end pieces or you prefer antique and vintage furniture
             and décor.
           </p>
         </div>
         <div class="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
           <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">About us</a></li>
            <li> <a href="#">Services</a></li>
           </ul>
         </div>
         <div class="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
           <p>
            <i class="fa fa-home fa-2x"></i>
             Chaudhry Tarpal House & Fiberglass, Fatima Jinnah Road, Sargodha, Pakistan
           <p>
            <i class="fa fa-phone fa-2x"></i><a href="tel:+92 3153060633">+92 3153060633</a></p>
           <p>
            <i class="fa fa-envelope fa-2x"></i><a href="mailto:chintermaker3@gmail.com">chintermaker3@gmail.com</a></p>
           </p>
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
      <div class="Footer-info">
       <div class="copyright">
        &copy; Copyright <strong>CH Interior Maker And Seller</strong>.
       </div>
       <div class="credits">
        Designed by <a href="">Smart IT Tech</a>
       </div>
      </div>
     </footer>
      <a href="Contact" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </div>    
   );
  }
}
export default Contact ;