import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#BEB3FE] text-center py-4">
      <p className="text-lg">
        © {new Date().getFullYear()} | Created by <span className="text-[#E5FC76] font-medium">Samman</span>
      </p>
    </footer>
  );
};

export default Footer;
