import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div>
            <span>my website</span>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;