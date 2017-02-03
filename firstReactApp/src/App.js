import React, { Component } from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import { Home } from './home.js';
import { About } from './about.js';
import { Contact } from './contact.js';
import { ReactJs } from './reactjs.js';

import './App.css';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
     <div className="App">
         <Header></Header>
         <Routers></Routers>
         <Footer></Footer>
     </div>
    );
  }
} 

class Header extends Component{ 
  render () {

    return (
      <div className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" /> <label id="logo"> React JS </label>
        <Nav></Nav>
      </div>
      );
  }
}


class Nav extends Component{
  render(){
    return(
          <div className="App">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">

                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/"></Link>
                  </div>
              
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/react">React</Link></li>
                    </ul>
                   
                    <ul className="nav navbar-nav navbar-right">
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/react">React</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
            <div className="container">
              {this.props.children}
            </div>
          </div>
    );
  }
}      
     
class Routers extends Component{
  render(){
    return(
        <Router history={ browserHistory }>
               <Route path="/" component={Home}>
                 <IndexRoute component={Home}/>
                   <Route path="/about" component={About}></Route>
                   <Route path="/contact" component={Contact}></Route>
                   <Route path="/react" component={ReactJs}></Route>  
               </Route>
               
        </Router>  
      );
  }
}
class Footer extends Component{ 

  render () {
    return (
      <div className="App-footer">
         <p> Copyright &copy; ReactApps.com </p> 
      </div>
      );
  }
}


export default App;


