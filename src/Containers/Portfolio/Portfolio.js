import React from 'react'
import './Portfolio.css'
import Img from '../../Assets/3d.png'
import datadWork from './dataWork'
import CardPortfolio from '../../Components/CardPortfolio/CardPortfolio'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import  Projects  from '../../Components/Projects/Projects'

export default function Portfolio() {
    return (
        
        <>
        
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>

            <h2 className="title-porfolio">Porfolio </h2>

            <div class="portfolio_menu" id="filters">
                <ul>
                    <li class="active_prot_menu"><a href="#porfolio_menu" data-filter="*">all</a></li>
                    <li><a href="#porfolio_menu" data-filter=".websites">websites</a></li>
                    <li><a href="#porfolio_menu" data-filter=".webDesign" >web design</a></li>
                    <li><a href="#porfolio_menu" data-filter=".appsDevelopment">apps development</a></li>
                    <li><a href="#porfolio_menu" data-filter=".GraphicDesign">graphic design</a></li>
                    <li><a href="#porfolio_menu" data-filter=".responsive">responsive</a></li>
                </ul>
            </div>

            <div class="cards-list">
                {datadWork.map((item,) => {
                    return (
                        <CardPortfolio key={uuidv4()}>
                            <Link to={{
                                pathname: `portfolio/${item.title.replace(/\s+/g, '_').trim()}`,
                                state: {
                                    title: item.title,
                                }
                            }}>
                                <div key={item.id} class="card 1 portfolio_single_content">
                                    <div class="card_image"> <img src={item.img} /> </div>
                                    <div class="card_title title-white">
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </CardPortfolio>
                    )
                })}
            </div>
            <div class="portfolio_menu" id="filters">
                <ul>
                    <li class="active_prot_menu"><a href="#porfolio_menu" data-filter="*">all</a></li>
                    <li><a href="#porfolio_menu" data-filter=".websites">websites</a></li>
                    <li><a href="#porfolio_menu" data-filter=".webDesign" >web design</a></li>
                    <li><a href="#porfolio_menu" data-filter=".appsDevelopment">apps development</a></li>
                    <li><a href="#porfolio_menu" data-filter=".GraphicDesign">graphic design</a></li>
                    <li><a href="#porfolio_menu" data-filter=".responsive">responsive</a></li>
                </ul>
            </div>
            <div class="cards-list">
                <div class="card 1 portfolio_single_content">
                    <div class="card_image"> <img src={Img} /> </div>
                    <div class="card_title title-white">
                        <p>Projet 3D</p>
                    </div>
                </div>

                <div class="card 2">
                    <div class="card_image">
                        <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
                    </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 3">
                    <div class="card_image">
                        <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                    </div>
                    <div class="card_title">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 4">
                    <div class="card_image">
                        <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
                    </div>
                    <div class="card_title title-black">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
                    <div class="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>
            </div>
        </>
    )
}
