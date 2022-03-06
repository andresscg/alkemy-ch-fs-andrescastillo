import React, { useState } from "react";
import { Form, Input, Label } from "./LoginFormStyles";
import userActions from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(user).some((value) => value === "")) {
      alert("Please fill all fields");
    } else {
      dispatch(userActions.signIn(user)).then((res) => {
        if (res.success) {
          navigate("/");
        } else {
          alert(res.response);
        }
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email:</Label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        required
        title="Please enter your email"
      />
      <Label htmlFor="password">Password:</Label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        required
        pattern=".{8,16}"
      />
      <Input type="submit" value="Login" />
    </Form>
  );
};

export default LoginForm;
