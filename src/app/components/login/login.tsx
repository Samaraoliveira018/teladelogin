import "./login.scss";

export function Login() {
    return (
        <div className="login">
                <span className="title">Sign in</span>
            <br />
            <div className="container-text-btn">
                <span className="subtitle">Dont have an account?</span>
                <button className="signUp">Sign up</button>
            </div>
            <input type="text" placeholder="digite seu email" />
            <input type="password" placeholder="digite sua senha" />
            <button className="entrar">Entrar</button>
        </div>
    );
}