import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0.00);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");

  function handleCrateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data ={
      title,
      value,
      category,
      type
    }

    api.post("/transactions",data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={onRequestClose}
        type="button"
        className="react-modal-close"
      >
        <img src={closeImg} alt="botão fechar modal" />
      </button>
      <Container onSubmit={handleCrateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("income");
            }}
            isActive={type === "income"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("outcome");
            }}
            isActive={type === "outcome"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria" 
          type="text"
          value={category}
          onChange={(event) => (setCategory(event.target.value))}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
