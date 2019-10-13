import React from 'react'

const Block = ({children, border, suit='', card='', mLeft='',id}) => {
    return (
        <div className="block__wrapper" id={id}>
            <div className={`block__wrapper-${border}`} >
                <div className='block__wrapper-left' >
                    <img src={`./cards/${suit}.svg`} alt='hearts'/>
                    <div className='block__wrapper-card' style={{ marginLeft:mLeft }} >{card}</div>
                </div>
                {children}
                <div className='block__wrapper-right'>
                    <img src={`./cards/${suit}.svg`} alt='hearts' /> 
                    <div className='block__wrapper-card' style={{ marginLeft:mLeft }}>{card}</div>   
                </div>
            </div>
        </div>
    )
}

export default Block;
