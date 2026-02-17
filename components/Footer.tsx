import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex justify-center mb-6">
          <img
            src="/logo_longa.jpeg"
            alt="Logo Longa MD Consulting"
            className="h-20 object-contain rounded-sm"
          />
        </div>
        <p>
          &copy; {new Date().getFullYear()} MD Consulting. All rights reserved.
        </p>
        <p className="text-sm">Bridging Cultures Through Conversation.</p>
        <p className="text-sm">
          Developed by{" "}
          <a href="http://www.linkedin.com/in/kaiky-santos-510b6b2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Kaiky Terto{" "}
          </a>
          &{" "}
          <a href="http://https://www.linkedin.com/in/pedro-lucena-/">
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
