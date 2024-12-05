import { Container, Article } from "./styles";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export function Selection({ image, title, description, price }) {
  return (
    <Container>
      <Article>
        <div className="header">
          <div className="heart-client">
            <a href="#">
              <FaRegHeart />
            </a>
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
          <a href="#">
            <FiMinus /> 01 <FaPlus />
          </a>
          <button>Incluir</button>
        </div>
      </Article>
    </Container>
  );
}
