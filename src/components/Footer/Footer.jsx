import logo from "../../assets/logos/logo.png";
import instagramIcon from "../../assets/logos/Instagram.svg";
import facebookIcon from "../../assets/logos/Facebook.svg";
import twitterIcon from "../../assets/logos/X_twitter.svg";

function Footer() {
    return (
      <footer className="contact">
        <div className="contact__container">
          <div className="contact__left">
            <div className="contact__heading">
              <h2 className="contact__title">Get in Touch</h2>
            </div>   
            <div className="contact__social-icons">
              <a href="https://www.facebook.com/">
                <img className="footer__icon footer__icon--facebook" src={facebookIcon} alt="Facebook icon"/>
              </a>
              <a href="https://twitter.com/">
                <img className="footer__icon footer__icon--x" src={twitterIcon} alt="Twitter (X) icon"/>
              </a>
              <a href="https://www.instagram.com/">
                <img className="footer__icon footer__icon--instagram" src={instagramIcon} alt="Instagram icon"/>
              </a>
            </div>
          </div>
          <img className="contact__logo contact__logo--1" src={logo} alt="Cyclea logo"/>
        </div>

        <section className="contact__info">
          <div className="contact__group">   
            <h4 className="contact__company">Cyclea Management</h4>
            <h4 className="contact__address">0620 Capilano,</h4>
            <h4>Edmonton, AB</h4>
            <h4>CANADA</h4>
            <a href="mailto:info@cyclea.com">
              <h4 className="contact__email">info@cyclea.com</h4>
            </a>
          </div>
        </section>

        <img className="contact__logo contact__logo--2" src={logo} alt="Cyclea logo"/> 
        <h4 className="contact__copyright">Copyright Kyria Bacinski © 2025 All Rights Reserved</h4>
      </footer>
    );
}

export default Footer;
