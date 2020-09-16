import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class Home extends Component {
  render() { 
    return ( 
       <div className="home">
        <section className="about" class="wow fadeInUp">
         <div class="containe">
          <div className="image-slider">
           <img className="slider"  src="../img/slider/1.jpg" alt="img1"
           /> <img className="slider" src="../img/slider/2.jpg" alt="img2"
           /><img className="slider" src="../img/slider/5.jpg" alt="img3"
           /><img className="slider" src="../img/slider/1.jpg" alt="img1" />
          </div>
         </div>
        </section>
        <section className="about">
         <div className="container">
          <header className="section-header">
           <h3>Services</h3>
            <p>We make wide range of Furnitures,Mattress,Tarpals,Fiberglass-Sheets,Hard-cloth,Leather for car interior refurbishment too on our customers demand with material choice as well.
            </p>
          </header>
         <div className="row about-cols">
          <div className="col-md-4 wow fadeInUp">
           <div className="about-col">
            <div className="img">
             <img className="img-fluid" src="../img/Sofa/sofa.jpg" alt="" />
            </div>
             <h2 className="title"><a>Sofa House</a></h2>
              <p>
              We make wide range of furniture too on our customers demand with material choice as well.
              We make furniture with fine and strong wood with long time durability.
              In Furniture, we manufacture sofas,  chairs etc.
              </p>
           </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img className="img-fluid" src="../img/Sofa/hard-cloth.jpg" alt="" />
              </div>
               <h2 className="title"><a>Hard Cloth & Mattress</a></h2>
              <p>
              Here in this section we have hard cloth fabric is available in varieties of designs. which will show a luxurious and elegant look with the object on which are used.
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
              <img className="img-fluid" src="../img/leather/leather.jpg" alt="" />
              </div>
              <h2 className="title"><a>Leather Fabric</a></h2>
              <p>
              We have a wide range of beautiful engraved and printed designs rexine sheets. Made up of plastic and leather fabric which gives an elegant, soft,car's and shiny touch to the look of interior on which it is used.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
              <img className="img-fluid" src="../img/fiberglass/fiber-glass.jpg" alt="" />
              </div>
              <h2 className="title"><a>Fiber Glass Sheets</a></h2>
              <p>
              We have a wide range of unique Fiberglass plastic sheets  which is type of mineral wood made up of nylon and silicate pieces.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
              <img className="img-fluid" src="../img/Tarpal/Tarpal.jpeg " alt="" />
              </div>
              <h2 className="title"><a>Tarpal House</a></h2>
              <p>
              A strong cloth made of hemp, flax, or cotton; -- used for tents, sails, etc. (n.) A coarse cloth so woven as to form regular meshes for working with the needle, as in tapestry, or worsted work.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
              <img className="img-fluid" src="../img/Sofa/Mattress.jpg " alt="" />
              </div>
              <h2 className="title"><a href="Hard Cloth & Mattress"> Mattress </a></h2>
              <p>
              The bed is one of the most favourite place for a person .Quality of mattress not only grante of good sleeps but also sure healthy life .We provide a range of mattress  beside a well known brand molty foam many other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="video">
    <video controls="controls"><source src="../img/leather.mp4" video="web\mp4" /></video> </div>
    <section id="portfolio"  class="section-bg" >
      <div class="container">
        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/app1.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Sofa House" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Sofa 1</a></h4>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/web3.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Tarpal House" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Tarpal House 1</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/app2.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Sofa House" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Sofa House 2</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/card2.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Fiber Glass Sheets" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Fiber Glass Sheets 1</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/web2.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Fiber Glass Sheets" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Fiber Glass Sheets 2</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/app3.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Sofa House" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Sofa House 3</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/card1.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Fiber Glass Sheets" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Fiber Glass Sheets 3</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/card3.jpg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Hard Cloth & Mattress" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Hard Cloth & Mattresss</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="../img/portfolio/web1.jpeg" class="img-fluid" alt=""/>
                <a href="../img/portfolio/web1.jpeg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <a href="Tarpal House" class="link-details" title="More Details"><i class="fa fa-external-link" aria-hidden="true"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Tarpal House 2</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section-bg wow fadeInUp">
      <div class="container">
        <div class="section-header">
          <h3>Contact Us</h3>
        </div>
        <div class="row contact-info">
          <div class="col-md-4">
            <div class="contact-address">
              <i class="fa fa-home fa-2x"></i>
              <h3>Address</h3>
              <address>Chaudhry Tarpal House & Fiberglass,
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
              <p><a href="mailto:chintermaker3@gmail.com">chintermaker3@gmail.com</a></p>
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
                    <h3>CHinterior</h3>
                    <p>
                      If you love the home section then you are on right place. then you'll definitely find yourself lusting after all of the super cool furniture available here.It doesn't matter if you're on the hunt for new high-end pieces or you prefer antique and vintage furniture and décor.</p>
                  </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                      <li className="menu-active"><a href="/">Home</a></li>
                      <li class="menu-has-children"><a href="/">Services</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                     <NavLink to="contact"  activeClassName="is-active"> <li><a>Contact</a></li></NavLink>
                      </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-contact">
                      <h4>Contact Us</h4>  
                      <p>
                        <i class="fa fa-home fa-2x"></i>
                        Chaudhry Tarpal House & Fiberglass,
                        Fatima Jinnah Road, Sargodha, Pakistan
                        <p><i class="fa fa-phone fa-2x"></i><a href="tel:+92 3153060633">+92 3153060633</a></p>
                        <p><i class="fa fa-envelope fa-2x"></i><a href="mailto:chintermaker3@gmail.com">chintermaker3@gmail.com</a></p>
                      </p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-newsletter">
                      <h4>Services</h4>
                      <ul>
                        <li><a>Sofa House</a></li>
                        <li><a>Hard Cloth & Mattress</a></li>
                        <li><a>Leather Fabric</a></li>
                        <li><a>Fiber Glass Sheets</a></li>
                        <li><a>Tarpal House</a></li>
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
                <div class="pull-right-1">
                <a href="#" classname="back-to-top"><i className="fa fa-chevron-up"></i></a>
               </div>
              </div>
            </footer>
           
      </div> 
    );
  }
}
export default Home;