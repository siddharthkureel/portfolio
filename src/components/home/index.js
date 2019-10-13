import React, { Component } from 'react';
import LandingArea from "./LandingArea";
import About from './About';
import Work from './Work/index';
import Contact from './Contact';
export default class Home extends Component {
    render() {
        return (
            <>
              <LandingArea/>
              <About/>
              <Work/>
              <Contact/>
            </>
        )
    }
}
