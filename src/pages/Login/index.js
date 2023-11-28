import style from './Login.module.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navegar = useNavigate();
  return (
    <section className={style.aside}>
      <section className={style.presentation}>
        <h1>Projeto Trainee</h1>
        <p>Caso seja sua primeira vez aqui, <br /> clique <a href="http://#">aqui</a> para fazer o seu cadastro</p>
      </section>

      <section className={style.login}>
        <h2>Iniciar Sessão</h2>

        <form className={style.login__form}>
          <input type="email" name="login" placeholder="E-mail" className={style.form__email} required />
          <input type="password" name="senha" placeholder="Senha" className={style.form__pass} required />
          <button
            type="button"
            className={style.form__submit}
            onClick={() => navegar("/logado")}>
            Entrar
          </button>
        </form>

        <a href="http://#" className={style.login__forPass}>Esqueceu a senha?</a>
      </section>
    </section>
  );
}
