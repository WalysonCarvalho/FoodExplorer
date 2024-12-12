import { Container, Header, Main } from "./styles";
import { MdClose } from "react-icons/md";
import { Input } from "../Input";
import { IoSearch } from "react-icons/io5";
import { BiSolidPolygon } from "react-icons/bi";
import { Link } from "react-router-dom";



export function MenuMob() {
  return (
    <Container>
      <Header>
        <div className="menu">
          <Link to="/home">
            <MdClose size={35} />
          </Link>
          <h1>Menu</h1>
        </div>
      </Header>
      <Main>
        <div className="search">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="search"
            icon={IoSearch}
          />
        </div>
        <div className="text">
          <a href=""><span>Novos pratos</span></a>
        </div>
        <div className="text">
          <Link to ="/SignIn"><span>Meus Favoritos</span></Link>
        </div>

        <div className="text">
          <Link to ="/SignIn"><span>Sair</span></Link>
        </div>
      </Main>
      <footer>
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
      </footer>
    </Container>
  );
}
