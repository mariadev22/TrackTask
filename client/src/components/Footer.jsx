import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center border-t border-gray-300 dark:border-gray-700 text-lg py-1 my-2">
      &copy; CopyRight {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
