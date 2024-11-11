import React from "react";
import Image from "next/image";
import whatsappicon from "../../../public/assets/whatsapp-icon.gif";

const WhatsappBot = () => {
  const whatsappNumber = "7887347943"; // Replace with your WhatsApp number
  const message = "Hello! I'd like to chat."; // Default message

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed text-white rounded-full shadow-lg focus:outline-none
                 h-16 w-16 bottom-8 left-4 
                 sm:h-14 sm:w-14 sm:bottom-4 sm:left-3 
                 md:h-12 md:w-12 md:bottom-4 md:left-4 
                 lg:h-16 lg:w-16 lg:bottom-8 lg:left-4"
    >
      <Image src={whatsappicon} alt="WhatsApp Icon" layout="fill" priority />
    </button>
  );
};

export default WhatsappBot;
