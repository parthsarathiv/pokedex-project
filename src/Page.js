import React from 'react';
import SearchAppBar from './components/NavBarTwo';
import APICard from './components/APICard';
import './Page.css';

class Page extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pokemon: this.props.name,
    };
  }

  render(){
    return (
      <div className = "container">
        <SearchAppBar handler = {this.searchHandler}/>
        <div style ={{maxWidth: '500px', margin: '3% auto'}}>
          <APICard  pokemon = {this.state.pokemon}/>
        </div>
      </div>
    );
  }

}


export default Page;
