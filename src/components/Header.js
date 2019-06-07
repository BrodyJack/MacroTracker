import React from 'react';
import { Link } from 'react-router-dom';
import home_logo from '../images/home.svg';
import add_logo from '../images/plus.svg';
import app_logo from '../images/logo.svg';
import log_logo from '../images/text.svg';
import profile_logo from '../images/man.svg';

export default () => (
    <header className="App-header">
        <Link to='/'>
            <img src={home_logo} className="Link-logo" alt="app_logo" />
        </Link>
        <Link to='/add'>
            <img src={add_logo} className="Link-logo" alt="add_logo" />
        </Link>
        <img src={app_logo} className="App-logo" alt="app_logo" />
        <Link to='/log'>
            <img src={log_logo} className="Link-logo" alt="log_logo" />
        </Link>
        <Link to='/profile'>
            <img src={profile_logo} className="Link-logo" alt="profile_logo" />
        </Link>
    </header>
);