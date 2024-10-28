import { useState } from "react";
import FeaturedProjectsData from "../Common/FeaturedProjectsData";
import "../assets/Styles/FeaturedProjects.css";

const FeaturedProjects = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Apartments", "Plots", "Villas", "2BHK"];
  const locations = ["All", "Los Angeles", "New York", "Miami"];

  const filteredProjects = FeaturedProjectsData.filter((project) => {
    const matchesLocation =
      selectedLocation === "All" || project.location === selectedLocation;
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesLocation && matchesCategory;
  });

  return (
    <div className="featured-projects-container">
      <div className="filter-container">
        <select
          className="filter-dropdown"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-location">{project.location}</p>
              <button className="view-button">View →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
