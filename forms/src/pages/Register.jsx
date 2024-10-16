import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="container">
      <div className="auth-form">
        <h2>Register</h2>
        <RegisterForm />
        <div className="register">
          <p>
            Already have an account? <a href="#">Go to login</a>
          </p>         
        </div>
      </div>
    </div>
  );
}
