import React from 'react';

const Page404 = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center p-4 m-4">
          <img
            src="https://cdn.pixabay.com/photo/2018/06/23/04/01/404-error-3490191_960_720.png"
            alt="Page not found"
            className="img-fluid mb-4"
            style={{ maxWidth: "400px" }}
          />
          <h2 className="mb-4">Oops! Page not found</h2>
          <p className="lead">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          < href="/" className="btn btn-lg btn-primary">
            Go back to homepage
          </>
        </div>
      </div>
    );
};

export default Page404;