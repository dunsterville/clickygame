import React, {Component} from 'react';
import Jumbotron1 from './components/Jumbotron1'
import GameBoard from './components/GameBoard'
import teamData from './data/teamData.json'

class App extends Component {
  
state = {
  teamData : teamData,
  score: '',
  topScore: '',
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
  console.log(event.target.id)
}
  

  render () {
    return(
    <div>
    <Jumbotron1 score={this.state.score} topScore={this.state.score}/>
    <GameBoard teamData = {this.state.teamData}
    />
    
  </div>
    )
  }
}

export default App
