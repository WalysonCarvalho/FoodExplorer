import { Container } from "./styles";
import { useState } from "react";

import { Main, Section, Form } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { BiSolidPolygon } from "react-icons/bi";
import { FiMail, FiLock, FiUserPlus } from "react-icons/fi";

import { Link } from "react-router-dom";



export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });

    function handleSignIn() {
      window.location.reload();
    }

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
  }
  return (
    <Container>
      <Main>
        <h1>
          <strong>
            <BiSolidPolygon />
          </strong>{" "}
          Food Explorer
        </h1>
      </Main>
      <Section>
        <Form>
          <h1>Faça seu login</h1>

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

          <Button title="Entrar" onClick={handleSignIn}>
            Entrar
          </Button>

          <Link to="/register">
            <FiUserPlus /> Criar conta
          </Link>
        </Form>
      </Section>
    </Container>
  );
}
