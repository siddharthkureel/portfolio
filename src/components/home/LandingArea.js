import React from 'react';
import Block from "../HOC/Block";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
const LandingArea = () => {
    return (
        <Block border={'red'} suit={'hearts'} card={'K'} id='home'>
           <div className='center-area landing-area margin-top-50' >
               <Fade left>
                    <div className="left" >
                        I<br/>
                        AM<br />
                        <Typewriter
                            options={{
                                strings: ['MERN Stack developer', 'JavaScript Developer','Web Designer'],
                                autoStart: true,
                                loop: true,
                                pauseFor:1000
                            }}
                        />
                </div> 
                </Fade>
                <div className="right fade-in">
                    <Fade right >
                        <div>KUREEL<br/>
                        SIDDHARTH
                        </div>
                    </Fade>
               </div>
           </div>
        </Block>
    )
}
export default LandingArea;
