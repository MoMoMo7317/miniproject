import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                login(data.token);
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("❌ Login failed. Try again.");
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

                .falling-star {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background-color: #ffffff;
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
                style={styles.loginBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={styles.title}>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
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
                        Sign In
                    </motion.button>
                </form>
                <p style={styles.signupText}>
                    New here? <a href="/register" style={styles.link}>Sign up now</a>
                </p>
            </motion.div>
        </div>
    );
};

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(-45deg, #FFB6C1, #FF99CC, #FFC0CB, #FF66B2, #FF99CC)", // ใช้สีชมพูพาสเทลเหมือน Register
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    loginBox: {
        position: "relative",
        background: "rgba(255, 255, 255, 0.8)",
        padding: "3rem",
        borderRadius: "30px", // ใช้ขอบมนเหมือน Register
        boxShadow: "0 4px 20px rgba(255, 182, 193, 0.6)", // เงาชมพู
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        backdropFilter: "blur(10px)",
    },
    title: {
        color: "#ff66b2",
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        textShadow: "0px 0px 10px rgba(255, 105, 180, 0.5)", // เพิ่มเงาให้ดูเด่น
    },
    inputContainer: {
        marginBottom: "1rem",
    },
    input: {
        width: "100%",
        padding: "14px",
        borderRadius: "15px",
        border: "none",
        backgroundColor: "#FFE0F2",
        color: "#5f5a5a",
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.3s ease",
    },
    button: {
        width: "100%",
        padding: "14px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#FF66B2",
        color: "#fff",
        fontSize: "1.1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 15px rgba(255, 105, 180, 0.5)",
    },
    signupText: {
        color: "#FF99CC",
        marginTop: "1rem",
        fontSize: "0.9rem",
    },
    link: {
        color: "#ff66b2",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "color 0.3s",
    },
};

export default Login;
