import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log("Đăng nhập với:", username, password);
  };

  return (
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: "url('/images/hotel-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden"
      }}
    >
      {/* Overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }}
      ></div>
      
      {/* Login Card */}
      <div 
        style={{
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 2
        }}
      >
        <h2 style={{ 
          fontSize: "28px", 
          fontWeight: "bold", 
          textAlign: "center", 
          marginBottom: "25px",
          color: "#1F2937" 
        }}>
          Đăng nhập
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "14px", 
              fontWeight: "500", 
              marginBottom: "8px",
              color: "#374151"
            }}>
              Tài khoản
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ 
                position: "absolute", 
                top: "50%", 
                left: "10px", 
                transform: "translateY(-50%)",
                color: "#6B7280" 
              }}>
                <FaUser />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 35px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "14px", 
              fontWeight: "500", 
              marginBottom: "8px",
              color: "#374151" 
            }}>
              Mật khẩu
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ 
                position: "absolute", 
                top: "50%", 
                left: "10px", 
                transform: "translateY(-50%)",
                color: "#6B7280" 
              }}>
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 35px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <a 
              href="#" 
              style={{ 
                fontSize: "14px", 
                color: "#000", 
                textDecoration: "none"
              }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              Quên mật khẩu
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#F3F4F6",
              border: "none",
              borderRadius: "6px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
              color: "#000",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#E5E7EB"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#F3F4F6"}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;