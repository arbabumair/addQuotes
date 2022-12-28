import React from "react";

import Classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

const Layout = function (props){

    return (
        <React.Fragment>
            <MainNavigation/>
            <main className={Classes.main}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;