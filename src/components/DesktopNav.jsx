import { Outlet, NavLink } from "react-router-dom";
import { ImTwitter, ImFacebook, ImVimeo } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";

function DesktopNav () {
    const navLinkStyle = ({ isActive}) => ({
        backgroundColor: isActive ? '#98bf0d' : '#fff',
        color: isActive ? '#fff' : 'inherit',
    });

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/login';
    };

    return (
        <div>
            <ul>
                <li><NavLink style={navLinkStyle} to="/"></NavLink></li>
            </ul>
        </div>
    )
}