import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <div class="containere purple topBotomBordersIn">
                <a>HOME</a>
                <a>ARTICLES</a>
                <a>PORTFOLIO</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
            </div>
        </>)
}