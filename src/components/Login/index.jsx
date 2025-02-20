import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/backgroundLogin.png";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Digite um e-mail válido.");
      return;
    }
    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    setError("");
    navigate("/reembolso");
  };

  return (
    <section className={styles.login}>
      <figure>
        <img
          src={background}
          alt="Imagem de navio cargueiro"
          className={styles.login__background}
        />
      </figure>
      <div className={styles.login__loginArea}>
        <img src={logo} alt="Logo da SISPAR" />
        <h1>Boas Vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <a href="#">Esqueci minha Senha</a>
          <div className={styles.login__btns}>
            <button type="submit">Entrar</button>
            <button>Criar Conta</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
