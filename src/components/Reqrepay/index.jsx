import { useState } from "react";
import home from "../../assets/home2.png";
import arrow from "../../assets/arrow.png";
import plus from "../../assets/plus.png";
import remove from "../../assets/remove.png";
import dump from "../../assets/dump.png";
import description from "../../assets/description.png";
import styles from "./styles.module.scss";

function ReqRepay() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    prestContas: "",
    descricao: "",
    data: "",
    tipoDespesa: "",
    centroCusto: "",
    ordemInterna: "",
    divisao: "",
    pep: "",
    moeda: "",
    distanciaKm: "",
    valorKm: "",
    valorFaturado: "",
  });

  const [reembolsos, setReembolsos] = useState([]);
  const [modalDescricao, setModalDescricao] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (Object.values(formData).some((value) => value === "")) {
      alert("Preencha todos os campos antes de salvar!");
      return;
    }
    setReembolsos([...reembolsos, formData]);
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      nome: "",
      empresa: "",
      prestContas: "",
      descricao: "",
      data: "",
      tipoDespesa: "",
      centroCusto: "",
      ordemInterna: "",
      divisao: "",
      pep: "",
      moeda: "",
      distanciaKm: "",
      valorKm: "",
      valorFaturado: "",
    });
  };

  const handleDelete = (index) => {
    setReembolsos(reembolsos.filter((_, i) => i !== index));
  };

  return (
    <section className={styles.ReqRepay}>
      <div className={styles.ReqRepay__header}>
        <img src={home} alt="home" />
        <img src={arrow} alt="seta" />
        <p>Reembolso</p>
        <img src={arrow} alt="seta" />
        <p>Solicitação de Reembolso</p>
      </div>

      <div className={styles.ReqRepay__container}>
        <div className={styles.ReqRepay__formContent}>
          <div className={styles.ReqRepay__formContainer}>
            <div>
              <label>Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Empresa</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>N° Prest. Contas</label>
              <input
                type="text"
                name="prestContas"
                value={formData.prestContas}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descrição / Motivo do Reembolso</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.ReqRepay__formContainer}>
            <div>
              <label>Data</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Tipo de Despesa</label>
              <select
                name="tipoDespesa"
                value={formData.tipoDespesa}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Combustível">Combustível</option>
                <option value="Condução">Condução</option>
                <option value="Estacionamento">Estacionamento</option>
                <option value="Viagem admin.">Viagem admin.</option>
                <option value="Viagem operacional">Viagem operacional</option>
                <option value="Eventos de representação">Eventos de representação</option>
              </select>
            </div>
            <div>
              <label>Centro de Custo</label>
              <select
                name="centroCusto"
                value={formData.centroCusto}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="110109002 - FIN CONTROLES INTERNOS MTZ">110109002 - FIN CONTROLES INTERNOS MTZ</option>
                <option value="1100110002 - FIN VICE-PRESIDENCIA FINACAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINACAS MTZ</option>
                <option value="1100110102 - FIN CONTABILIDADE MTZ">1100110102 - FIN CONTABILIDADE MTZ</option>
              </select>
            </div>
            <div>
              <label>Ordem Interna</label>
              <input
                type="text"
                name="ordemInterna"
                value={formData.ordemInterna}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Divisão</label>
              <input
                type="text"
                name="divisao"
                value={formData.divisao}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>PEP</label>
              <input
                type="text"
                name="pep"
                value={formData.pep}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Moeda</label>
              <input
                type="text"
                name="moeda"
                value={formData.moeda}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Distância (Km)</label>
              <input
                type="number"
                name="distanciaKm"
                value={formData.distanciaKm}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Valor por Km</label>
              <input
                type="number"
                name="valorKm"
                value={formData.valorKm}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Valor Faturado</label>
              <input
                type="number"
                name="valorFaturado"
                value={formData.valorFaturado}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.ReqRepay__buttons}>
          <button onClick={handleSave}>
            <img src={plus} alt="Botão de mais" />
            Salvar
          </button>
          <button onClick={handleClear}>
            <img src={remove} alt="botão de apagar" />
          </button>
        </div>

        {reembolsos.length > 0 && (
          <table className={styles.ReqRepay__table}>
            <thead>
              <tr>
                <th>Ação</th>
                <th>Nome</th>
                <th>Empresa</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de Despesa</th>
                <th>Centro de Custo</th>
                <th>Ordem Interna</th>
                <th>Divisão</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Distância (Km)</th>
                <th>Valor/Km</th>
                <th>Valor Faturado</th>
              </tr>
            </thead>
            <tbody>
              {reembolsos.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={() => handleDelete(index)}> <img src={dump} alt="lixeira" /> </button>
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.empresa}</td>
                  <td>{item.data}</td>
                  <td>
                    <button
                      onClick={() => {
                        setModalDescricao(item.descricao);
                        setShowModal(true);
                      }}
                    >
                      <img src={description} alt="descrição" />
                    </button>
                  </td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showModal && (
          <div className={styles.ReqRepay__modal}>
            <div className={styles.ReqRepay__modalContent}>
              <h2>Descrição Completa</h2>
              <p>{modalDescricao}</p>
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReqRepay;
