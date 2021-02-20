import React from 'react';

export const MainSection = () => {
  return (
    <section className="hero is-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth"></div>

            <div className="column is-one-fifth is-hidden-touch">
              <figure className="image is-128x128">
                <img src="https://i.imgur.com/QVESlbM.png" alt="" />
              </figure>
            </div>

            <div className="column is-desktop">
              <h1 className="title is-1 is-size-2-touch has-text-weight-bold">
                Hi! I'm Ezequiel. <br />
                Welcome to my Portfolio.
              </h1>
              <div className="subtitle is-4 is-size-5-touch">
                <p>
                  I'm a self-taught Web Developer and English/Spanish
                  translator.
                </p>
              </div>
              <div className="subtitle is-4 is-size-5-touch">
                <p>
                  I started building websites as a hobby, back when blogs were
                  starting out.
                </p>
              </div>
              <div className="subtitle is-4 is-size-5-touch">
                <p>
                  Front-end is where I am the most comfortable and what I enjoy
                  the most!
                </p>
              </div>
              <div className="subtitle is-1 is-size-3-touch">
                <a
                  href="https://github.com/EzequielCaste"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github ml-3"></i>
                </a>
                <a
                  href="https://twitter.com/Ezequiel_Caste"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter ml-3"></i>
                </a>
                <a href="#contact">
                  <i className="far fa-envelope ml-3"></i>
                </a>
                <a
                  href="https://codepen.io/ezequiel_/"
                  id="profile-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-codepen ml-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin ml-3"></i>
                </a>
              </div>
            </div>

            <div className="column is-one-quarter is-hidden-desktop"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
