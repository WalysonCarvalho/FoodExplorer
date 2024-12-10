import { Container } from "./styles";

import foto1 from "../../assets/drive-img-food/Mask group-2.png";
import foto2 from "../../assets/drive-img-food/Mask group-3.png";
import foto3 from "../../assets/drive-img-food/Mask group-4.png";

const orders = [
  {
    id: 1,
    name: "1x Salada Rashid",
    price: "R$ 25,97",
    foto1: "../../assets/drive-img-food/Mask group-2.png",
  },
  {
    id: 2,
    name: "1x Pizza Marguerita",
    price: "R$ 45,99",
    foto2: "../../assets/drive-img-food/pizza.png",
  },
  {
    id: 3,
    name: "1x Hambúrguer Clássico",
    price: "R$ 30,50",
    foto3: "../../assets/drive-img-food/burger.png",
  },
];
export function Orders() {
  return (
    <Container>
      <h1>Pedidos</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-container">
          <div className="pedidos">
            <img src={foto1} alt={order.name} />
            <h3>{order.name}</h3>
            <span>{order.price}</span>
          </div>

          <div className="delete">
            <button>Excluir</button>
          </div>
        </div>
      ))}

      <div className="total">
        <h2>Total: R$ 178,97</h2>
      </div>

      <div className="next-button">
        <button>Avançar</button>
      </div>
    </Container>
  );
}


