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
render((
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/repos' component={Repos}>
        <Route path='details/:repo_name' component={RepoDetails}/>
      </Route>
    </div>
  </Router>
), document.getElementById('root'));

export default App;
