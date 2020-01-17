import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'


const Jumbotron1 = _ => {
  return (
<Jumbotron fluid>
  <Container>
    <h1>Clicky Game </h1>
    <br/>
    <h5>
    Click on an image to earn points, but don't click on any image more than once!
    </h5>
    <br/>
    <h3>
      Score: 0 | Top Score: 0
    </h3>
  </Container>
</Jumbotron>
  
  )
}

export default Jumbotron1