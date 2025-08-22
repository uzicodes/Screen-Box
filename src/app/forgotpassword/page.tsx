"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/resetpassword`,
    });
    if (error) {
      setError(error.message || "Failed to send reset email.");
    } else {
      setMessage("Password reset email sent! Please check your inbox.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "2rem", borderRadius: "1rem", boxShadow: "0 2px 16px #0002", minWidth: 320 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#18181b" }}>Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ width: "100%", padding: "0.75rem", background: "#F5B727", color: "#18181b", border: "none", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer" }}>
          Send Reset Link
        </button>
        {message && <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>{message}</p>}
        {error && <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
}
