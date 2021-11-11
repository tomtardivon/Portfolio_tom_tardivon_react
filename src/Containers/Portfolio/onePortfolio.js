import React from 'react'
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";
import './onePortfolio.css'
import GoToTop from '../../Components/GoToTop/GoToTop'
import ArrowBack from '@material-ui/icons/ArrowBack'

export default function () {

    const locatione = useLocation()
    let history = useHistory();

    return (
        <div className="porflio-content content">
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
                                width="100%" height="450" autoPlay loop="true" controls muted >
                                <source src={`../${locatione.state.video}`} type='video/mp4' />
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

                            <a href={`../${locatione.state.pdf}`} target="_blank">
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
            <GoToTop />
        </div>

    )
}