import React, { useState } from 'react'
import '../../Containers/Portfolio/Portfolio.css'
import datadWork from '../../Containers/Portfolio/dataWork'
import CardPortfolio from '../../Components/CardPortfolio/CardPortfolio'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'


export default function HomePortfolio() {

    const size = 3

    const datadWork1 = datadWork[Math.floor(Math.random() * datadWork.length)];
    const n = 3;
    const sample = datadWork
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, n);


    const datadWorkHome = datadWork.slice(0, size)

    console.log(datadWork1.id)


    return (
        <>
            <section className='section contact '>
                <h2 className='section__title'>Porfolio</h2>
                <div class="cards-list">
                    {sample.map((item,) => {
                        return (

                            <CardPortfolio key={uuidv4()}>
                                <Link to={{
                                    pathname: `portfolio/${item.title.replace(/\s+/g, '_').trim()}`,
                                    state: {
                                        title: item.title,
                                        subTitle:item.subTitle,
                                        description: item.description,
                                        type: item.type,
                                        img: item.img,
                                        img2: item.img2,
                                        img3: item.img3,
                                        img4: item.img4,
                                        img5: item.img5,
                                        img6: item.img6,
                                        pdf: item.pdf,
                                        video: item.video
                                    }
                                }}>
                                    <div key={item.id} class="card 1 portfolio_single_content">
                                        <div class="card_image"> <img src={item.imgPortfolio} /> </div>
                                        <div class="overlay card_title title-white">
                                            {/* <p>{item.title}</p> */}
                                        </div>
                                    </div>
                                </Link>
                            </CardPortfolio>
                        )
                    })}
                </div>
                <div className='center about'>
                <Link to="/portfolio">
                    <a>
                        <span type='button' className='btn btn--outline'>
                            En voir plus
                        </span>
                    </a>
                </Link>
                </div>
            </section>

        </>
    )
}



