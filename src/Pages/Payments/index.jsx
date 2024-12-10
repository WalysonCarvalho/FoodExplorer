import { Container,PayContainer } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Orders } from "../../Components/Orders";
import { Pay } from "../../Components/Pay";

export function Payments() {
  return (
    <Container>
      <Nav />
      <div className="main">
        <Orders/>
        <PayContainer>
          <Pay />
        </PayContainer>      
        </div>
      <Footer />
    </Container>
  );
}
