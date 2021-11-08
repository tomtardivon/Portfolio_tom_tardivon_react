import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getArtcile } from '../../redux/articles/articleReducer'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Projects from '../../Components/Projects/Projects'
import HomePortfolio from '../../Components/HomePortfolio/HomePortfolio'
import FormulaireContact from '../../Components/FormulaireContact/FormulaireContact'

export default function Home() {

    const { articles } = useSelector(state => ({
        ...state.articleReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArtcile())
        }
    }, [])
    console.log(articles)
    return (
        <>
            <About />
            {/* <Projects /> */}
            <HomePortfolio />
            <Skills />
            {/* <Contact /> */}
            <FormulaireContact />



            {/*             <h1 className='home-title'>Tous les articles</h1>
            <div className="container-cards">
                {articles.map(item => {
                    return (
                        <Card key={uuidv4()}>
                            <h2>{item.title}</h2>
                            <Link to={{
                                pathname: `articles/${item.title.replace(/\s+/g, '_').trim()}`,
                                state:{
                                    title:item.title,
                                    description:item.description,
                                }
                            }}>
                                Lire l'article</Link>
                        </Card>
                        
                    )
                })}
            </div> */}
        </>
    )
}
