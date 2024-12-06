import React, { useState } from "react";
import { Container, Section, Input } from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { BsBorderStyle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

export function Dishes({
  dishName = "Prato Genérico",
  description = "Descrição padrão do prato.",
  placeholders = ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
  image = "",
}) {
  const [quantity, setQuantity] = useState(0);

  // Funções para alterar a quantidade
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Container>
      <Section>
        {/* Botão de Voltar */}
        <div className="back">
          <a href="#">
            <IoMdArrowRoundBack />
            Voltar
          </a>
        </div>

        {/* Imagem do prato */}
        <div className="img-food">
          <img src={image} alt={dishName} />
        </div>

        {/* Texto do prato */}
        <div className="text">
          <h1>{dishName}</h1>
          <p>{description}</p>
        </div>

        {/* Inputs dinâmicos */}
        <Input>
          {placeholders.map((placeholder, index) => (
            <input key={index} type="text" placeholder={placeholder} />
          ))}
        </Input>

        {/* Área de preços e contador */}
        <div className="prices">
          <div className="price">
            <a href="#" onClick={handleDecrease}>
              <FiMinus size={25} />
            </a>
            <span>({quantity})</span>
            <a href="#" onClick={handleIncrease}>
              <FaPlus size={25} />
            </a>
          </div>

          {/* Botão de pedidos */}
          <button>
            <BsBorderStyle size={24} /> Pedidos <span>({quantity})</span>
          </button>
        </div>
      </Section>
    </Container>
  );
}
