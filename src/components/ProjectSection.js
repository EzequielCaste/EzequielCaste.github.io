import React from 'react';

export const ProjectSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://i.imgur.com/wtts2gn.png"
                    alt="Journal App"
                  />
                </figure>
              </div>
              <div className="card-header-title is-size-3 is-centered">Journal App</div>
              <div className="card-content">
                <div className="content">
                Login/Register and keep notes of your journal. You can create, edit and delete notes. Made using React, Redux and Firebase.     
                </div>

                <div className="level is-mobile">
                  <div className="level-item">
                    <a href="https://github.com/EzequielCaste/react-course/tree/master/05-journal-app" target="_blank" className="button is-outlined" rel="noopener noreferrer">
                      <i className="far fa-file-code"> </i>
                      <span>Code</span>
                    </a>
                  </div>
                  <div className="level-item">
                    <a href="https://react-journal-app.netlify.app/" rel="noopener noreferrer" className="button is-outlined" target="_blank">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://i.imgur.com/npGBcuq.png"
                    alt="React Weather App"
                  />
                </figure>
              </div>
              <div className="card-header-title is-size-3 is-centered">React Weather App</div>
              <div className="card-content">
                <div className="content">
                A great way to learn React is by building apps. With this weather app I learned about React Router, API Fetch, Async/Await and Lifting State.
                </div>

                <div className="level is-mobile">
                  <div className="level-item">
                    <a href="https://github.com/EzequielCaste/weather-app" rel="noopener noreferrer" target="_blank" className="button is-outlined">
                      <i className="far fa-file-code"> </i>
                      <span>Code</span>
                    </a>
                  </div>
                  <div className="level-item">
                    <a href="https://ezequielcaste.github.io/weather-app/" rel="noopener noreferrer" className="button is-outlined" target="_blank">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://i.imgur.com/SWLPSj6.png"
                    alt="Markdown Previewer"
                  />
                </figure>
              </div>
              <div className="card-header-title is-size-3 is-centered">Markdown Previewer</div>
              <div className="card-content">
                <div className="content">
                Front End Libraries Project for FreeCodeCamp. Preview your markdown while you type thanks to React and marked.js
                </div>

                <div className="level is-mobile">
                  <div className="level-item">
                    <a href="https://codesandbox.io/s/github/ezzep66/react-markdown-previewer" rel="noopener noreferrer" target="_blank" className="button is-outlined">
                      <i className="far fa-file-code"> </i>
                      <span>Code</span>
                    </a>
                  </div>
                  <div className="level-item">
                    <a href="https://react-markdown-preview.now.sh/" target="_blank" rel="noopener noreferrer" className="button is-outlined">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
