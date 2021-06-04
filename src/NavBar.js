import React, {useState} from 'react';
import './NavBar.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="nav">
            <Link
                className="nav__link"
                activeClass="active"
                to="Popular"
                spy={true}
                onClick={() => setClicked(!clicked)}
            >
                <div className="nav__link">Popular</div>
            </Link>
            <Link
                className="nav__link"
                activeClass="active"
                to="Recent"
                spy={true}
                onClick={() => setClicked(!clicked)}
            >
                <div className="nav__link">Recent</div>
            </Link>
            <Link
                className="nav__link"
                activeClass="active"
                to="Upvoted"
                spy={true}
                onClick={() => setClicked(!clicked)}
            >
                <div className="nav__link">Upvoted</div>
            </Link>
            <Link
                className="nav__link"
                activeClass="active"
                to="Discussed"
                spy={true}
                onClick={() => setClicked(!clicked)}
            >
                <div className="nav__link">Discussed</div>
            </Link>
        </div>
    )
}

export default NavBar
