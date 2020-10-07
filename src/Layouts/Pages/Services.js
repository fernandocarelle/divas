import React, { Fragment } from 'react'
import Procedure from '../../Sections/Procedure'
import Contact from '../../Sections/Contact'
import Whatsapp from '../../Components/Whatsapp';

const services = props => {
    return (
        <Fragment>
            <Procedure />
            <Contact />
            <Whatsapp />
        </Fragment>
    )
}

export default services