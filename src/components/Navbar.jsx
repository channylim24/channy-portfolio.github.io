import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "../css/navbar.css";

function Navbar() {
  return (
    <Fragment>
      <div className="side-bar">
        <div className="side-contact">
          <ul>
            <li>
              WhatsApp <br /> +6285272545060
            </li>
            <br />
            <li>
              Telegram/Call <br />
              +62895614718339
            </li>
          </ul>
        </div>
        <nav>
          <ul>
            <a href="#home" className="links">
              <li>HOME</li>
            </a>

            <a href="#aboutMe" className="links">
              <li>ABOUT</li>
            </a>

            <a href="#projects" className="links">
              <li>PROJECT</li>
            </a>

            <a href="#contactMe" className="links">
              <li>CONTACT</li>
            </a>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
