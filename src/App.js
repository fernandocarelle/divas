import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Home from './Layouts/Pages/Home'
/* import Blog from './Layouts/Pages/Blog' */
import About from './Layouts/Pages/About'
import Service from './Layouts/Pages/Services'
import Contact from './Layouts/Pages/Contact'
/* import SinglePost from './Sections/SinglePost' */
import ErrorPage from './Components/Error'
import Catalog from './Layouts/Pages/catalog'

// All external css
import './assets/css/themify-icons.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/" component={ Home } exact />
              <Route path="/sobre" component={ About } />
              <Route path="/catalogo" component={ Catalog } />
              <Route path="/servicos" component={ Service } exact />
              {/* <Route path="/blog" exact component={ Blog } />
              <Route path="/blog/:id" component={ SinglePost }/>   */}        
              <Route path="/contato" component={ Contact } />              
              <Route path="*" component={ ErrorPage } />              
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
