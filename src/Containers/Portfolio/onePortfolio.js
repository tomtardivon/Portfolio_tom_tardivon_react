import React from 'react'
import { useLocation } from 'react-router'

export default function () {

    const locatione = useLocation() 

    return (
        <div className="article-content">
            <h2>Portfolio : {locatione.state.title}</h2>
        </div>
    )
}