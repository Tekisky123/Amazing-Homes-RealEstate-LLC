import "../assets/Styles/AboutUs.css";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";

const AboutUsComponent = () => {
  return (
    <div className="about-container container">
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <img src={img1} alt="About Us Image 1" />
          </div>
          <div className="imgWrapper">
            <img src={img2} alt="About Us Image 1" />
          </div>
          <div className="imgWrapper">
            <img src={img3} alt="About Us Image 1" />
          </div>
          <div className="imgWrapper">
            <img src={img4} alt="About Us Image 1" />
          </div>
        </div>
      </div>
      <div className="contentRight">
        <div className="content">
          <h4>Welcome To</h4>
          <h2> Amazing-Homes-RealEstate-LLC</h2>
          <p>
            A boutique real estate agency furnishing first-rate client care with
            customised property counsel and helping our customers to settle on a
            well-educated choice, as we have a natural beat of the Dubai land
            showcase combined with industry aptitude and unshakable experienced
            group to give versatile arrangements.
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
