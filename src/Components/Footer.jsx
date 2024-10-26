import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "../assets/Styles/Footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-main bg-dark fixed-bottom">
      <div className="container">
        <div className="row address-main">
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-content">
                <h5>About</h5>
                <p>
                  A boutique real estate agency furnishing first-rate client
                  care with customised property counsel and helping our
                  customers to settle on a well-educated choice, as we have a
                  natural beat of the Dubai land showcase combined with industry
                  aptitude and unshakable experienced group to give versatile
                  arrangements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-content">
                <h5>Contact Us</h5>
                <p>
                  +971 58580 8989 <br />
                </p>
              </div>

              <div className="add-content">
                <h5>Email</h5>
                <p>
                  <a
                    href="discover@prowinproperties.com"
                    style={{ textDecoration: "none" }}
                  >
                    discover@prowinproperties.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12">
            <div className="address-box clearfix">
              <div className="add-content">
                <h5>Address</h5>
                <p>
                  10th floor, Icon Tower Tecom, Dubai - United Arab Emirates
                </p>

                <div className="container p-4 pb-0">
                  <section className="mb-4">
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaYoutube />
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <footer className="bg-dark text-center text-white">
              <div
                className="text-center p-3 "
                style={{
                  //   backgroundColor: "rgba(0, 0, 0, 0.2)",
                  marginBottom: "80px",
                }}
              >
                © 2024 Prowin Properties. All rights reserved..
                <br />
                <img
                  src="https://tekisky.com/assets/WhatsApp_Image_2024-04-30_at_12.39.09_86de1ffc-removebg-preview-2SydUlQw.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
