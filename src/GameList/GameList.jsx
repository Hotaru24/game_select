import React, {Fragment} from 'react';
import axios from 'axios'
import Game from '../Game/Game';
import { thisExpression } from '@babel/types';

class GameList extends React.Component {
  constructor(props){
   super(props)
   this.state ={
     gameList : [],
     banGamesId : [],
     filterd: false
    }
  };
  
  deleteGame = (id) => {
    this.setState({
      banGamesId : [...this.state.banGamesId, id]
    })
  };

  toogleFilter = () => {
      this.setState({
      filterd : !this.state.filterd
    })
  }

  componentDidMount () {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then((result) => {
      this.setState({gameList : result.data})
      console.log(result.data)
    })
  };

  render (){
    return (
      <Fragment>
        <button onClick={this.toogleFilter}>Best Game</button>
          {this.state.gameList
          .filter(game => !this.state.banGamesId.includes(game.id))
          .filter(game => !this.state.filterd || game.rating >= 4.5)
          .map(
            (game, index) => {
              return (
                <div key={index}> 
                  <Game  game={game}/>
                  <button onClick={() => this.deleteGame(game.id)}> Delete</button>
                </div>
              )
          })}
      </Fragment>)
  };
};

export default GameList;