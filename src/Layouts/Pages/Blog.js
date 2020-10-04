import React, { Component } from 'react'
import Posts from '../../Sections/Posts'

class blog extends Component {


    render() {
        return (
            // Blog section start
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Nosso Blog</h3>
                                <p>Confira nossas últimas postagens e fique por dentro!</p>
                            </div>
                        </div>
                    </div>

                    {/* Posts */}
                    <Posts />

                </div>      
            </section>
            // Blog section end
        )
    }
}

export default blog