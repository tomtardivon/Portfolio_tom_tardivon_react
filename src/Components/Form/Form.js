import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Form.css'

export default function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        dispatch({
            type: 'ADDARTICLE',
            payload: article
        })


        setArticle({
            title: "",
            body: ""
        })

    };

    const handleInputs = e => {
        if (e.target.classList.contains('inp-title')) {
            const newObjState = { ...article, title: e.target.value }
            setArticle(newObjState);
        }
        else if (e.target.classList.contains('inp-body')) {
            const newObjState = { ...article, body: e.target.value }
            setArticle(newObjState);
        }
    };

    return (
        <>

            <h1 className="title-form">Écrivz un article</h1>

            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input
                    onChange={handleInputs}
                    value={article.title}
                    type="text"
                    id="title"
                    className="inp-title"
                    placeholder="Entrez votre nom">

                </input>

                <label htmlFor="title">Votre article</label>
                <textarea
                    id="article"
                    onChange={handleInputs}
                    value={article.body}
                    className="inp-body"
                    placeholder="Votre article">
                </textarea>

                <button className="btne third">Envoyer l'artcile</button>
            </form>

        </>
    )
}
