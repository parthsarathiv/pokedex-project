import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from './Page';
import Home from './Home';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon_list: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964");
    this.setState({ pokemon_list: res.data['results'].map(pokemon => pokemon.name)});
  }

    render() {
      const routes = [];
      let list = this.state.pokemon_list;
      list.forEach((item, i) => {
        routes.push(
          <Route key = {i} path={'/'+item} render={(props) => <Page name = {item}/>} />
        );
      });
      routes.push(
        <Route key = {100} exact path='/' render={(props) => <Home pokemon_list = {this.state.pokemon_list}/>} />
      );
      return(
        <Router>
          <div>
            <Home pokemon_list = {this.state.pokemon_list}/>
            <Switch>
              {routes}
            </Switch>
          </div>
        </Router>
      );
    }
}


export default App;
