import style from './Nav.module.css'
import logo from '../../images/comp-50.jpeg';

export default function Nav() {
  return (
    <header>
      <img src={logo} alt='' className={style.header__logo} />

      <nav className={style.nav}>
        <a href="http://#" className={style.nav__link}>Quem somos?</a>
        <a href="http://#" className={style.nav__link}>Projetos</a>
        <a href="http://#" className={style.nav__link}>Contato</a>
        <input type="text" placeholder="Pesquisar" className={style.nav__search} />
      </nav>
    </header>
  )
}
