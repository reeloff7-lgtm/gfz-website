import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f2f2f2",
      color: "#333",
      marginTop: "auto"
    }}>
      <p>&copy; 2025 GFZ Shop. All rights reserved.</p>
      <p>
        <Link to="/privacy" className="text-zinc-500 decoration-0 font-semibold hover:text-black cursor-pointer duration-300" >Privacy Policy & Terms of Service</Link>
      </p>
    </footer>
  );
};

export default Footer;
