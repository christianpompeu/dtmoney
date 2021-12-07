import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freela de Totvs RM</td>
            <td className="income">R$ 600,00</td>
            <td>Serviços</td>
            <td>30/11/2021</td>
          </tr>
          <tr>
            <td>Cama Montessoriana</td>
            <td className="outcome">- R$ 424,00</td>
            <td>Casa</td>
            <td>30/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}