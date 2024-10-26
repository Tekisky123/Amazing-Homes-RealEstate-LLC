import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import sliderData from "../Common/sliderData";
import "../assets/Styles/SliderComponent.css";

const SliderComponent = () => {
  const sliderRef = useRef(null);
  const [animationClass, setAnimationClass] = useState("initialAnimation");

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    beforeChange: (current, next) => handleBeforeChange(current, next),
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("animateIn");
    }, 2000);
  }, []);

  const handleBeforeChange = (current, next) => {
    setAnimationClass("u-scale-out");
    setTimeout(() => {
      setAnimationClass("animateIn");
    }, 200); // Reduced delay for smoother transition
  };

  return (
    <section className="c-slider">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className={`c-slide ${animationClass}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="c-slide-image"
            />

            <div className="c-slide-content">
              <div className="c-wrap c-wrap--line">
                <h2 className="c-slide__title">
                  {slide.title}
                  <span className="c-slide__title--large">
                    {slide.subtitle}
                  </span>
                </h2>
              </div>
              <div className="c-wrap c-wrap--small">
                <div className="c-slide__info">
                  <p className="c-slide__body">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
