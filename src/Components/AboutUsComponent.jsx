import "../assets/Styles/AboutUsComponent.css";
import img1 from "../assets/Images/about1.jpg";
import img2 from "../assets/Images/about2.jpg";
import img3 from "../assets/Images/about3.jpg";
import img4 from "../assets/Images/about4.jpg";

const AboutUsComponent = () => {
  return (
    <div className="about-container container mt-5 mb-5">
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
