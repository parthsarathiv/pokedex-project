import React from 'react';
import SearchAppBar from './components/NavBar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pokemon: "";
    };
  }

  render(){
    return (
      <div className = "container">
        <SearchAppBar handler = {this.searchHandler}/>
      </div>
    );
  }

}


export default App;
