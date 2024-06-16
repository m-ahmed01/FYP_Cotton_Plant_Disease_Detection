

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";



export default function Login(children) {
 
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [name,setName] = useState();
  const navigate = useNavigate();


  const handleSubmitLogin =(e)=>{
    e.preventDefault()

    axios.post('http://localhost:5000/login', {name, email, password} ).then(result => {
      console.log("Login: ",result)
    
      if(result.data === "Success"){
        console.log("Login Successful")
        console.log("Email: ",email)
        console.log("Name: ",name)
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);

        setEmail(' ');
        setPassword(' ');
      }else {
        console.log("Login failed");
      }
        
  }).catch(err=> console.log(err));
  }

  return (
    <div >
      <Container>
        <Row className=" d-flex justify-content-center align-items-center" style={{marginTop:"6%"}}>
          <Col md={8} lg={4} xs={12}>
            <div className="border border-3 border-success"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Disease Detector</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmitLogin}>

                    <Form.Group className="mb-3" >
                        <Form.Label className="text-center" required type="String">
                          Name
                        </Form.Label>
                        <Form.Control type="String" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)}/>
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >

                      </Form.Group>
                      <div className="d-grid mt-5">
                        <Button variant="success" type="submit">
                          Login
                        </Button>
                      </div>

                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
