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
      <button>
        <img src={close} alt="Botão de fechar" />
      </button>
      <img src={profile} alt="perfil" />

      <ul>
        <li><Link ><img src={home} alt="home" /></Link></li>
        <li><Link ><img src={repay} alt="repay" /></Link></li>
        <li><Link ><img src={search} alt="search" /></Link></li>
        <li><Link ><img src={history} alt="history" /></Link></li>
      </ul>

      <Link to="/" className={styles.sidebar__logout}>
        <img src={logout} alt="Logout" />
      </Link>
    </aside>
  );
}

export default Sidebar;