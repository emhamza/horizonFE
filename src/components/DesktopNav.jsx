import { NavLink } from "react-router-dom";
// import { ImTwitter, ImFacebook, ImVimeo } from "react-icons/im";
// import { TfiGoogle } from "react-icons/tfi";
// import { FaPinterestP } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";
// import styles from '../styles/NavBar.module.css';
import design from '../styles/Test.module.css';
import userAvatar from '../assets/profile.jpg';

import ExpandButton from "./ExpandButton";
import { useState } from "react";


function DesktopNav () {
    const [collapsed, setCollapsed] = useState(false);

    const handleExpand = () => {
        setCollapsed((prevCollapsed) => {
          console.log('Previous Collapsed State:', prevCollapsed);
          const newCollapsed = !prevCollapsed;
          console.log('New Collapsed State:', newCollapsed);
          return newCollapsed;
        });
      };
      

    // const expandButton = document.querySelector(".expandBtn");
    // expandButton.addEventListener("click", () => {
    //     document.body.classList.toggle("collapsed");
    // });


    // const navLinkStyle = ({ isActive}) => ({
    //     backgroundColor: isActive ? '#90bf0d' : '#fff',
    //     color: isActive ? '#fff' : 'inherit',
    // });

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/login';
    };

    return (
        <div>
            <nav className={`${design.sidebar} ${collapsed ? design.collapsed : ''}`}>
                <div className={`${design.sidebarTopWrapper}`}>
                <div className={`${design.sidebar-top} ${collapsed ? design.collapsed : ''}`}>
                    <a className={`${design.logo__wrapper}`}>
                        <BiSpa />
                        <h4 className={`${design.hide} ${collapsed ? design.collapsed : ''}`}>Prototype</h4>
                    </a>
                </div>
                <ExpandButton collapsed={collapsed} onClick={handleExpand} />
                </div>
                <div className={`${design.search__wrapper} ${collapsed ? design.collapsed : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
                        stroke="#697089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" placeholder="Search a Keyword..." />
                </div>
                <div className={`${design.sidebarLinks} ${collapsed ? design.collapsed : ''}`}>
                    <ul>
                            <a href="#">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4h6v8h-6z" />
                                    <path d="M4 16h6v4h-6z" />
                                    <path d="M14 12h6v8h-6z" />
                                    <path d="M14 4h6v4h-6z" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/" end> Dashboard</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#commissiondBy">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ambulance"  width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                                    <path d="M6 10h4m-2 -2v4" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/commissioneds" end>Commissioned By</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#serviceTypes">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/service_types" end>Service Types</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#monthlyServices">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                    <path d="M12 12l8 -4.5" />
                                    <path d="M12 12l0 9" />
                                    <path d="M12 12l-8 -4.5" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/monthly_services" end>Monthly Services</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#quarterlyServices">        
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
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/quarterly_services" end>Quarterly Services</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#yearlyServices">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-stats"  width="24" height="24" 
                                   viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                    <path d="M18 14v4h4" />
                                    <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M15 3v4" />
                                    <path d="M7 3v4" />
                                    <path d="M3 11h16" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/yearly_services" end>Yearly Services</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                            <a href="#biannualServices">        
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/biannual_services" end>Biannual Services</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                    </ul>
                    <div className={`${design.sidebarLinks} ${design.bottomLinks}`}>
                        <ul>
                            <a href="#">            
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4h6v8h-6z" />
                                    <path d="M4 16h6v4h-6z" />
                                    <path d="M14 12h6v8h-6z" />
                                    <path d="M14 4h6v4h-6z" />
                                </svg>
                                <NavLink className= {`${design.link} ${design.hide} ${collapsed ? design.collapsed : ''}`}  to="/" end> Setting</NavLink>
                                {/* <NavLink className={`${design.tooltipContent}`}  to="/" end> Dashboard</NavLink> */}
                            </a>
                        </ul>
                    </div>
                </div>
                <div className={`${design.divider}`}></div>
                <div className={`${design.sidebar__profile}`}>
                    <div className={`${design.avatar__wrapper}`}>
                        <img className={`${design.avatar}`} src={userAvatar} alt="emhamza" />
                        <div className={`${design.online__status}`}></div>
                    </div>
                    <section className={`${design.avatar__name} ${design.hide} ${collapsed ? design.collapsed : ''}`}>
                        <div className={`${design.userName}`}>Hamza</div>
                        <a  className={`${design.logout} ${design.hide} ${collapsed ? design.collapsed : ''}`} type="button" onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24"
                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                    <path d="M9 12h12l-3 -3"></path>
                                    <path d="M18 15l3 -3"></path>
                            </svg>
                        </a>
                        <div className={`${design.email}`}>example@gmail.com</div>
                    </section>
                </div>
            </nav>
        </div>
    );
}

export default DesktopNav;