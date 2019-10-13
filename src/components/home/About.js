import React from 'react';
import Block from '../HOC/Block';
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <Block border={'black'} suit={'clubs'} card={'J'} mLeft={'0.5rem'} id='about'>
            <div className='center-area about margin-top-50' >
                <Fade left >
                    <div className="left" >
                        Passionate <br/>
                        for Web Design<br/>
                        and Development
                    </div>
                </Fade>
                <div className="right">
                    <Fade right>
                        <div>
                            Unitec 2018<br />
                            Graduate Diploma in Computing<br />
                            CEC 2016<br />
                            Bachelor in Computer Science<br />
                        </div>
                    </Fade>
                </div>
            </div>
        </Block>
    )
}

export default About;
