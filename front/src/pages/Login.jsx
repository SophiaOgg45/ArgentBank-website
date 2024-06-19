import { Link } from 'react-router-dom';

const Login = () => (
    <div className="main bg-dark">
        <nav className="main-nav">
            <div>
                <Link to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link to="/" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* Placeholder due to static site */}
                    <Link to="/user" className="sign-in-button">Sign In</Link>
                    {/* Should be the button below */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </form>
            </section>
        </main>
    </div>
);

export default Login;

