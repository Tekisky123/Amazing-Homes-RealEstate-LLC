import { FaWhatsapp, FaPhoneAlt, FaSms } from 'react-icons/fa';
import '../assets/Styles/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <a href="https://wa.me/971585808989" className="icon whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </a>
      <a href="tel:+971585808989" className="icon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </a>
      <a href="sms:+971585808989" className="icon sms">
        <FaSms size={25} />
        <span className="tooltip">+971 58580 8989</span>
      </a>
    </div>
  );
};

export default FloatingIcons;
