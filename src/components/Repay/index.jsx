import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import home from "../../assets/home2.png";
import arrow from "../../assets/arrow.png";
import repay from "../../assets/reqRepay.png";
import review from "../../assets/review.png";
import history from "../../assets/reqHistory.png";
import req from "../../assets/request.png";
import clock from "../../assets/clock.png";
import approved from "../../assets/approved.png";
import rejected from "../../assets/rejected.png";
import cloud from "../../assets/systemAtt.png";

function Repay() {
  return (
    <section className={styles.repay}>
      <div className={styles.repay__header}>
        <img src={home} alt="home" />
        <img src={arrow} alt="seta" />
        <p>Reembolso</p>
      </div>

      <div className={styles.repay__container}>
        <div className={styles.repay__tittle}>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>
        </div>
        <div className={styles.repay__cardContainer}>
          <Link className={styles.repay__card}>
            <img src={repay} alt="botão de solicitação de reembolso" />
            <h2>Solicitar Reembolso</h2>
          </Link>
          <Link className={styles.repay__card}>
            <img src={review} alt="botão de solicitação de reembolso" />
            <h2>Verificar Análises</h2>
          </Link>
          <Link className={styles.repay__card}>
            <img src={history} alt="botão de solicitação de reembolso" />
            <h2>Histórico</h2>
          </Link>
        </div>

        <div className={styles.repay__content}>
            <div className={styles.repay__info}>
                <button className={styles.repay__req}><img src={req} alt="solicitações" /></button>
                <p className={styles.repay__number}>182</p>
                <p>Solicitados</p>
            </div>
            <div className={styles.repay__info}>
                <button className={styles.repay__review}><img src={clock} alt="relógio em análise" /></button>
                <p className={styles.repay__number}>74</p>
                <p>Em análise</p>
            </div>
            <div className={styles.repay__info}>
                <button className={styles.repay__approved}><img src={approved} alt="aprovado" /></button>
                <p className={styles.repay__number}>195</p>
                <p>Aprovados</p>
            </div>
            <div className={styles.repay__info}>
                <button className={styles.repay__rejected}><img src={rejected} alt="rejeitados" /></button>
                <p className={styles.repay__number}>41</p>
                <p>Rejeitados</p>
            </div>
        </div>
        <div className={styles.repay__SystemAtt}>
            <img src={cloud} alt="Simbolo de nuvem atualizado" />
            <p>Sistema Atualizado.</p>
        </div>
      </div>
    </section>
  );
}

export default Repay;
