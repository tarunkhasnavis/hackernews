import React from 'react';
import './Header.scss';
import NavBar from './NavBar';

function Header() {
    return (
        <div>
            <div className="app__header">
                <div className="app__title">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"/>
                    <h1>Hacker News</h1>
                </div>
                <NavBar/>
            </div>
            <div className="app__message">
                <p>Dear developer, our mission is to serve all the best programming news you’ll ever need. Ready?</p>
            </div>
        </div>
    )
}

export default Header
