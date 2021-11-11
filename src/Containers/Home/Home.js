import React from 'react'
import './Home.css'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import HomePortfolio from '../../Components/HomePortfolio/HomePortfolio'
import FormulaireContact from '../../Components/FormulaireContact/FormulaireContact'


export default function Home() {
    return (
        <>
            <About />
            {/* <Projects /> */}
            <HomePortfolio />
            <Skills />
            {/* <Contact /> */}
            <FormulaireContact />
        </>
    )
}
