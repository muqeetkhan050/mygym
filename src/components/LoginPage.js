import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>PocketGym</h1>
  
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <div style={styles.buttonGroup}>
          <button onClick={login} style={styles.button}>Login</button>
          <button onClick={register} style={styles.button}>Register</button>
        </div>
        <hr style={{ width: "80%", margin: "20px auto" }} />
        <button onClick={googleLogin} style={styles.googleButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #e0eafc, #cfdef3)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "320px",
  },
  heading: {
    fontSize: "32px",
    color: "#0077b6",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#0077b6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  googleButton: {
    padding: "10px",
    backgroundColor: "#DB4437",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
  },
};

export default LoginPage;
