import React from 'react';
import InfoCard from './InfoCard';
import axios from 'axios';


class APICard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      stats: {
        hp: '',
        attack: '',
        defence: '',
        speed: '',
      },
    };
  }

  async componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + this.props.pokemon + '/';
    await axios.get(
      url
    ).then(
      res => {
        this.setState({items: res.data.stats, isLoaded: true});
      }
    );

    let hp_ = 0;
    let attack_ = 0;
    let defence_ = 0;
    let speed_ = 0;


    this.state.items.map(
      stat => {
        switch(stat.stat.name) {
          case 'hp':
            hp_ = stat.base_stat;
            break;
          case 'attack':
            attack_ = stat.base_stat;
            break;
          case 'defense':
            defence_ = stat.base_stat;
            break;
          case 'speed':
            speed_ = stat.base_stat;
            break;
          default:
            hp_ = 100;
            break;
        }
      }
    );

    this.setState (
      {stats :{hp:hp_, attack: attack_, defence: defence_, speed: speed_}}
    );
  }

  render(){
    return (
      <InfoCard pokemon = {this.props.pokemon} stats = {this.state.stats}/>
    );
  }

}


export default APICard;
