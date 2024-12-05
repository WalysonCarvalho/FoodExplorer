import { Container, Div } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";

export function Footer() {
  return (
    <Container>
      <Div>
        <div className="footerOne">
          <p>
            <strong>
              <BiSolidPolygon />
            </strong>{" "}
            Food Explorer
          </p>
        </div>

        <div className="footerTwo">
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </Div>
    </Container>
  );
}
