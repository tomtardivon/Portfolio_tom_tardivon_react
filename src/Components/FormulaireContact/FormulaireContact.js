import React, { useState } from "react";
import './FormulaireContact.css'

import emailjs from 'emailjs-com';

export default function FormulaireContact() {


  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const succesMessage = () => {
    let formMess= document.querySelector('.form-message');

    formMess.innerHTML ='Message bien envoyé ! '
    formMess.style.color = '#4BB543'

    document.getElementById('name').classList.remove('error')
    document.getElementById('email').classList.remove('error')
    document.getElementById('message').classList.remove('error')

    setTimeout(() => {
      formMess.style.opacity ='0';
    }, 5000);
  }

  const failMessage = () => {
    let formMess= document.querySelector('.form-message');

    formMess.innerHTML ='Merci de remplir correctement les champs requis *';

    document.getElementById('name').classList.add('error')
    document.getElementById('email').classList.add('error')
    document.getElementById('message').classList.add('error')
  }

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display ='contents';
      mail.style.animation ='dongle 1s';
      setTimeout(()=> {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_8vwk1ik", {
        name,
        company,
        email,
        message,
      });
    } else {
      failMessage();
    }
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_sw1e30u", templateId, variables)
      .then((res) => {
        succesMessage();
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
          "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <>
      <section className="section">
        <form className="container-form">

          <h2 className='section__title'>Contact</h2>

          <input
            className="inp-title"
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />

          <input
            className="inp-title"
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="sujet"
            value={company}
          />
          {/*         
        <label htmlFor="title">phone</label>
        <input
          className="inp-title"
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        */}

          <label id="not-mail">Email non valide</label>
          <input
            /*style={{ marginRight: "10px" }} */
            className="inp-title"
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
          <textarea
            className="inp-body"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
          <input
            className="btne-third"
            type="button"
            value="Envoyer"
            onClick={handleSubmit}
          />

          <div className="form-message"></div>
        </form>



        {/*       <form className="container-form">
        <label htmlFor="title">Titre</label>
        <input

          type="text"
          id="title"
          className="inp-title"
          placeholder="Entrez votre nom">

        </input>

        <label htmlFor="title">Votre article</label>
        <textarea
          id="article"

          className="inp-body"
          placeholder="Votre article">
        </textarea>

        <button className="btne third">Envoyer l'artcile</button>
      </form> */}
      </section>
    </>
  )
}
