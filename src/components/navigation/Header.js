import React, { Component } from 'react'

export default class Header extends Component {
    componentDidMount(){
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-80px";
            }
        }
    }
    openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("open").style.display='none';
    }

    closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("open").style.display = 'initial';
    }
    render() {
        return (
            <>
            <header id="navbar">
                <nav className="container" >
                       <a href="#home">Home</a>
                    <div className="right" >
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                    </div>
                </nav>    
            </header>
                <span id="open" onClick={this.openNav}>&#9776;</span>
            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                <div className="overlay-content">
                    <a onClick={this.closeNav} href="#home">Home</a>
                    <a onClick={this.closeNav} href="#about">About</a>
                    <a onClick={this.closeNav} href="#work">Work</a>
                    <a onClick={this.closeNav} href="#contact">Contact</a>
                </div>
            </div>
            </>
        )
    }
}
