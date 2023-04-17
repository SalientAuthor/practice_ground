import logo from "./logo.svg";
import "./signup.css";

function Signup() {
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
              <label for="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Enter your name"
              />
            </div>
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
            <input className="signBtn" type="submit" value="Sign up" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
