import React from 'react';
import { useHistory } from 'react-router-dom';
import { logo } from '../../../assets';
import "./header.scss";

const Header = () => {

    const history = useHistory();

    return (
        <div className="header">
            <div className="header-container">
                <p className="logo-app">
                    <img className="header-logo" src={logo} alt="logo" />log
                </p>
                <p className="menu-item" onClick={() => history.push('/login')}>Logout</p>
            </div>
        </div>
    )
}

export default Header
