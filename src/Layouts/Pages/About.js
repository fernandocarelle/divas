import React, { Component, Fragment } from 'react'
import AboutSec from '../../Sections/About'
import Team from '../../Sections/Team'
import Testimonial from '../../Sections/Testimonial'
import Whatsapp from '../../Components/Whatsapp';

class About extends Component {
    render() {
        return (
            <Fragment>
                <AboutSec />
                {/* <Team /> */}
                <Testimonial />
                <Whatsapp />
            </Fragment>
        )
    }
}

export default About