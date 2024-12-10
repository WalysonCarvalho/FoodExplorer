import { Container } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Dishes } from "../../Components/Dishes";

export function MenuItem() {
  return (
    <Container>
      <Nav />
      <Dishes />

      <Footer />
    </Container>
  );
}
