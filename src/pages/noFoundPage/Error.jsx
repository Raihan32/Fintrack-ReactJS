import React from "react";
import noPage from "../../assets/404ErrorPagenotFound.svg";

const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className="col-md-6">
          <img
            src={noPage}
            alt="no Page 404"
            className="img-fluid w-100 h-100"
          />
        </div>
        <div className="col-md-6 mt-5">
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
