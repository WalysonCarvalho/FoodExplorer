import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from "react-icons/fi";
import { BiSolidPolygon } from "react-icons/bi";

/* import { useNavigate } from "react-router-dom";
 */
import { api } from "../../Services/api";

import { Container, Form, Section, Main } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* const navigate = useNavigate(); */

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        // navigate("/"); // Comente ou remova esta linha para deixar estático
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Main>
        <h1>
          <strong>
            <BiSolidPolygon />
          </strong>{" "}
          Food Explorer
        </h1>{" "}
      </Main>
      <Section>
        <Form>
          <h1>Crie a sua conta</h1>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Cadastrar" id="buttonSignUp" onClick={handleSignUp}>
            Cadastrar
          </Button>
          <Link to="/">
            <FiArrowLeft />
            Já tenho uma conta
          </Link>
        </Form>
      </Section>
    </Container>
  );
}
