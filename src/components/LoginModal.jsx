import { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ mode = "login", onClose, onModeChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: dispatch to authSlice / call /api/auth/login or /register
    console.log(mode, { email, password });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{mode === "login" ? "Sign in" : "Create an account"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="modal-submit">
            {mode === "login" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <p className="modal-switch">
          {mode === "login" ? "No account yet?" : "Already have an account?"}{" "}
          <button onClick={() => onModeChange(mode === "login" ? "register" : "login")}>
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}