"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { supabase } from "../../utils/supabaseClient";
import { GoHome } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import styles from "../login/login.module.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/profile`,
      },
    });
    if (error) {
      setError(error.message || "Registration failed. Please check your details.");
    } else {
      setSuccess("Registration successful! Please check your email to verify your account. Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b", position: "relative" }}>
      <img
        src="/gradient_register.png"
        alt="Background Gradient"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '14%', left: 0, zIndex: 2 }}>
        <a href="/" style={{ color: '#F5B727', background: 'none', borderRadius: '50%', padding: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} title="Home">
          <GoHome size={30} />
        </a>
      </div>
  <form className={styles.form} onSubmit={handleSubmit} style={{ position: "relative", zIndex: 1 }}>
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
  {error && <p style={{ color: "#e74c3c", textAlign: "center" }}>{error}</p>}
  {success && <p style={{ color: "#27ae60", textAlign: "center" }}>{success}</p>}
  <button type="submit" className={styles["button-confirm"]} style={{ marginTop: "20px" }}>Register</button>
      </form>
    </div>
  );
}
