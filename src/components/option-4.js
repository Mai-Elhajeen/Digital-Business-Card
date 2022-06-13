/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import person from '../img/person.jpg'
function Option4() {
    return (
        <div className='box box-4 light'>
            <div className='card'>
                <div className='head'>
                    <img src= {person} alt='person-card' />
                </div>

                <div className='main'>
                    <div className='info'>
                        <h1>Laura Smith</h1>
                        <span>Frontend Developer</span>
                        <p>laurasmith.website</p>
                        <div className='buttons'>
                            <button className='email-btn'>
                                <i class="ri-mail-fill"></i>
                                <span>Email</span>
                            </button>
                        </div>
                    </div>

                    <div className='about'>
                        <h2>About</h2>
                        <p>
                            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                        </p>
                    </div>

                    <div className='interests'>
                        <h2>Interests</h2>
                        <p>
                            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                    </div>
                </div>

                <div className='footer'>
                    <a href='#' target='_blank'>
                        <i class="ri-twitter-fill"></i>
                    </a>

                    <a href='#' target='_blank'>
                        <i class="ri-github-fill"></i>
                    </a>

                    <a href='#' target='_blank'>
                        <i class="ri-facebook-fill"></i>
                    </a>

                    <a href='#' target='_blank'>
                        <i class="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
    </div>
    )
}

export default Option4