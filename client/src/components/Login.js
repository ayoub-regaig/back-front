import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import {  Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../js/action/authAction";
import "../css/Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );

  return (
    <div>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <Form className="col-md-7" onSubmit={handleSubmit}>
          {error && error.id === "login" && (
            <Alert variant="danger">{error && error.msg}</Alert>
          )}
          <div className="login">
      <span className="loginTitle">Login</span>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        <label>Password</label>
        <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
        <button className="loginButton">Login</button>
         </div>
        </Form>
      )}
    </div>
  );
};

export default Login;