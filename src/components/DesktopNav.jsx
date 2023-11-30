import { NavLink } from "react-router-dom";
// import { ImTwitter, ImFacebook, ImVimeo } from "react-icons/im";
// import { TfiGoogle } from "react-icons/tfi";
// import { FaPinterestP } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";
// import styles from '../styles/NavBar.module.css';
import design from '../styles/Test.module.css';

import ExpandButton from "./ExpandButton";
import { useState } from "react";


function DesktopNav () {
    const [collapsed, setCollapsed] = useState(false);

    const handleExpand = ()=>{
        console.log('Expand button clicked!');
        setCollapsed((prevCollapsed) => !prevCollapsed);
    };

    // const expandButton = document.querySelector(".expandBtn");
    // expandButton.addEventListener("click", () => {
    //     document.body.classList.toggle("collapsed");
    // });


    // const navLinkStyle = ({ isActive}) => ({
    //     backgroundColor: isActive ? '#90bf0d' : '#fff',
    //     color: isActive ? '#fff' : 'inherit',
    // });

    // const handleLogout = () => {
    //     localStorage.clear();
    //     window.location.pathname = '/login';
    // };

    return (
        <div>
            <nav className={`${design.sidebar}`}>
                <div className={`${design.sidebarTopWrapper}`}>
                <div className={`${design.sidebar-top}`}>
                    <a className={`${design.logo__wrapper}`}>
                    <BiSpa />
                    <span className={`${design.hide}`}>Prototype</span>
                    </a>
                </div>
                <ExpandButton collapsed={collapsed} onClick={handleExpand} />
                </div>
                <div className={`${design.search__wrapper}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
                        stroke="#697089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" placeholder="Search a Keyword..." />
                </div>
                <div className={`${design.sidebarLinks}`}>
                    <ul>
                        <li>
                            <a href="#" className={`${design.tooltip}`}>        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round" style={{ alignSelf: 'flex-centre' }}>
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4h6v8h-6z" />
                                    <path d="M4 16h6v4h-6z" />
                                    <path d="M14 12h6v8h-6z" />
                                    <path d="M14 4h6v4h-6z" />
                                </svg>
                                <NavLink className="link hide"  to="/" end> Dashboard</NavLink>
                                <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="#commissiondBy" className={`${design.tooltip}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round" style={{ alignSelf: 'flex-centre' }}>
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 14a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" strokeWidth="0"
                                        fill="currentColor" />
                                    <path
                                        d="M16.707 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.293 1.293h3.586a3 3 0 0 1 2.995 2.824l.005 .176v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-3a1 1 0 0 0 -.883 -.993l-.117 -.007h-3.585l1.292 1.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-3 -3a.98 .98 0 0 1 -.28 -.872l.036 -.146l.04 -.104c.058 -.126 .14 -.24 .245 -.334l2.959 -2.958a1 1 0 0 1 1.414 0z"
                                        strokeWidth="0" fill="currentColor" />
                                    <path
                                        d="M3 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 0 .883 .993l.117 .007h3.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083l.094 .083l3 3a.98 .98 0 0 1 .28 .872l-.036 .146l-.04 .104a1.02 1.02 0 0 1 -.245 .334l-2.959 2.958a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.291 -1.293h-3.584a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a1 1 0 0 1 1 -1z"
                                        strokeWidth="0" fill="currentColor" />
                                    <path d="M6 2a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" strokeWidth="0"
                                        fill="currentColor" />
                                </svg>
                                <NavLink className="link hide" to="/commissioneds" end>Commissioned By</NavLink>
                                <NavLink className={`${design.tooltipContent}`} to="/commissioneds" end>Commissioned By</NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="#serviceTypes" className={`${design.tooltip}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                            </svg>
                            <NavLink className="link hide" to="/service_types" end>Service Types</NavLink>
                            <NavLink className={`${design.tooltipContent}`} to="/service_types" end>Service Types</NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="#monthlyServices" className={`${design.tooltip}`}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                    <path d="M12 12l8 -4.5" />
                                    <path d="M12 12l0 9" />
                                    <path d="M12 12l-8 -4.5" />
                                </svg>
                                <NavLink className="link hide" to="/monthly_services" end>Monthly Services</NavLink>
                                <NavLink className={`${design.tooltipContent}`} to="/monthly_services" end>Monthly Services</NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="#quarterlyServices" className={`${design.tooltip}`}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path d="M9 17v-5" />
                                    <path d="M12 17v-1" />
                                    <path d="M15 17v-3" />
                                </svg>
                                <NavLink className="link hide" to="/quarterly_services" end>Quarterly Services</NavLink>
                                <NavLink className={`${design.tooltipContent}`} to="/quarterly_services" end>Quarterly Services</NavLink>
                            </a>
                        </li>
                        <li>
                            <a href="#biannualServices" className={`${design.tooltip}`}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg>
                                <NavLink className="link hide" to="/biannual_services" end>Quarterly Services</NavLink>
                                <NavLink className={`${design.tooltipContent}`} to="/biannual_services" end>Quarterly Services</NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DesktopNav;