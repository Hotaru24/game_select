import React from 'react';
import {Link} from 'react-router-dom';
import  './Game.css'

class Game extends React.Component  {


  render () {
    return(
      <div className="GameCard">
        <div>
          <img className="GamePictures" src={this.props.game.background_image} />
        </div>

        <div>
          <h2>{this.props.game.name}</h2>
          <p>Date : {this.props.game.released} | Grenre : {this.props.game.genres[0].name}</p>
          <h3>Note : {this.props.game.rating}</h3>
        </div>
        <Link to={{
          pathname :`/jeu/screenshots/${this.props.game.id}`,
          state : {
            screenshots : this.props.game.short_screenshots
          }}}>
           <button>Screenshots</button> 
          </Link>
      </div>
    )
  };
};

export default Game;