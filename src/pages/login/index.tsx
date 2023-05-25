import loginLogo from "../../assets/lendsqr-login.png";
import lendsqrLogo from "../../assets/lendsqr-icon-long.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="container py-5">
      <div className="max-w-10 py-5">
        <img src={lendsqrLogo} alt="" />
      </div>
      <div className="d-flex align-items-center justify-content-between my-5">
        <div className="w-45 d-none d-md-block">
          <img src={loginLogo} alt="" />
        </div>
        <div className="w-100 w-md-45">
          <h2 className="fw-bold">Welcome!</h2>
          <p className="text-muted">Enter details to login.</p>
          <form className="mt-5">
            <input
              type="email"
              className="form-control my-4 py-3 ps-3"
              placeholder="Email"
            />
            <div className="position-relative mb-4 d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-6 py-3 ps-3"
                placeholder="Password"
              />
              <small
                onClick={() => setShowPassword(!showPassword)}
                className="pointer user-select-none text-main d-inline-block me-3 position-absolute end-0"
              >
                SHOW
              </small>
            </div>
            <Link to="/forgot-password" className="text-main">
              FORGOT PASSWORD?
            </Link>
            <button className="btn btn-info bg-main text-white my-4 d-block w-100">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
