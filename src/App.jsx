import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="glass-container">
      <nav className="container">
        <div className="logo">CodeLingo</div>
        <div className="menu-links">
          <span className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            {!showMenu && <TiThMenu style={{ height: 20, width: 20 }} />}
          </span>
          <ul className="desktop-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {showMenu && (
          <div className="sidebar glass-container">
            <span className="close-btn" onClick={() => setShowMenu(!showMenu)}>
              <IoClose style={{ height: 25, width: 25 }} />
            </span>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default App;
