import React, {Component} from "react";

import { Navbar, Nav } from 'react-bootstrap'

class MyNavbar extends Component{
    state = {}

    
    render(){
        return(
            <div>
                          

  <Navbar bg="primary" variant="light">
    
    <Navbar.Brand href="#home">Homework</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
  </Navbar>


            </div>
            )
        }
    }

    export default MyNavbar
