import React, { useState, useEffect } from "react";
import movingSakuraLogo from "../assets/img/movingImage-sakura.png";
import "../css/movingImage.css";

function MovingImage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src={movingSakuraLogo}
      alt="petal flowers falling"
      className="movingImages"
      style={{ transform: `translateY(${offsetY * 0.4}px)` }}
    />
  );
}

export default MovingImage;
