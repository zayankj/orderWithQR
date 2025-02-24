import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1 style={{ textAlign: "center" }}>🍔 Cafe Menu</h1>
      <div className="left-link">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="right-link">
        <Link to="/cart" className="nav-link">
          Cart 🛒
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
