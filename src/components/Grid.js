import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from '../Page'
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maingrid: {
    overflowY: 'auto',
    height: '87vh',
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const pokemon_list = props.pokemons;
  const cards = [];

  pokemon_list.forEach((item, i) => {
    if (item.indexOf(props.searchval) === -1) {
        return;
    }
    cards.push(
      <Grid key = {i} item xs={12} sm={6} lg = {4}>
        <Link to={'/' + item}>
          <Card name = {item.charAt(0).toUpperCase() + item.slice(1)} url = {'https://img.pokemondb.net/artwork/large/' + item + '.jpg'}/>
        </Link>
      </Grid>
    );
  });
  return (
      <div className={classes.root}>
        <Grid container spacing={5} alignItems="center" justify="center" className = {classes.maingrid}>
          {cards}
        </Grid>
      </div>
  );
}
