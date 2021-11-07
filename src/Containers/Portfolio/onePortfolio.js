import React from 'react'
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";
import './onePortfolio.css'
import GoToTop from '../../Components/GoToTop/GoToTop'
import arrow from '../../Assets/arrow.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowBack from '@material-ui/icons/ArrowBack'



export default function () {

    const locatione = useLocation()
    let history = useHistory();

    return (
        <div className="porflio-content content">
            {/* <button onClick={history.goBack}><img className="imge" src={arrow} alt="React Logo" /></button> */}
            <a onClick={history.goBack}>
                <ArrowBack className="imge" fontSize='large' />
            </a>

            <h2 className="centere">{locatione.state.title}</h2>
            <h3 className="centere margine-subtitle">{locatione.state.type} : {locatione.state.subTitle} </h3>
            <div className="centere margine">

                {(() => {
                    if (locatione.state.video) {
                        return (
                            <video
                                width="800" height="450" autoPlay loop="true" controls muted >
                                <source src={locatione.state.video} type='video/mp4' />
                            </video>
                        )
                    } else {
                        return (
                            <div><img src={locatione.state.img2} /></div>
                        )
                    }
                })()}

            </div>
            <p>{locatione.state.description}</p>

            {(() => {
                if (locatione.state.pdf) {
                    return (
                        <div className="center about" style={{margin:"40px"}}>

                            <a href={locatione.state.pdf} target="_blank">
                                <span type='button' className='btn btn--outline'>
                                    En savoir plus
                                </span>
                            </a>
                        </div>
                    )
                } else {
                    return (
                        console.log('Pas de pdf')
                    )
                }
            })()}
            <img src={locatione.state.img} />
            {(() => {
                if (locatione.state.img2) {
                    return (
                        <div><img src={locatione.state.img2} /></div>
                    )
                } else {
                    return (
                        console.log('Pas image 2')
                    )
                }
            })()}
            {(() => {
                if (locatione.state.img3) {
                    return (
                        <div><img src={locatione.state.img3} /></div>
                    )
                } else {
                    return (
                        console.log('Pas image 3')
                    )
                }
            })()}
            {(() => {
                if (locatione.state.img4) {
                    return (
                        <div><img src={locatione.state.img4} /></div>
                    )
                } else {
                    return (
                        console.log('Pas image 4')
                    )
                }
            })()}
            {(() => {
                if (locatione.state.img5) {
                    return (
                        <div><img src={locatione.state.img5} /></div>
                    )
                } else {
                    return (
                        console.log('Pas image 5')
                    )
                }
            })()}
            {(() => {
                if (locatione.state.img6) {
                    return (
                        <div><img src={locatione.state.img6} /></div>
                    )
                } else {
                    return (
                        console.log('Pas image 6')
                    )
                }
            })()}


            {/*             <div class="container">
                <article class="content">
                    <img src="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png" alt="Welcome to Ghost" />
                    <section class="post-full-content">
                        <h1 class="content-title">Welcome to Ghost</h1>
                        <section class="content-body load-external-scripts">
                            <h2 id="a-few-things-you-should-know">
                                <strong>A few things you should know</strong>
                            </h2>
                            <ol>
                                <li>Ghost is designed for ambitious, professional publishers who want to actively build a business around their content. That's who it works best for. </li>
                                <li>The entire platform can be modified and customised to suit your needs. It's very powerful, but does require some knowledge of code. Ghost is not necessarily a good platform for beginners or people who just want a simple personal blog. </li>
                                <li>It's possible to work with all your favourite tools and apps with hundreds of
                                    <a href="https://ghost.org/integrations/">integrations</a> to speed up your workflows, connect email lists, build communities and much more.</li>
                            </ol>
                            <h2 id="behind-the-scenes">Behind the scenes</h2>
                            <p>Ghost is made by an independent non-profit organisation called the Ghost Foundation. We are 100% self funded by revenue from our
                                <a href="https://ghost.org/pricing">Ghost(Pro)</a> service, and every penny we make is re-invested into funding further development of free, open source technology for modern publishing.
                            </p>
                            <p>The version of Ghost you are looking at right now would not have been made possible without generous contributions from the open source
                                <a href="https://github.com/TryGhost">community</a>.
                            </p>
                            <h2 id="next-up-the-editor">Next up, the editor</h2><p>The main thing you'll want to read about next is probably: <a href="https://gatsby.ghost.io/the-editor/">the Ghost editor</a>. This is where the good stuff happens.</p>
                            <blockquote>By the way, once you're done reading, you can simply delete the default Ghost user from your team to remove all of these introductory posts! </blockquote>
                        </section>
                    </section>
                </article>
            </div> */}
            <GoToTop />
        </div>

    )
}