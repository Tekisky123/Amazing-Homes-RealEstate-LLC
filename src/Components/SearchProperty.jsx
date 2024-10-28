import { useState } from "react";
import "../assets/Styles/SearchProperty.css"; // Adjust the path according to your structure
import data from "../Common/searchPropertyData.json";
// Import an icon library, e.g., Font Awesome

const SearchProperty = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="main-section">
      <div className="search-property-container container">
        <h2 className="search-heading">Search for Your Property</h2> {/* Added Heading */}
        <div className="search-property-form">
          <select
            className="search-dropdown"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {data.locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className="search-dropdown"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            {data.types.map((typ, index) => (
              <option key={index} value={typ}>
                {typ}
              </option>
            ))}
          </select>

          <select
            className="search-dropdown"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            {data.statuses.map((stat, index) => (
              <option key={index} value={stat}>
                {stat}
              </option>
            ))}
          </select>

          {/* Icon Button */}
          <button className="search-button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
