import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <LoginForm />
        <div className="forgot-password">
          <a href="#">Forgot password</a>
        </div>
        <div className="register">
          <p>
            Don&apos;t have an account? <a href="#">Go to register</a>
          </p>         
        </div>
      </div>
    </div>
  );
}
