import React, {Component} from 'react';
import Jumbotron1 from './components/Jumbotron1'
import GameBoard from './components/GameBoard'
import friendsData from './data/friendsData.json'

class App extends Component {
  
state = {
  friendsData : friendsData,
  score: '',
  topScore: '',

}

componentDidMount() {
  this.setState({
    friendsData: this.shuffleFriends(this.state.friendsData)
  })
}
  
shuffleFriends = friendsData => {
  const shuffledFriendsList = friendsData.sort(() => (0.5 - Math.random()));
  return shuffledFriendsList;
}

  

  render () {
    return(
    <div>
    <Jumbotron1/>
    <GameBoard friendsData = {this.state.friendsData}
    />
    
  </div>
    )
  }
}

export default App
