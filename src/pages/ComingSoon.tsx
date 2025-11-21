import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>QETHING</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Coming Soon</p>

      {/* Login Button */}
      <Link
        to="/preview"
        style={{
          padding: "12px 24px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Publisher Login
      </Link>
    </div>
  );
}
