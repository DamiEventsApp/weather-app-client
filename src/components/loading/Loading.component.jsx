import React from 'react';
import Logo from '../logo/Logo.component';
import './loading.styles.scss';

const Loading = ({ isLoading }) => {
    return (
        <div className={`loading ${isLoading ? "show" : ""}`}>
            <Logo />
        </div>
    )
};

export default Loading;
