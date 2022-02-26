import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../js/action/authAction";
import "../css/Register.css"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser({ name, phone, email, password }));
  };

  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );

  return (
    <div>
      {isLoading ? (
        <h1>Loding ...</h1>
      ) : isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <Form onSubmit={(e)=>e.preventDefault()} className="col-md-7" >
          {error && error.id === "register" && (
            <Alert variant="danger">{error && error.msg}</Alert>
          )}
          <div className="register">
      <span className="registerTitle">Register</span>
      
        <label>name</label>
        <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
        <label>Email</label>
        <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        <label>Password</label>
        <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
        <label>phone</label>
        <Form.Control
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
        <button onClick={handleSubmit} className="registerButton" type="submit">Register</button>
    
    </div>
          <Link to="/login">Login </Link>
        </Form>
      )}
    </div>
  );
};

export default Register;