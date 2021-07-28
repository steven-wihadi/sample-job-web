import './login.page.scss';

function LoginPage() {
  return (
    <div className="login-pages-container">
      <div className="login-content-wrapper">
        <h1 className="login-text">Login</h1>
        <input className="login-input-field" type="text" value="login.dummy@email.com" />
        <input className="login-input-field" type="password" value="testLogin1234" />
        <a className="login-button" href={ '/job-list' }>Submit</a>
      </div>
    </div>
  );
}

export default LoginPage;