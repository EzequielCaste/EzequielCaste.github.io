import React from 'react';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { useState } from 'react';

const url = process.env.REACT_APP_API_URL;


export const ContactForm = () => {

  const initialForm = {    
    email: '',
    text: ''
  }

  const [sending, setSending] = useState(false)
  
  const [ formValue, handleInputChange ] = useForm(initialForm);

  const {email, text} = formValue;


  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
  
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          text
        })   
        
      }).then( ({ok}) => {
  
        setSending(false);

        ok ? Swal.fire(
          'Thanks!',
          'Email sent correctly!',
          'success'
        ) : Swal.fire('Error', 'Error while sending email', 'error');  
  
      }
        
      )
  
  
    } catch (error) {    
      setSending(false);
      Swal.fire('Error', 'Error while sending email', 'error');  
    }
  }
  
  return (
    <>
    <section id="contact" className="section">
      <div className="container hero">
        <div className="columns hero-body is-centered">
          <div className="box column is-three-quarters">
            <form onSubmit={ handleSubmit }>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                  required={true}
                  onChange={handleInputChange} 
                  value={email}
                  name="email" className="input" type="email" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea onChange={handleInputChange} 
                  value={text} name="text" className="textarea" placeholder=""></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button 
                   disabled={sending}
                   type="submit"
                   className="button is-link is-light"
                  >
                    {sending ? 'Sending...' : 'Submit'}
                    </button>
                </div>              
              </div>  
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="section">
      <div className="content has-text-centered">  
        <div className="container">
          <a className="" href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
          </a>
          <p className="">
          © 2020  <strong>Ezequiel Castellanos</strong>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};
