import React from 'react';
import Card from "./Card";
import { websites, projects, designs } from "./data";
class CardGroup extends React.Component{
    state = {
        websites:[],
        projects: [],
        designs: []
    }
    componentDidMount () {
        this.setState({
            websites,
            projects,
            designs,
        })
    }
    getWebsiteCards() {
        return this.state.websites.map((website,i) =>
            <React.Fragment key={i}>
                <Card id={website.context} key={website.index} image={website.image} href={website.href} />
            </React.Fragment>
        ); 
    }
    getProjectCards() {
        return this.state.projects.map((project,i) =>
            <React.Fragment key={i}>
                <Card id={project.context} key={project.index} image={project.image} href={project.href} />
            </React.Fragment>
        );
    }
    getDesignCards() {
        return this.state.designs.map((design,i) =>
            <React.Fragment key={i}>
                <Card id={design.context} key={design.index} image={design.image} href={design.href} />
            </React.Fragment>
        );
    }
    render(){
        return(
            <div className="tab-content">
                <div id="web" className="tab-pane fade in active">
                    <div className="row" >{this.getWebsiteCards()}</div>
                </div>
                <div id="project" className="tab-pane fade">
                    <div className="row" >{this.getProjectCards()}</div>
                </div>
                {/* <div id="design" className="tab-pane fade">
                    <div className="row" >{this.getDesignCards()}</div>
                </div> */}
            </div>
        )
    }
}

export default CardGroup;
