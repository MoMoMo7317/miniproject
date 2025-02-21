import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { fullName, email, password });
      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("❌ Error registering. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fallingStarAnimation {
          0% { transform: translateY(-100vh) scale(0.5); opacity: 1; }
          100% { transform: translateY(100vh) scale(1.5); opacity: 0; }
        }
        
        .falling-star {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #ffffff; /* สีขาว */
          border-radius: 50%;
          animation: fallingStarAnimation 3s linear infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
        }
        `}
      </style>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="falling-star" style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 2}s`,
        }}></div>
      ))}
      <motion.div
        style={styles.registerBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(-45deg, #FFB6C1, #FF99CC, #FFC0CB, #FF66B2, #FF99CC)", // สีชมพูพาสเทล
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  registerBox: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.8)", // ความใสของพื้นหลัง
    padding: "3rem",
    borderRadius: "30px", // ทำมุมกลมให้ดูนุ่มนวล
    boxShadow: "0 4px 20px rgba(255, 182, 193, 0.6)", // เงาสีชมพูอ่อน
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#ff66b2", // สีชมพูสดใส
    fontSize: "2.5rem", // ขนาดฟอนต์ที่ดูใหญ่และน่ารัก
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textShadow: "0px 0px 10px rgba(255, 105, 180, 0.5)", // เงาของข้อความ
  },
  inputContainer: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "15px", // ขอบมนมากขึ้น
    border: "none",
    backgroundColor: "#FFE0F2", // พื้นหลังสีชมพูอ่อน
    color: "#5f5a5a", // ตัวอักษรสีเทาอ่อน
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "30px", // ปุ่มมนมากขึ้น
    border: "none",
    backgroundColor: "#FF66B2", // สีชมพูสดใส
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 15px rgba(255, 105, 180, 0.5)", // เงาสีชมพู
  },
};

export default Register;
