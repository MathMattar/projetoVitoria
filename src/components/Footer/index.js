import Map from "./Map"
import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <section className={style.footer__details}>
        <h1>Contato</h1>

        <div className={style.details__contact}>
          <div className={style.contact__phone}>
            <h2>Telefone</h2>
            <p>(xx) 0000-0000</p>
          </div>

          <div className={style.contact__email}>
            <h2>E-mail</h2>
            <p>contato@exemplo.com.br</p>
          </div>
        </div>

        <div className={style.details__address}>
          <h2>Localização</h2>
          <p>Rua Design, 227 <br /> Figma, Navegador Web <br /> 00000-000</p>
        </div>

        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0053212943108!2d-44.997272422828!3d-21.231637580162133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffdf15a582fc3%3A0xb9ba058be0f14e2e!2sUFLA%20-%20Portaria%20Principal!5e0!3m2!1spt-BR!2sbr!4v1701176067855!5m2!1spt-BR!2sbr"
          width="487"
          height="246"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </section>

      <form className={style.footer__form}>
        <input type="text" name="nome" placeholder="nome" required />
        <input type="email" name="email" placeholder="e-mail" required />
        <input type="tel" name="telefone" placeholder="telefone" required />

        <textarea name="mensagem" placeholder="mensagem" required></textarea>

        <button type="submit">enviar email →</button>
      </form>
    </footer>
  );
};