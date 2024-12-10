import React, { useState } from "react";
import { Container, Section, ImageWrapper, Content, Prices, Button, InputWrapper } from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { BsBorderStyle } from "react-icons/bs";
import { Link} from  "react-router-dom"

export function Dishes ({
  dishName = "Prato Genérico",
  description = "Descrição padrão do prato.",
  placeholders = ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
  image = "https://via.placeholder.com/390",
}) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Container>
      {/* Botão de voltar */}
      <div className="back">
        <Link to="/Home">
          <IoMdArrowRoundBack /> Voltar
        </Link>
      </div>

      {/* Área principal */}
      <Section>
        {/* Imagem do prato */}
        <ImageWrapper>
          <img src={image} alt={dishName} />
        </ImageWrapper>

        {/* Conteúdo descritivo e interativo */}
        <Content>
          <h1>{dishName}</h1>
          <p>{description}</p>

          {/* Inputs dinâmicos */}
          <InputWrapper>
            {placeholders.map((placeholder, index) => (
              <input key={index} type="text" placeholder={placeholder} />
            ))}
          </InputWrapper>

          {/* Área de controle de quantidade e botão */}
          <Prices>
            <div className="counter">
              <a href="#" onClick={handleDecrease}>
                <FiMinus size={25} />
              </a>
              <span>{quantity}</span>
              <a href="#" onClick={handleIncrease}>
                <FaPlus size={25} />
              </a>
            </div>
            <Link to="/pagamento">
            <Button>
              <BsBorderStyle size={20} /> Pedidos <span>({quantity})</span>
            </Button>
            </Link>
          </Prices>
        </Content>
      </Section>
    </Container>
  );
}
