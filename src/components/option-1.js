import React from 'react'
import person from '../img/person.jpg'
function Option1() {
    return (
        <div className='box-1'>
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
                            <button>
                                <i class="ri-linkedin-box-fill"></i>
                                <span>LinkedIn</span>
                            </button>
                        </div>
                    </div>

                    <div className='about'>

                    </div>

                    <div className='interests'>

                    </div>
                </div>

                <div className='footer'>

                </div>
            </div>
        </div>
    )
}

export default Option1