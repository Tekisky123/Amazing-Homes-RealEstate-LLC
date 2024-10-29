import { useState, useEffect } from "react";
import "../assets/Styles/TeamComponent.css";
import teamMembers from "../Common/TeamMembers";

const TeamComponent = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide with interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust time in milliseconds for slide speed

    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex]);

  return (
    <div className="team-slider">
      <button onClick={prevSlide} className="nav-button left">
        ❮
      </button>
      <div className="cards">
        {[...teamMembers, ...teamMembers.slice(0, 3)].map((member, index) => (
          <div
            key={index}
            className={`card ${
              index >= currentIndex && index < currentIndex + 3 ? "active" : ""
            }`}
            style={{
              transform: `translateX(-${100 * currentIndex}%)`,
            }}
          >
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h3 className="card-name">{member.name}</h3>
              <p className="card-profession">{member.profession}</p>
              <p className="card-description">{member.description}</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="nav-button right">
        ❯
      </button>
    </div>
  );
};

export default TeamComponent;
