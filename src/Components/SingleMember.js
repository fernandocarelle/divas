import React from 'react'
/* import MemberSocial from './MemberSocial' */
import { FaWhatsapp } from 'react-icons/fa';

const singleMember = props => {
    return (
        <div className="single-memb">
            <img src={ require("../assets/images/team/" + props.id + ".jpg") } alt="" />
            <div className="memb-details">
                <h6>{ props.name }</h6>
                <span>{ props.speciality }</span>
                <a href="https://bit.ly/vemprodivas" target="blank" className="whatsapp"><FaWhatsapp /></a>
            </div>
        </div>
    )
}

export default singleMember