import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const phoneNumber = '+923362323423'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
};

export default Whatsapp;
