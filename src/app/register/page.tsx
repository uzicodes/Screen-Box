"use client";
import { useState } from "react";
import styles from "../login/login.module.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add Supabase register logic here
    // If successful: redirect to /profile
    // If error: setError("Registration failed. Please check your details.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b" }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <span style={{ display: "block", fontSize: "2rem", fontWeight: 700 }}>REGISTER</span>
          <span style={{ display: "block", fontSize: "1.2rem", fontWeight: 400, marginTop: "0.5rem" }}>Create your account</span>
        </div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className={styles.input}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={styles.input}
          placeholder="Password"
        />
        {error && <p style={{ color: "#e74c3c", textAlign: "center" }}>{error}</p>}
        <button type="submit" className={styles["button-confirm"]}>Register</button>
      </form>
    </div>
  );
}
