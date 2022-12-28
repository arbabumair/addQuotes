import React from 'react';
import { NavLink } from 'react-router-dom';


import Classes from './MainNavigation.module.css';

const MainNavigation = function (){


    return (
        <header className={Classes.header}>
            <div className={Classes.logo}>Great Quotes</div>
            <nav className={Classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" activeClassName={Classes.active}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-quote" activeClassName={Classes.active}>Add Quotes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;