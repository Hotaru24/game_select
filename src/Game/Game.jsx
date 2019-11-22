import React from 'react';
import {Link} from 'react-router-dom';
import  './Game.css'

const Game = (props) =>  {

  return(
      <div className="GameCard">
        <div>
          <img className="GamePictures" src={props.game.background_image}  alt={props.game.name} />
        </div>

        <div>
          <h2>{props.game.name}</h2>
          <p>Date : {props.game.released} | Grenre : {props.game.genres[0].name}</p>
          <h3>Note : {props.game.rating}</h3>
        </div>
        <Link to={{
          pathname :`/jeu/screenshots/${props.game.id}`,
          state : {
            screenshots : props.game.short_screenshots
          }}}>
           <button>Screenshots</button> 
          </Link>
      </div>
    )
  
};

export default Game;