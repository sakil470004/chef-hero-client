import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photoUrl,email,password)
        
    }
    return (
        <div className="mt-5">
            <div className="row justify-content-center " style={{ minHeight:'60vh'}}>
                <div className="col-md-5 border border-danger rounded-3 p-4 my-auto">
                    <Form onSubmit={handleSubmit}>
                        <h3 className='text-center mb-4'>Login From</h3>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' required type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Password" />
                        </Form.Group>

                        <Button className='mt-3 w-100' type="submit" variant="outline-danger">Login</Button>
                        <p className='mt-2'>New In Here ? <Link to={'/register'}>Register</Link></p>

                        <div className="mt-3">
                            <Button className='w-100 mb-2' variant="danger" >
                                Login with Google
                            </Button>

                            <Button className='w-100 mb-2' variant="warning" >
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