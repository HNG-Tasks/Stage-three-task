import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const InputField = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("Registration error:", error);
      });
  };

  const linkStyle = {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.5rem",
    marginTop: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "5px",
  };
  return (
    <SignupContainer>
      <SignupForm onSubmit={handleRegistration}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </SignupForm>

      <Link to="/login" style={linkStyle}>
        Log in
      </Link>
    </SignupContainer>
  );
};

export default Signup;
