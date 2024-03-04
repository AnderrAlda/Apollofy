import "./login.css"

export default function Login() {
  return (
    <div className="login-container">
      <img className="rocket-image" src="./src/assets/rocket-80.png"/>
      <h1 className="page-name">Apollofy</h1>
      <form className="form-container">
        <label>email or username</label>
        <input type="text" />
        <label>password</label>
        <input type="password" />
      </form>
    </div>
  );
}
