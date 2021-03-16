import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {

    state = {
        menuOpen: false
    }

    // isHome = 
    // absHeader = ( this.props.location.pathname === "/") ? ' abs-header' : '';
    // right = ( this.props.location.pathname === '/') ? '' : ' text-right';

    menuToggleHandler = () => {
        this.setState( prevState => {
            return { menuOpen: !prevState.menuOpen }
        })
    }

    // componentWillUnmount() {
    //     this.clearStateHandler()
    // }
    
    clearStateHandler = () => {
        if (this.state.menuOpen) {
            this.setState({
                menuOpen: false
            })
        }
    }

    render() {

        let absHeader = ( this.props.location.pathname === "/") ? ' abs-header' : '';
        let right = ( this.props.location.pathname === '/') ? '' : ' text-right';

        return (
            // Header start
            <header className={"header" + absHeader }>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-3">
                            <NavLink to="/" className="logo">
                                <img src= { require("../assets/images/logo.png")} alt="" />
                            </NavLink>
                        </div>
                        <div className={"col-md-9" + right}>
                            <nav className="primary-menu">
                                <button className="mobile-menu" onClick={ this.menuToggleHandler }><i className="ti-menu"></i></button>
                                <ul className={ this.state.menuOpen ? "active" : '' }> 
                                    <li><NavLink to="/" onClick={ this.clearStateHandler }>Home</NavLink></li>
                                    <li><NavLink to="/sobre" onClick={ this.clearStateHandler }>Sobre</NavLink></li>
                                    <li><NavLink to={{ pathname: "https://divasbeleza.lojavirtualnuvem.com.br/" }} target="_blank" onClick={ this.clearStateHandler }>Loja</NavLink></li>
                                    <li><NavLink to="/servicos" onClick={ this.clearStateHandler }>Serviços</NavLink></li>
                                    {/* <li><NavLink to="/blog" onClick={ this.clearStateHandler }>Blog</NavLink></li> */}
                                    <li><NavLink to="/contato" onClick={ this.clearStateHandler }>Contato</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            // Header start
        )
    }
    
}

export default withRouter(Navbar)
