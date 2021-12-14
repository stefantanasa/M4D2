import React, {Component} from "react";
import books from "../horror.json"
import {Card, Button, Container} from 'react-bootstrap'

class LatestReleases extends Component{
    state = {}

    
    render(){
        return(
            <div class="container">
              <div class="row">
             {
               books.map(book =>(
                 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.category,book.price}
    </Card.Text>
    <Button variant="primary">Buy it for ${book.price}</Button>
  </Card.Body>
</Card>

               ))
             }
  </div>
            </div>
            )
        }
    }

    export default LatestReleases
