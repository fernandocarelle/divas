import React from 'react'

const singleTestimonial = props => {
    return (
        <div className="single-tst">
            <img src={ require("../assets/images/quote.png") } alt="" />
            <div className="client-info">
                <span>{props.description}</span>
                <br/><br/>
                <p>{props.name}</p>
                <img src={ require("../assets/images/testimonials/" + props.id + ".png") } alt="" className="thumb" />
                
            </div>
        </div>
    )
}

export default singleTestimonial