import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'whatwg-fetch';
import {render} from 'react-dom';

import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import RepoDetails from './components/RepoDetails';

export class App extends React.Component {

  render(){

    return(
      <div>
        <header><Link to="/home">App</Link></header>
        <menu>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}
const HomePage = (props) =>{
  return(
    <Home title="Home Page"/>
  )
}
const AboutPage = (props) => {
  return(
    <About title="About Page"/>
  )
}
const ReposPage = (props) =>{
  return(
    <Repos title = "Repos Page"/>
  )
}
render((
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/home' render={HomePage}/>
      <Route path='/about' render={AboutPage}/>
      <Route path='/repos' render={ReposPage}>
        <Route path='details/:repo_name' component={RepoDetails}/>
      </Route>
    </div>
  </Router>
), document.getElementById('root'));

export default App;
