import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright© {year}</p>
    </footer>
  );
}

export default Footer;
