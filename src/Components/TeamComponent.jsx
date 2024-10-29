import { useState, useEffect } from "react";
import "../assets/Styles/TeamComponent.css";
import teamMembers from "../Common/TeamMembers";

const TeamComponent = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };



 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="team-slider">
     
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
     
    </div>
  );
};

export default TeamComponent;
