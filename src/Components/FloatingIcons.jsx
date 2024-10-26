
import { FaWhatsapp, FaPhoneAlt, FaSms } from 'react-icons/fa';
import '../assets/Styles/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <span className="icon whatsapp">
        <FaWhatsapp size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </span>
      <span className="icon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </span>
      <span className="icon sms">
        <FaSms size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </span>
    </div>
  );
};

export default FloatingIcons;
