import { Outlet, NavLink } from "react-router-dom";
import { ImTwitter, ImFacebook, ImVimeo } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";
import styles from '../styles/NavBar.module.css';

function DesktopNav () {
    const navLinkStyle = ({ isActive}) => ({
        backgroundColor: isActive ? '#90bf0d' : '#fff',
        color: isActive ? '#fff' : 'inherit',
    });

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/login';
    };

    return (
        <div>
            <header className={`${styles.flexColumn}`}>
                <button type="button" onClick={handleLogout}>Logout</button>
                <div><BiSpa className={`${styles.logo}`}/></div>
                <nav>
                    <ul className={`${styles.pagenav}`}>
                        <li><NavLink style={navLinkStyle} to="/" end>Home</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/commissioneds">Commissioned By</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/service_types">Service Types</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/monthly_services">Monthly Services</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/quarterly_services">Quarterly Services</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/biannual_services">Bi-Annual Services</NavLink></li>
                        <li><NavLink style={navLinkStyle} to="/yearly_services">Yealy Services</NavLink></li>
                    </ul>
                </nav>
                <div className={`${styles.footer} ${styles.flexColumn}`}>
                    <ul className={`${styles.socials}`}>
                        <li><ImTwitter /></li>
                        <li><ImFacebook /></li>
                        <li><TfiGoogle /></li>
                        <li><ImVimeo /></li>
                        <li><FaPinterestP /></li>
                    </ul>
                    <p>&#169; 2023 Hamza</p>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default DesktopNav;