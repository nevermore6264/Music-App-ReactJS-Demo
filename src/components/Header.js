import React, { Component } from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import Favorite from './Favorite';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="container">
                    <Logo />
                    <SearchBox />
                    <Favorite />
                </div>
            </header>
        );
    }
}

export default Header;
