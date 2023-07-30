import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/loginUser";
import { Link } from "react-router-dom";
import "../../styles/user_login.css";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <div className="user_login">
      <video
        className="user_login_video"
        src="v1.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="user_login_right">
        <h1>Sign in</h1>
        <p>
          New User ? {""}
          <Link style={{ color: "blue" }} to="/register">
            Register
          </Link>
        </p>

        <form className="user_login_form" onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            required
            value={email}
            type="email"
            placeholder="abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            required
            value={password}
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
