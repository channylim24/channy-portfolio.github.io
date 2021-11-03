import { useEffect } from "react";
import "../css/cursor.css";

function Cursor() {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.setAttribute(
        "style",
        `top: ${e.pageY}px; left: ${e.pageX}px; visibility: visible`
      );
    });

    return document.removeEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.setAttribute(
        "style",
        `top: ${e.pageY}px; left: ${e.pageX}px; visibility: visible`
      );
    });
  }, []);

  return <div className="cursor"></div>;
}

export default Cursor;
