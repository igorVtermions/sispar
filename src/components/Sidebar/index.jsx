import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import close from "../../assets/close.png";
import profile from "../../assets/profile.png";
import home from "../../assets/home.png";
import repay from "../../assets/repay.png";
import search from "../../assets/search.png";
import history from "../../assets/history.png";
import logout from "../../assets/logout.png";

function Sidebar() {
 
  return (
    <aside className={styles.sidebar}>
      <button  className={styles.sidebar__toggle}>
        <img src={close} alt="Botão de fechar" />
      </button>

      <img src={profile} alt="perfil" className={styles.sidebar__profile} />

      <ul>
        <li><Link to="/reembolso"><img src={home} alt="home" /></Link></li>
        <li><Link to="/solicitacaoreembolso"><img src={repay} alt="reembolso" /></Link></li>
        <li><img src={search} alt="search" /></li>
        <li><img src={history} alt="history" /></li>
      </ul>

      <Link to="/" className={styles.sidebar__logout}>
        <img src={logout} alt="Logout" />
      </Link>
    </aside>
  );
}

export default Sidebar;