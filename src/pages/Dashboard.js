import React, { useCallback, useEffect } from 'react';
import Header from '../containers/header/Header.container';
import TodaysEvents from '../containers/todays-events/TodaysEvent.container';
import MoreEvents from '../containers/more-events/MoreEvents.container';


const DashboardPage = ( { menuOpen, toggleMenu } ) => {
    
    const closeMenu = useCallback(() => {
        if (menuOpen) toggleMenu();
    }, [toggleMenu, menuOpen])

    useEffect(() => {
        closeMenu();
    },[closeMenu])

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
