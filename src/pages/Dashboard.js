import React, { useCallback, useEffect, useState } from 'react';
import Header from '../containers/header/Header.container';
import TodaysEvents from '../containers/todays-events/TodaysEvent.container';
import MoreEvents from '../containers/more-events/MoreEvents.container';


const DashboardPage = ( { menuOpen, toggleMenu } ) => {
    const [mount, setMount] = useState(false)

    const closeMenu = useCallback(() => {
        toggleMenu();
    },[toggleMenu])

    useEffect(() => {
        if(!mount) {
            setMount(true);
            if (menuOpen) {
                closeMenu();
            }
        }
    },[closeMenu, menuOpen, mount]);
    
    return (
        <>
            <div className="main-content">
                <Header />
                <TodaysEvents />    
                <MoreEvents />
            </div>
        </>
    )
};

export default DashboardPage;
