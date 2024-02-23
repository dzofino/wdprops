import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Cards = (props) => {
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgsrc} />
    <Card.Body>
      <Card.Title>Shoes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{props.brand} </ListGroup.Item>
      <ListGroup.Item>{props.prix} </ListGroup.Item>
      <ListGroup.Item> {props.Taille} </ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Cards