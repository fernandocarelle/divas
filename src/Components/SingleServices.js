import React from 'react'

const singleServices = props => {
    return (
        <div className="post">
            <img src={ require("../assets/images/" + props.id + ".png") } alt="" />
                <div className="name">
                    <h4 >{ props.name }</h4>
                </div>
                
                <div className="aba">
                    <div className="description">
                        <span>{ props.description }</span>
                    </div>
                    
                    <br/>
                    <div className="prices">
                        <span className="price1">{props.price}</span>
                        <span className="price2">{props.price2}</span>
                    </div>
                </div>
                
        </div>
    )
}

export default singleServices