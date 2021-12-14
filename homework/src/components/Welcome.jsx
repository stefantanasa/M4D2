import React, {Component} from "react";

import { Jumbotron, Button , Container} from 'react-bootstrap'

class Welcome extends Component{
    state = {}

    
    render(){
        return(
    <Container>
                
      <Jumbotron>
        <h1>Welcome to the Strive Library</h1>
      
        <p>
          <Button variant="primary">
          Enter... or Not :)
          </Button>
        </p>
      </Jumbotron>
    
      

  </Container>
            )
        }
    }

    export default Welcome
