import React, { Component } from 'react';
class ModalBody extends Component {
  
    render() {
        return (
            <div className="home__our-work__modal-body" >
                <div className="row" >
                    <h1 className="heading-medium" >
                          We build : {this.props.heading}
                     </h1>
                </div>
                
                <div className="row" >
                    <h1  className="heading-medium" >
                        Project Description
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                </div>
                <div className="row center" style={{display: "block", margin: "0 auto !important"}}>
                    <picture>
                        <source media="(max-width: 799px)" srcSet="./images/home/modal/mobiles-320w.png" alt="mobiles" style={{maxWidth: "1500px"}}/>
                        <source media="(min-width: 800px)" srcSet="./images/home/modal/mobiles.webp" alt="mobiles" style={{maxWidth: "1500px"}}/>
                        <source media="(min-width: 800px)" srcSet="./images/home/modal/mobiles.png" alt="mobiles" style={{maxWidth: "1500px"}}/>
                        <img src="./images/home/modal/mobiles.png" alt="mobiles" style={{maxWidth: "100%"}}/>
                    </picture>
                    <h1 className="heading-medium" >Mobile App Feature</h1>
                </div>
                <br />
                <div className="row" >
                    <div className="col-md-6">
                        <div className="text-align-center">
                            <picture>
                                <source media="(max-width: 799px)" srcSet="./images/home/modal/laptop-320w.png" alt="Laptop"/>
                                <source media="(min-width: 800px)" srcSet="./images/home/modal/laptop.webp" alt="Laptop"/>
                                <source media="(min-width: 800px)" srcSet="./images/home/modal/laptop.png" alt="Laptop"/>
                                <img src="./images/home/modal/laptop.png" alt="Laptop" style={{maxWidth: "100%"}}/>
                            </picture>
                        </div>
                        
                    </div>
                    <div className="col-md-6" >
                        <br/>
                        <h1 className="heading-medium" >Website</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ModalBody;
