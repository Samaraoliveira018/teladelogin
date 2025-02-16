import "./login.scss";

export function Login() {
    return (
        <div className="login">
            <div>
                <span>Sign in</span>
            <br />
                <span>Dont have an account?</span>
                <button>Sign up</button>
            </div>
            <input type="text" placeholder="digite seu email" />
            <input type="password" placeholder="digite sua senha" />
            <button className="entrar">Entrar</button>
        </div>
    );
}