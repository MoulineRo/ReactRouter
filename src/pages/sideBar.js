import React from 'react';
import {NavLink} from 'react-router-dom';
import {Home, Settings, Users} from 'lucide-react';


export default function SidebarMenu() {

    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">
                            <div className="sidebar_item">
                                <Home size={20}/>
                                <span>Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/about">
                            <div className="sidebar_item">
                                <Settings size={20}/>
                                <span className="sidebar_item_text">About</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <div className="sidebar_item">
                                <Users size={20}/>
                                <span>Contact</span>
                            </div>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}

