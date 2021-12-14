import React, {Component} from "react";

import { Jumbotron, Button, Container} from 'react-bootstrap'

class Welcome extends Component{
    state = {}

    
    render(){
        return(
            <div>
                          

                          <Jumbotron>
      <h1>Welcome to the Strive Library</h1>
     
  
      <p>
        <Button variant="primary">
         Enter... or Not :)
        </Button>
      </p>
    </Jumbotron>
    


            </div>
            )
        }
    }

    export default Welcome
