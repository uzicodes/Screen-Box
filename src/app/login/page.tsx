"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message || "Login failed. Please check your Credentials.");
    } else {
      window.location.href = "/profile";
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b", position: "relative" }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '14%', left: 0, zIndex: 2 }}>
        <a href="/" style={{ color: '#F5B727', background: 'none', borderRadius: '50%', padding: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} title="Home">
          <GoHome size={30} />
        </a>
      </div>
      <img
        src="/gradient_login.png"
        alt="Background Gradient"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <form className={styles.form} onSubmit={handleSubmit} style={{ position: "relative", zIndex: 1 }}>
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
          style={{ paddingRight: "2.5rem" }}
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
        <div style={{ width: "100%", textAlign: "center", marginTop: "6px" }}>
          <a href="/forgotpassword" style={{ color: "#F5B727", textDecoration: "underline", fontWeight: 600, fontFamily: "Lora, serif", fontSize: "0.92rem" }}>Forgot password?</a>
        </div>
        {/* ...logos removed... */}
        {error && <p style={{ color: "#e74c3c", textAlign: "center" }}>{error}</p>}
  <button type="submit" className={styles["button-confirm"]} style={{ marginTop: "1px" }}>Login</button>
      </form>
    </div>
  );
}
