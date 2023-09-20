import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

const isEmailValid = (email) => {
  // Use a regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
`;

const ErrorMessage = styled.p`
  color: #ff5722;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const LoginButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    if (!isEmailValid(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/gallery");
      })
      .catch((error) => {
        console.log(error);
        setEmailError("Authentication failed");
      });
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <ErrorMessage style={{color: '#ff5722', fontSize: '0.9re', marginTop: '0.5rem',
  fontWeight: 'bold'}}>{emailError}</ErrorMessage>}

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <LoginButton type="submit">Log In</LoginButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default Login;
