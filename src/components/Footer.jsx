import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center p-5 bg-zinc-600 text-zinc-300 mt-auto">

      <p>&copy; 2025 GFZ Shop. All rights reserved.</p>
      <p>
        <Link to="/privacy" className="text-zinc-400 decoration-0 font-semibold hover:text-white cursor-pointer duration-300" >Privacy Policy & Terms of Service</Link>
      </p>
    </footer>
  );
};

export default Footer;
