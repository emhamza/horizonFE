import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BiSpa } from "react-icons/bi";

const MobileNav = () => {
    const [burgerClass, setBurgerClass] = useState('burgerBar unClicked');
    const [menuClass, setMenuClass] =  useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleNavClick = () => {
        setMenuClass('menu hidden');
        setBurgerClass('burgerBar unClicked');
    };

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burgerBar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burgerBar unclicked');
            setMenuClass ('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/login';
    };

    return (
        <div>
            <nav>
                <div><BiSpa /></div>
                <div onClick={updateMenu} role="presentation">
                    <div className={burgerClass}/>
                    <div className={burgerClass}/>
                    <div className={burgerClass}/>
                </div>
            </nav>

            <div className={menuClass}>
                <ul>
                    <li><NavLink onClick={handleNavClick} to="/" end>Home</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/commissioneds">Commissioned By</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/service_types">Service Types</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/monthly_services">Monthly Services</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/quarterly_services">Quarterly Services</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/biannual_services">Bi-Annual Services</NavLink></li>
                    <li><NavLink onClick={handleNavClick} to="/yearly_services">Yealy Services</NavLink></li>
                    <button type="button" onClick={handleLogout}>Logout</button>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default MobileNav;