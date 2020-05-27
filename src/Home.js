import React from 'react';
import SearchAppBar from './components/NavBar'
import NestedGrid from './components/Grid'
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchval: "",
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e){
    this.setState(
      {searchval: e.target.value}
    );
  }

  render(){
    return (
          <div className = "container">
            <SearchAppBar handler = {this.searchHandler}/>
            <div style ={{marginTop: '3%', paddingLeft: '5%',}}>
              <NestedGrid pokemons = {this.props.pokemon_list} searchval = {this.state.searchval}/>
            </div>
          </div>
    );
  }

}


export default Home;
