import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
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
        <h1>HOME</h1>
      </div>
    );
  }
}

export default Home;
