import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
   
   <>
   <Navbar bg="primary" data-bs-theme="dark"   style={{zIndex:'1',width:"100%", position:"fixed", margin:"0"}} >
        <Container>
          <Link to={'/'} style={{textDecoration:"none", color:"white"}} ><Navbar.Brand  href="#home">Food Circle</Navbar.Brand></Link>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Enter the search location"
              className=" mr-sm-2"
            onChange={(e)=>dispatch(search(e.target.value))}
            />
          </Col>
          
        </Row>
      </Form>
          <img src="https://cdn-icons-png.freepik.com/512/8280/8280802.png" height="60px" width="60px" alt="" />
        </Container>
      </Navbar>
   </>
  )
}

export default Header