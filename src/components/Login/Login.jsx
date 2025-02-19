import background from "../../assets/backgroundLogin.png";
import logo from "../../assets/logo.png";
import "./styles.scss";

function Login() {
  return (
    <section>
      <figure>
        <img src={background} alt="Imagem de navio cargueiro" />
      </figure>
      <div className="loginArea">
        <img src={logo} alt="Logo da SISPAR" />
        <h1>Boas Vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>
        <form>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="senha"
            id="passaword"
            placeholder="Senha"
          />
        </form>
        <a href="#">Esqueci minha Senha</a>
        <div className="btns">
          <button type="submit">Entrar</button>
          <button className="novaConta">Criar Conta</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
