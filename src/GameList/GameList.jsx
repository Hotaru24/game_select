import React, {Fragment} from 'react';
import axios from 'axios'
import Game from '../Game/Game';
import { thisExpression } from '@babel/types';

class GameList extends React.Component {
  constructor(props){
   super(props)
   this.state ={
     gameList : []
    }
  };

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
          {this.state.gameList.map(
            game => {
              return (<Game  game={game}/>)
            }
          )}
      </Fragment>)
  };
};

export default GameList;