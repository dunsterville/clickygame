import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
// import ImageCard from '../../components/ImageCard'
import { Card } from 'react-bootstrap'

const GameBoard = (props) => {
  let teamCards = props.teamData.map(team => {
    return (
      <Col sm="4" >
        <Card   style={{justifyContent: 'center',alignItems: 'center', width: '18rem' }}>
          <Card.Body>
            <img height="200px" width="auto" position="center" src={team.image} />
          </Card.Body>
        </Card>
      </Col>
    )
  })
  return (
    <Container>
      <Row>
        {teamCards}
        <br/>
      </Row>
    </Container>
  )
}

export default GameBoard