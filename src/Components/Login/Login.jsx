import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>System Access</h1>
        <div>
          <input type="email" placeholder="E-mail" />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
           <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me"/>
            Remember Me
           </label>
           <a href="#">Forgot Password?</a>
        </div>
        <button>Login</button>
        <div className="signup-link">
          <p>
            Don&apos;t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;