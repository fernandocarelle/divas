import React from 'react'
import Banner from '../../Sections/Banner';
import AboutSec from '../../Sections/About';
import Service from '../../Sections/Service'
/* import Procedure from '../../Sections/Procedure' */
import Testimonial from '../../Sections/Testimonial'
import Team from '../../Sections/Team'
/* import Appointment from '../../Sections/Appointment'
import Blog from './Blog' */
import Contact from '../../Sections/Contact'
import Highlights from '../../Sections/Highlights';
import Whatsapp from '../../Components/Whatsapp';

import { withRouter } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

const home = props => {
    return (
        <React.Fragment>
            <Banner />
            <AboutSec />
            <Service />
            <Highlights />
            <Testimonial />
            {/* <Team /> */}
            {/* <Appointment /> */}
            {/* <Blog /> */}
            <Whatsapp />
            <Contact />
        </React.Fragment>
    )
}

export default withRouter(home)