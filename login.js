import logo from "./logo.svg";
import "./login.css";

function Login() {
  return (
    <div className="blank">
      <nav className="navBar">
        <div className="leftBar"></div>
        <div className="rightBar">
          <button className="navBtn">Blog</button>
          <button className="navBtn" id="signUp">
            Sign up
          </button>
          <button className="navBtn">Login</button>
        </div>
      </nav>

      <section>
        <div className="main">
          <form action="/action_page.php">
            <div className="inputField">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="inputField">
              <label for="password">Password</label>
              <input
                type="password"
                id="pass"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <input className="loginBtn" type="submit" value="Login" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
