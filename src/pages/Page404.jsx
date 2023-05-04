import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center p-4 m-4">
                <img
                    src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Page not found"
                    className="img-fluid mb-4"
                    style={{ maxWidth: "400px" }}
                />
                <h2 className="mb-4">Oops! Page not found</h2>
                <p className="lead">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <Link to={'/'} className="btn btn-lg btn-primary">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Page404;