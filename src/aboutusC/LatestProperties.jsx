import Slider from 'react-slick';
import propertiesData from '../Common/propertiesData';
import '../assets/Styles/LatestProperties.css'; // Ensure this path is correct

const LatestProperties = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Display 4 cards at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // 3 cards for medium screens
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // 2 cards for smaller screens
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // 1 card for very small screens
                },
            },
        ],
    };
    

    return (
        <section className="latest-properties">
            <h2 className="section-title">Latest Properties</h2>
            <Slider {...settings}>
                {propertiesData.map((property) => (
                    <div key={property.id} className="property-card">
                        <img src={property.image} alt={property.title} className="property-image" />
                        <div className="property-info">
                            <h3 className="property-title">{property.title}</h3>
                            <p className="property-description">{property.description}</p>
                            <p className="property-price">{property.price}</p>
                            <button className="view-property-button">View Property</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default LatestProperties;
