import { useEffect, useRef } from "react";
import "./style.css";

const Login = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    // التحقق من وجود المراجع
    if (registerBtn && loginBtn && container) {
      const handleRegisterClick = () => container.classList.add("active");
      const handleLoginClick = () => container.classList.remove("active");

      registerBtn.addEventListener("click", handleRegisterClick);
      loginBtn.addEventListener("click", handleLoginClick);

      // تنظيف الأحداث عند إلغاء تحميل المكون
      return () => {
        registerBtn.removeEventListener("click", handleRegisterClick);
        loginBtn.removeEventListener("click", handleLoginClick);
      };
    }
  }, []); // المصفوفة الفارغة تعني التنفيذ مرة واحدة عند التحميل

  return (
    <div className="body">
    <div className="Login" ref={containerRef}>
      <div className="form-Login sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icon">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-Login sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icon">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
          <span>or use your email for login</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-Login">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button ref={loginBtnRef} id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button ref={registerBtnRef} id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Login;
