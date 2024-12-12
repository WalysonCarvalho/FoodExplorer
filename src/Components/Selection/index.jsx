import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useOrder } from "../../utils";
import { Container, Article } from "./styles";

export function Selection({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(1);
  const [isRed, setIsRed] = useState(false);
  const { addOrder } = useOrder(); // Obtém a função `addOrder` do contexto

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToOrder = () => {
    addOrder({ image, title, description, price, quantity }); // Adiciona o pedido
    setQuantity(1); // Reseta a quantidade após o pedido
  };

  const handleHeartClick = () => setIsRed(!isRed);

  return (
    <Container>
      <Article>
        <div className="header">
          <div className="heart-client">
            <Link to="#" onClick={handleHeartClick}>
              {isRed ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
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
          <div className="quantity">
            <Link to="#" onClick={handleDecrease}>
              <FiMinus />
            </Link>
            <span>{quantity}</span>
            <Link to="#" onClick={handleIncrease}>
              <FaPlus />
            </Link>
          </div>
          <button onClick={handleAddToOrder}>Incluir</button>
        </div>
      </Article>
    </Container>
  );
}
