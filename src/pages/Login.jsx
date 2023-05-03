import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="mt-5">
          <div className="row justify-content-center " style={{height:'60vh'}}>
            <div className="col-md-5 border border-danger rounded-3 py-4 my-auto">
              <Form >
              <h3 className='text-center mb-4'>Login From</h3>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
    
                <Form.Group className='mt-3' controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    
                <Button className='mt-3 w-100' variant="primary" type="submit">
                  Login
                </Button>
                
                <div className="mt-3">
                  <Button className='w-100 mb-2' variant="danger" href="#">
                    Login with Google
                  </Button>{' '}
                  <br />
                  <Button className='w-100 mb-2' variant="dark" href="#">
                    Login with GitHub
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      );
    
};

export default Login;