"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add Supabase login logic here
    // If successful: redirect to /profile
    // If error: setError("Login failed. Please check your credentials.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b" }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>
          LOGIN<br />
          <span>Welcome back!</span>
        </div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
          placeholder="Email"
        />
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={styles.input}
            placeholder="Password"
            style={{ paddingRight: "2.5rem" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#ccc" }}
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IoEyeOff size={22} /> : <IoEye size={22} />}
          </button>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "10px", color: "#ccc", fontFamily: "Lora, serif" }}>
            Don't have an account? <a href="/register" style={{ color: "#F5B727", textDecoration: "underline", fontWeight: 600 }}>REGISTER !</a>
        </div>
  {/* ...logos removed... */}
        {error && <p style={{ color: "#e74c3c", textAlign: "center" }}>{error}</p>}
        <button type="submit" className={styles["button-confirm"]}>Login</button>
      </form>
    </div>
  );
}
