import React from 'react';
class Card extends React.Component {
    render(){
        const { image, id, href } = this.props
        return (
            <a href={href} rel="noopener noreferrer" target="_blank">
                <div data-toggle="modal" data-target={`#${id}`} className="card col-md-4 col-sm-2" style={{ width: '18rem',cursor:'pointer' }}>
                    <img className="card-img-top" src={image} alt="Card" />
                    <div className="card-body">
                        <p className="heading-small card-text">{id}</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default Card;
