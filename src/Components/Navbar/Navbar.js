import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }
        window.addEventListener('rezise', changeWidth)

        return () => {
            window.removeEventListener('rezise', changeWidth);
        }

    }, [])



    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <li className="items">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="items">
                        <Link to="/ecrire">Écrire</Link>
                    </li>
                    <li className="items">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            )}
            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    )
}
