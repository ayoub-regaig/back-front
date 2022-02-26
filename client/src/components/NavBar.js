import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../js/action/authAction";
import "../css/NavBar.css";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="top">
      <div className="topLeft">
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="topRight">
        
         
        
          <ul className="topList">
            <li className="topListItem">
            {isAuth ? (
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        ) : null}
        {isAuth ? (
          <Link
            to="/"
            className="nav-link"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
            </li>
            
            <li className="topListItem" >
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>

          </ul>
        
      </div>
    </div>
  );
}
export default NavBar;