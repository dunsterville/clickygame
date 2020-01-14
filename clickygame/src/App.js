import React, {Component} from 'react';
import Jumbotron1 from './components/Jumbotron1'
import GameBoard from './components/GameBoard'
import images from '../../Images/index.js'


class App extends Component {
  
  
  render () {
    return(
    <div>
    <Jumbotron1/>
    <GameBoard>
    
    </GameBoard>
  </div>
    )
  }
}

export default App
