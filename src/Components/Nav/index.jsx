import { Container, Section, NavMob, Div, NavDesk } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { BsBorderStyle } from "react-icons/bs";
import { Input } from "../Input";
import { IoSearch } from "react-icons/io5";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useOrder } from "../../utils";

export function Nav() {
  const { orderCount } = useOrder();
  const { orders } = useOrder(); 


  const verifyZero = () => {
    if (orderCount === 0) {
      alert("Por Favor, selecione uma opção.");
      return false;
    }
    return true;
  };

  const handleButtonClick = () => {
    if (verifyZero()) {
      navigate("/menu"); // Navega para a página de menu se a quantidade for maior que 0
    }
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Section>
        <NavMob>
          <div className="iconButton">
            <Link to="/MenuMobile">
              <IoMdMenu size={34} />
            </Link>
          </div>

          <h1>
            <strong>
              <BiSolidPolygon />
            </strong>{" "}
            Food Explorer
          </h1>

          <div className="iconButton">
            <Link
              to="/menu"
              onClick={(e) => {
                
                if (orderCount === 0) {
                  e.preventDefault(); 
                  alert("Por Favor, selecione um prato.");
                }
              }}>
              <BsBorderStyle size={34} />
              <div className="orders">
                <span>{orderCount}</span>
              </div>
            </Link>
          </div>
        </NavMob>
      </Section>
      <Div>
        <NavDesk>
          <h1>
            <strong>
              <BiSolidPolygon />
            </strong>{" "}
            Food Explorer
          </h1>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="search"
            icon={IoSearch}
          />
          <Button onClick={handleButtonClick} className="ButtonHeader">
            <BsBorderStyle size={24} /> Pedidos <span>({orderCount})</span>
          </Button>
          <Link to="/entrar">
            <RxExit size={54} />
          </Link>
        </NavDesk>
      </Div>
    </Container>
  );
}
