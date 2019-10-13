import React from 'react';
import Block from '../HOC/Block';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <Block border={'black'} suit={'spades'} card={'A'} mLeft={'0.2rem'} id='contact'>
            <div className='center-area contact margin-top-50' >
                <Fade left>
                    <div className="left" >
                        <a href="https://github.com/siddharthkureel" rel="noopener noreferrer" target="_blank">
                            GITHUB <i class="fa fa-github-square"></i>
                        </a><br />
                        <a href="https://www.linkedin.com/in/siddharthkureel/" rel="noopener noreferrer" target="_blank">
                            LINKEDIN <i class="fa fa-linkedin-square"></i>
                        </a><br />
                        <a href="https://www.facebook.com/siddharthkureel" rel="noopener noreferrer" target="_blank">
                            FACEBOOK <i class="fa fa-facebook-square"></i>
                        </a>
                    </div>
                </Fade>
                <div className="right fade-in-right">
                    <div className="right__wrapper" >
                        <Fade right>
                            <div>
                                <i class="fa fa-phone"></i> 022 677 8027
                            </div>
                            <div>
                                    <i class="fa fa-envelope"></i> siddharthkureel@gmail.com
                            </div>
                            <div>
                                <i class="fa fa-map-marker"></i> 30A, whitney street, Auckland
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default Contact;
