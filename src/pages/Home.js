import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home() {
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
      {[...Array(15)].map((_, i) => (
        <div key={i} className="falling-star" style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 4}s`,
        }}></div>
      ))}
      <motion.div
        style={styles.homeBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>Welcome to MyShop</h1>
        <p style={styles.subtitle}>Your one-stop shop for amazing products at unbeatable prices.</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" style={styles.button}>🛒 Start Shopping</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(-45deg, #FFB6C1, #FF99CC, #FFC0CB, #FF66B2, #FF99CC)", // พื้นหลังสีชมพูพาสเทล
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeBox: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.8)", // ทำให้พื้นหลังของกล่องมีความใส
    padding: "3rem",
    borderRadius: "30px", // ทำมุมกลมๆ เพื่อให้ดูนุ่มนวล
    boxShadow: "0 4px 20px rgba(255, 182, 193, 0.6)", // เงาสีชมพูอ่อน
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(12px)", // เพิ่มความเบลอของพื้นหลัง
  },
  title: {
    color: "#ff66b2", // สีชมพูสดใส
    fontSize: "2.8rem", // ขนาดฟอนต์ที่ใหญ่และน่ารัก
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "0px 0px 12px rgba(255, 105, 180, 0.5)", // เงาของข้อความให้ดูน่ารัก
  },
  subtitle: {
    color: "#ffffff", // สีขาวเพื่อความเด่น
    fontSize: "1.3rem",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#FF66B2", // สีชมพูสดใส
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "30px", // ทำให้ปุ่มมนขึ้น
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 15px rgba(255, 105, 180, 0.5)", // เงาสีชมพูอ่อน
  },
};

export default Home;
