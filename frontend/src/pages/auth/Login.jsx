import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import styles from "../../css/pages/auth/Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();
  const loginBtn = useRef();
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="text"
          className={styles.username + " " + styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className={styles.passwordContainer}>
          <input
            type={passwordVisible ? "text" : "password"}
            className={styles.password + " " + styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={styles.eye}
            onClick={() => setPasswordVisible((x) => !x)}
          >
            {passwordVisible ? (
              <MdOutlineVisibilityOff />
            ) : (
              <MdOutlineVisibility />
            )}
          </div>
        </div>
        <p
          style={{
            width: "90%",
            marginTop: 5,
            color: "var(--alert)",
            fontSize: "15px",
          }}
        >
          {error}
        </p>
        <p style={{ marginTop: 10 }}>
          Don't have an account?{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "var(--primary)",
              cursor: "pointer",
            }}
            onClick={() => nav("/register")}
          >
            Register
          </span>
        </p>
        <button
          ref={loginBtn}
          className={styles.login}
          onClick={() => {
            if (username === "" || password === "")
              setError("You cannot leave any fields empty");
            else{
              loginBtn.current.disabled = true
              //send data
              console.log("asdfasf");
            }
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}
