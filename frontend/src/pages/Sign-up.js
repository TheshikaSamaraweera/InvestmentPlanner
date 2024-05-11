import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const SignUp = () => {
  const {setIsAuthenticated} = useGlobalContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");

  const handleSignUp = () => {
    // Simulate sign-up logic
    if (username && email && password) {
      // Simulate sending data to a server
      setSignUpMessage(`Sign up successful! Welcome, ${username}!`);

      // Clear input fields after sign-up
      setUsername("");
      setEmail("");
      setPassword("");
      setIsAuthenticated(true);
      navigate("/Dashboard");
    } else {
      setSignUpMessage("Please fill out all fields.");
    }
  };

  //new comment

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="username" style={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="button" onClick={handleSignUp} style={styles.button}>
          Sign Up
        </button>
      </form>

      {signUpMessage && <p style={styles.signUpMessage}>{signUpMessage}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px",
    padding: "100px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "3px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  signUpMessage: {
    marginTop: "10px",
    textAlign: "center",
    color: "green",
  },
};

export default SignUp;
