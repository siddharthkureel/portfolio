import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Block from '../../HOC/Block';
import CardGroup from './CardGroup';
const Work = () => {
    return (
        <Block border={'red'} suit={'diamond'} card={'Q'} mLeft={'0.1rem'} id='work' >
            <LightSpeed>
                <div className="home__our-work" >
                        <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" aria-expanded="true" href="#web">Web</a></li>
                            <li><a data-toggle="tab" href="#project">Projects</a></li>
                            {/* <li><a data-toggle="tab" href="#design">Design</a></li> */}
                        </ul>
                    <CardGroup/>
                </div>
            </LightSpeed>
        </Block>
    )
}

export default Work
