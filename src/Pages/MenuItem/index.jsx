import { Container } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";


export function MenuItem() {
  return (
    <Container>
      <Nav />
      <h1>MenuItem</h1>

      <Footer />
    </Container>
  );
}