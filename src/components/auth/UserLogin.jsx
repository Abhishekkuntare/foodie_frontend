import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/loginUser";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          type="email"
          placeholder="*email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          value={password}
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>New User ? </p>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default UserLogin;
