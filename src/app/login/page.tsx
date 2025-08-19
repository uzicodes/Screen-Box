"use client";
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
          Login<br />
          <span>Welcome back! Please login to your account.</span>
        </div>
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
        <div className={styles["login-with"]}>
          <button type="button" className={styles["button-log"]}>
            <svg className={styles.icon} viewBox="0 0 24 24"><path d="M21.35 11.1H12v2.8h5.35c-.23 1.17-1.4 3.43-5.35 3.43-3.23 0-5.88-2.68-5.88-5.98s2.65-5.98 5.88-5.98c1.84 0 3.07.79 3.77 1.47l2.58-2.51C17.07 3.99 14.87 3 12 3 6.48 3 2 7.48 2 13s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.68-.07-1.34-.2-1.9z"/></svg>
          </button>
          <button type="button" className={styles["button-log"]}>
            <svg className={styles.icon} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.87 8.82 8.65 9.75v-6.9H8.9v-2.85h1.75V9.7c0-1.73 1.04-2.68 2.62-2.68.76 0 1.56.13 1.56.13v1.72h-.88c-.87 0-1.14.54-1.14 1.09v1.31h2.1l-.34 2.85h-1.76v6.9C18.13 20.82 22 16.84 22 12c0-5.52-4.48-10-10-10z"/></svg>
          </button>
        </div>
        {error && <p style={{ color: "#e74c3c", textAlign: "center" }}>{error}</p>}
        <button type="submit" className={styles["button-confirm"]}>Login</button>
      </form>
    </div>
  );
}
