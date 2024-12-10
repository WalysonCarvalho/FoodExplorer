import { Container, Article } from "./styles";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import React, { useState } from "react"; // Passo 1: Importamos o useState
import { Link } from "react-router-dom";

export function Selection({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(0); // Passo 2: Criamos a caixinha para guardar o número.

  const handleIncrease = () => setQuantity((prev) => prev + 1); // Aumentar o número.
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // Diminuir até 0.

  return (
    <Container>
      <Article>
        <div className="header">
          <div className="heart-client">
            <Link to="#">
              <FaRegHeart />
            </Link>
          </div>
        </div>

        <div className="imgs">
          <img src={image} alt={title} />
        </div>

        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="clash">
          <span>{price}</span>
        </div>

        <div className="prices">
          {/* Aqui adicionamos o número que aumenta/diminui */}
          <div className="quantity">
            <Link to="#" onClick={handleDecrease}>
              <FiMinus />
            </Link>
            <span>{quantity}</span> {/* Mostramos o número da "caixinha" */}
            <Link to="#" onClick={handleIncrease}>
              <FaPlus />
            </Link>
          </div>
          <button>Incluir</button>
        </div>
      </Article>
    </Container>
  );
}
