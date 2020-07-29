import React, { useState } from 'react';

import './homepage.styles.css';

import Image1 from '../../components/assets/images/img-01.jpg'
import Image2 from '../../components/assets/images/img-02.png'
import Image3 from '../../components/assets/images/img-03.png'
import Image4 from '../../components/assets/images/img-04.png'
import codechef from '../../components/assets/images/codechef.png';
import codeforces from '../../components/assets/images/codeforces.png';
import hakerrank from '../../components/assets/images/hakerrank.png';
import Deepak from '../../components/assets/images/deepak_kumar.jpg';

function HomePage(){

  const [credentials,setCredentials]=useState({
    email: '',
    message: '',
  })
  const handleChange = (event) => {
    const {name,value} = event.target;
    setCredentials({...credentials,[name]:value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({email: '',message: ''})
  }
  const {email,message} = credentials;
  return (
    <div>
      <div className="background-color-layer" style={{backgroundImage: `url(${Image1})`}}/>
      <main className="content-wrapper">
        <header className="white-text-container section-container">
          <div className="text-center">
            <h1>I am Deepak Kumar</h1>
            <p>Web developer</p>
            <p>
              <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/profile.php?id=100012390211157" title="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://twitter.com/Dpk_9911622150" title="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/deepak-kumar-2a02751a1/" title="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="fa-icon fa-icon-2x" href="https://github.com/deepak9013216128" title="github">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </header>

      {/* <!-- Add your site or app content here --> */}
      
        <div className="container">
          <div className="row">
            <div className="col-xs-12">

              <div className="card">
                <div className="card-block">
                  <h2>About me</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <p><img src={Deepak} className="img-responsive" alt="" /></p>
                    </div>
                    <div className="col-md-8" style={{textAlign: 'justify'}}>
                      <p>I am a dedicated, hardworking and proactive Web Developer with a strong background in writing clean, maintainable , and modular code using Javascript framework (ReactJS) . </p>
                      <p>I have solid work experience in development, testing and analysing processes to increase the overall efficiency of operations.</p>
                      <p>I am currently looking for an opportunity to utilise my technical skills in a challenging working environment and become a valuable asset to the organisation that I work for.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Projects</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={Image2} className="img-responsive" alt="" />
                      <h3 className="h5">CRWN Clothing</h3>
                      <p>June 2020</p>
                    </div>
                    <div className="col-md-4">
                      <img src={Image3} className="img-responsive" alt="" />
                      <h3 className="h5">Covid 19</h3>
                      <p>April 2020</p>
                    </div>
                    <div className="col-md-4">
                      <img src={Image4} className="img-responsive" alt="" />
                      <h3 className="h5">Todo App</h3>
                      <p>Mar 2020</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Work</h2>
                  <div className="work-experience">
                    <small className="date">July 2020- April 2020</small>
                    <h3 className="h5 date-title">Frontend Web developer - <a href="http://spotev.in" title="Create professionnal website">Mobilytics</a></h3>
                    <p>Key responsibilities :-
                      <li>Writing clean, maintainable , and modular code using Javascript framework (ReactJS).</li>
                      <li>Working with the team to manage, optimize web applications.</li>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Education</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">Present - 2018</small>
                        <h3 className="h5 date-title">Software Engineering</h3>
                        <p>Delhi Technological University</p>
                      </div>
                      
                    </div>
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">present-2019</small>
                        <h3 className="h5 date-title">Web developer</h3>
                        <p>Zero To Mastery Academy</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">2018</small>
                        <h3 className="h5 date-title">12 class</h3>
                        <p>GBSSS Bindapur New Delhi-59</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-block">
                  <h2>programming Language</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Javascript  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">C++  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">C  <small>intermediate</small></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Skills</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">ReactJS  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Redux  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Express  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">NodeJS  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Styled-Component  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Git  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">SASS  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">HTML5  <small>intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">CSS3  <small>intermediate</small></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Projects</h2>
                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                  {/* <!-- Wrapper for slides --> */}
                  <div className="carousel-inner" role="listbox">
                    <div className='item  active'>
                      <img src={Image2} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                        <h3 className="h5">CRWN Clothing</h3>
                        <p>June 2020</p>
                      </div>
                    </div>
                    <div className='item'>
                      <img src={Image3} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                        <h3 className="h5">Covid 19</h3>
                        <p>April 2020</p>
                      </div>
                    </div>

                    <div className='item'>
                      <img src={Image4} className="img-responsive" alt="..." />
                      <div className="carousel-caption">
                        <h3 className="h5">Todo App</h3>
                        <p>Mar 2020</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Indicators --> */}
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className='active'></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1" className=''></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2" className=''></li>
                  </ol>

                </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-block">
                  <h2>Competitive Programming Network</h2>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="social-buttons">
                        <a href="https://www.codechef.com/users/deepak8826" title="">
                          <span className="social-round-icon fa-icon">
                            <img src={codechef} width='25px' alt=''/>
                          </span>
                          @deepak8826
                        </a>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="social-buttons">
                        <a href="https://codeforces.com/profile/deepak9911622150" title="">
                          <span className="social-round-icon fa-icon">
                            <img src={codeforces} width='25px' alt=''/>
                          </span>
                          @deepak9911622150
                        </a>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="social-buttons">
                        <a href="https://www.hackerrank.com/deepak9013216128" title="">
                          <span className="social-round-icon fa-icon">
                            <img src={hakerrank} width='25px' alt=''/>
                          </span>
                          @deepak9013216128
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h2>Contact</h2>
                  <form onSubmit={handleSubmit} className="reveal-content">
                    <div className="form-group">
                      <input type="email" name='email' value={email} onChange={handleChange} className="form-control" id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name='message' value={message} onChange={handleChange} rows="5" placeholder="Enter your message" required></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className=" btn btn-primary">Send message</button>
                    </div> 
                  </form>
                </div>
              </div>
            
          </div>
        </div>
      </div> 

      </main>
      <footer className="footer-container white-text-container text-center">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p>©Deepak Kumar</p>
              <p>
                <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/profile.php?id=100012390211157" title="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="fa-icon fa-icon-2x" href="https://twitter.com/Dpk_9911622150" title="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="fa-icon fa-icon-2x" href="https://github.com/deepak9013216128" title="">
                  <i className="fa fa-github"></i>
                </a>
                <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/deepak-kumar-2a02751a1/" title="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;