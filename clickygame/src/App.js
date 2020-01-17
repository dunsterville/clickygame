import React, {Component} from 'react';
import Jumbotron1 from './components/Jumbotron1'
import GameBoard from './components/GameBoard'
import teamData from './data/teamData.json'

class App extends Component {
  
state = {
  teamData : teamData,
  score: 0,
  topScore: 0
}

componentDidMount() {
  this.setState({
    teamData: this.shuffleTeams(this.state.teamData)
  })
}
  
shuffleTeams = teamData => {
  const shuffledTeamsList = teamData.sort(() => (0.5 - Math.random()));
  return shuffledTeamsList;
}

handleAlreadyGuessed = newTeamList => {
  
  const resetTeamList = newTeamList.map(team => {
    team.clicked = false
    return team
  })

  this.setState({
    teamData: this.shuffleTeams(resetTeamList),
    score: 0
  })
}

handleNotGuessed = newTeamList => {
  const {score, topScore} = this.state
 
  const newScore = score + 1

  const newtopScore = (newScore > topScore) ? newScore: topScore

  this.setState({
    teamData : this.shuffleTeams(newTeamList),
    score: newScore,
    topScore: newtopScore

  })
}

handleClick = id => {

  let alreadyGuessed = false
  console.log(this.state.teamData)
  let newTeamList = this.state.teamData.map(team => {
    if (team.id === id) {
      console.log(team.id)
      if(!team.clicked){
        team.clicked = true
        alreadyGuessed = true
      } 
    } 
    return team
  })

  alreadyGuessed ? this.handleNotGuessed(newTeamList) : this.handleAlreadyGuessed(newTeamList)

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
