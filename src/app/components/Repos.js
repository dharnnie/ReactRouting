import React from 'react';
import 'whatwg-fetch';

class Repos extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      repositories:[]
    };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/pro-react/repos')
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({repositories:responseData});
    });
  }
  render(){
    let repos = this.state.repositories.map((repo)=>(
      <li key={repo.id}>
        <Link to={"/repos/details/"+repo.name} >{repo.name}</Link>
      </li>
    ));
    return(
      <div>
        <h1>REPOS</h1>
        <ul>
          {repos}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Repos;
