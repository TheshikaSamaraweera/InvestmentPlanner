import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const SignIn = ({}) => {
  const { setIsAuthenticated } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setIsAuthenticated(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Sign In
        </button>

        <Link to="/Sign-up">
          <p>Don't have an account? Sign Up</p>
        </Link>
      </form>
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
    marginBottom: "10px",
  },
  label: {
    marginBottom: "5px",
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
};

export default SignIn;
