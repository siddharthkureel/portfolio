import React from "react";
import ReactDOM from "react-dom";

const Modal = ({id , title = '', title_id = '', footer = true , children , size='' }) =>{
    return ReactDOM.createPortal(
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={title_id} aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered ${!size?'modal-xl':size}`} role="document">
                <div className="modal-content">
                    {title?
                            <div className="modal-header">
                                <h3 className="heading-medium modal-title text-align-center" id={title_id}>{title}</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true" className="large-font-130">&times;</span>
                                </button>
                            </div>
                            :
                            <div style={{ postion:'relative', padding:'0.5rem 1rem' }} >
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true" className="large-font-130">&times;</span>
                                </button>
                            </div>
                    }
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer?
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary button" data-dismiss="modal">Close</button>
                    </div>
                    :''
                    }
                </div>
            </div>
        </div>, document.querySelector('#react-modal'));
} 
export default Modal;