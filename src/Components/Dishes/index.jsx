import React, { useState } from "react";
import {
  Container,
  Section,
  ImageWrapper,
  Content,
  Prices,
  Button,
  InputWrapper,
} from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { BsBorderStyle } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useOrder } from "../../utils";

export function Dishes() {
  const [quantity, setQuantity] = useState(0);
  const { setOrderCount } = useOrder();
  const { orders } = useOrder(); // Obtendo os pedidos do contexto


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
      {orders.map((order, index) => (
      <Section key={index}>
        {/* Imagem do prato */}
        <ImageWrapper>
          <img src={order.image} alt={order.dishName} />
        </ImageWrapper>

        {/* Conteúdo descritivo e interativo */}
        <Content>
          <h1>{order.title}</h1>
          <p>{order.description}</p>

          {/* Inputs dinâmicos */}
          <InputWrapper>
            
              <input type="text" placeholder={order.placeholder} />
            
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
              <Button onClick={setOrderCount}>
                <BsBorderStyle size={20} /> Pedir<span>({order.price})</span>
              </Button>
            </Link>
          </Prices>
        </Content>
      </Section>
    ))}
    </Container>
  );
}





