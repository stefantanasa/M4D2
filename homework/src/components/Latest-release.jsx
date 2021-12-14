import React, {Component} from "react";
import books from "../horror.json"
import {Card, Button, Row, Container } from 'react-bootstrap'

class LatestReleases extends Component{
    state = {}

    
    render(){
        return(
          <Container>
          <Row >
            <h1>
              Latest Released
            </h1>
          </Row>
          <Row className="justify-content-between">
              {books.map(book => (

              <Card className= "bg-light my-2" key={book.asin} style={{ width: '14rem'} }>
                  <Card.Img variant="top" style= { {height: `18rem`, overflow: `hidden`, fit: `contain`}} src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Button variant="warning">${book.price}</Button>
                    <Button  variant="danger">Buy it now </Button>
                  </Card.Body>
                </Card>

              ))}

            </Row>
            
            </Container>
            )
        }
    }

    export default LatestReleases
