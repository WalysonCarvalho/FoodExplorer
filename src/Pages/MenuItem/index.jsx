import { Container } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Dishes } from "../../Components/Dishes";
import { useOrder } from "../../utils";

export function MenuItem() {
  const { orders, addOrder } = useOrder(); // Acessa o estado global

  return (
    <Container>
      <Nav />
      <Dishes orders={orders} onAddOrder={addOrder} />
      <Footer />
    </Container>
  );
}


