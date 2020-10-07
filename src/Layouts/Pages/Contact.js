import React, { Fragment } from 'react'
import ContactSec from '../../Sections/Contact'
import Whatsapp from '../../Components/Whatsapp';

const contact = props => {
    return (
        <Fragment>
            <ContactSec {...props}/>
            <Whatsapp />
        </Fragment>
    )
}

export default contact