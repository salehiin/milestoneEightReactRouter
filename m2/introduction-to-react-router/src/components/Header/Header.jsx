
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
      <div>
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contct Us</NavLink>
            {/* <Link to="/users">Users</Link> */}
            {/* <Link to="/posts">Posts</Link> */}
            {/* <Link to="/about">About</Link> */}
            {/* <Link to="/contact">Contct Us</Link> */}
        </nav>
      </div>
    );
  };
  
  export default Header;