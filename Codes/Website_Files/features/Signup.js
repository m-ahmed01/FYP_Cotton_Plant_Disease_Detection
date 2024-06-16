import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export default function SignUp() {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();


  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register', {name, email, password}
    ).then(result => {console.log(result)
  navigate("/login");
  setName(' ');
        setEmail(' ');
        setPassword(' ');
  }).catch(err=> console.log(err))
  }

  return (
    <div >
      <Container>
        <Row className=" d-flex justify-content-center align-items-center" style={{marginTop:"8%"}}>
          <Col md={8} lg={4} xs={12}>
            <div className="border border-3 border-success"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Disease Detector</h2>
                  <p className=" mb-5">Please enter your Details for SignUp!!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>

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
                        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >

                      </Form.Group>
                      {/* <Link to="/"> */}
                      <div className="d-grid mt-5">
                        <Button variant="success" type="submit">
                          SignUp
                        </Button>
                      </div>
                      {/* </Link> */}
                    </Form>
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
