import { Link } from "react-router-dom";
import "../styles/navbar.css"



export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Create Food</Link>
        </li>
        <li>
          <Link to="/foodItem">Food List</Link>
        </li>
      </ul>
    </nav>
  );
}
