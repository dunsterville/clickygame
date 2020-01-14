import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import ImageCard from '../../components/ImageCard'

const GameBoard = (props) => {
    console.log
  return (
<Container>

<Row>
    <Col sm>
        <ImageCard/>
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
  </Row>



  <Row>
    <Col sm>
        <ImageCard/>
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
  </Row>


  <Row>
    <Col sm>
        <ImageCard/>    
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
    <Col sm>
        <ImageCard/>
    </Col>
  </Row>

</Container>
  )
}

export default GameBoard