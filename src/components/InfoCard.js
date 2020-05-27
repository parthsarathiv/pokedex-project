import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: '40vh',
    maxWidth: '90%',
    margin: 'auto',
    objectFit: 'contain'
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className = {classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={"https://img.pokemondb.net/artwork/large/" + props.pokemon + ".jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pokemon}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>HP: {props.stats.hp}</p>
            <p>Defense: {props.stats.defence}</p>
            <p>Speed: {props.stats.speed}</p>
            <p>Attack: {props.stats.attack}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
