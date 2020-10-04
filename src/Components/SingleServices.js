import React from 'react'

const singleServices = props => {
    return (
        <div className="post">
            <img src={ require("../assets/images/" + props.id + ".png") } alt="" />
                <h4 className="name">{ props.name }</h4>
                <div className="description">
                    <span>{ props.description }</span>
                </div>
                
                <br/>
                <div className="prices">
                    <span className="price1">{props.price}</span>
                    <span className="price2">{props.price2}</span>
                </div>
                
        </div>
    )
}

export default singleServices