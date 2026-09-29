import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./config";

function Login({ onLogin }) {
  const [wardName, setWardName] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wardName, pin }),
      });
      const result = await res.json();

      if (result.success) {
        onLogin({ token: result.token, ward: result.ward });
        navigate("/dashboard");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="login-section">
      <div className="container login-container">
        <div className="login-card">
          <p className="eyebrow eyebrow--center">Parent Portal</p>
          <h1>Access your child's account</h1>
          <p className="login-sub">
            Enter your ward's full name and the unique PIN provided by the
            school.
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="wardName">Ward's full name</label>
            <input
              id="wardName"
              type="text"
              value={wardName}
              onChange={(e) => setWardName(e.target.value)}
              placeholder="e.g. Kojo Mensah"
              required
            />

            <label htmlFor="pin">PIN</label>
            <input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="4-digit PIN"
              required
            />

            {error && <p className="login-error">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={loading}
            >
              {loading ? "Logging in…" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
