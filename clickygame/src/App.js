import React, {Component} from 'react';
import Jumbotron1 from './components/Jumbotron1'
import GameBoard from './components/GameBoard'
import teamData from './data/teamData.json'

class App extends Component {
  
state = {
  teamData : teamData,
  score: '',
  topScore: ''
}

componentDidMount() {
  this.setState({
    friendsData: this.shuffleFriends(this.state.teamData)
  })
}
  
shuffleFriends = teamData => {
  const shuffledFriendsList = teamData.sort(() => (0.5 - Math.random()));
  return shuffledFriendsList;
}

handleClick = event => {
  let newFriendList = 
}
  

  render () {
    return(
    <div>
    <Jumbotron1 score={this.state.score} topScore={this.state.topScore}/>
    <GameBoard teamData={this.state.teamData} handleClick={this.handleClick} />
    
  </div>
    )
  }
}

export default App
