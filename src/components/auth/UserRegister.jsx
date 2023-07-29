import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions/loginUser";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg"

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "white",
};
const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imagePrev, setImagePrev] = useState(avatar);
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    dispatch(userRegister(myForm));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img src={imagePrev} alt="img" style={{width:400,borderRadius:10}}  />
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="*name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <label htmlFor="choose Avatar">Choose Avatar</label>
        <input
          type="file"
          accept="image/*"
          required
          css={fileUploadStyle}
          onChange={changeImageHandler}
        />
        <button type="submit">Login</button>
        <p>Already have an account? </p>
        <Link to="/login">Sign in</Link>
      </form>
    </div>
  );
};

export default UserRegister;
