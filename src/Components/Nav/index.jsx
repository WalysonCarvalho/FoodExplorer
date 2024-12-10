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
import { Link} from "react-router-dom";

export function Nav() {
  
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
            <Link to = "/menu">
              <BsBorderStyle size={34} />
              <div className="orders">
                <span>0</span>
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
          <Button onClick = {()=> navigate("/menu")} className="ButtonHeader">
            <BsBorderStyle size={24} /> Pedidos <span>(0)</span>
          </Button>
          <Link to ="/entrar">
            <RxExit size={54} />
          </Link>
        </NavDesk>
      </Div>
    </Container>
  );
}
