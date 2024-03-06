import "./signup.css";

export default function SignUp() {
  return (
    <div className="login-container">
      <img className="rocket-image" src="./src/assets/rocket-80.png" />
      <h1 className="page-name">Apollofy</h1>
      <div className="form-container">
        <Name/>
        <Lastname/>
        <Email />
        <Username />
        <Password />
      </div>
      <div className="buttons-container">
        <CancelButton />
        <SignUpButton />
      </div>
    </div>
  );
}


function Name() {
  return (
    <form className="form-container">
      <label>Your name </label>
      <input type="text" />
    </form>
  );
}
function Lastname() {
  return (
    <form className="form-container">
      <label>Your lastname </label>
      <input type="text" />
    </form>
  );
}
function Username() {
  return (
    <form className="form-container">
      <label>username </label>
      <input type="text" />
    </form>
  );
}
function Email() {
  return (
    <form className="form-container">
      <label>email </label>
      <input type="text" />
    </form>
  );
}

function Password() {
  return (
    <form className="form-container">
      <label>create password</label>
      <input type="password" />
      <label>confirm password</label>
      <input type="password" />
    </form>
  );
}

function CancelButton() {
  return <button className="button">Cancel</button>;
}
function SignUpButton() {
  return <button className="button">Sign Up</button>;
}
