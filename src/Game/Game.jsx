import React from 'react';
import {Link} from 'react-router-dom';
import  './Game.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Game = (props) =>  {

  return(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="GamePictures" src={props.game.background_image}  alt={props.game.name}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.game.name}</h5>
            <p className="card-text">Date : {props.game.released} | Grenre : {props.game.genres[0].name}</p>
            <h3 className="card-text">Note : {props.game.rating} <Link to={{
              pathname :'/screenshots',
              state : {
                screenshots : props.game.short_screenshots
              }}}>
              <button>Screenshots</button> 
              </Link></h3>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Game;
