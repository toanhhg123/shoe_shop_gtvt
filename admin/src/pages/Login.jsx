import { useState } from "react";
import { login } from "../api/auth";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const cookies = Cookies.get("X-Access-Token");
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = user;
    toast.promise(login(username, password), {
      pending: "loading..",
      success: {
        render() {
          navigate("/", { replace: true });
          return "Login success";
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };
  if (cookies) return <Navigate to={"/"} replace />;
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username or email *</label>
                    <input
                      type="text"
                      className="form-control p_input"
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control p_input"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Remember me <i className="input-helper"></i>
                      </label>
                    </div>
                    <a href="#" className="forgot-pass">
                      Forgot password
                    </a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block enter-btn"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
