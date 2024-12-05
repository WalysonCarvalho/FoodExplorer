import { Container, Section, NavMob, Div, NavDesk } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { BsBorderStyle } from "react-icons/bs";
import { Input } from "../Input";
import { IoSearch } from "react-icons/io5";
import { Button } from "../Button";
import { RxExit } from "react-icons/rx";
import React from "react";

export function Nav() {
  return (
    <Container>
      <Section>
        <NavMob>
          <div className="iconButton">
            <a href="">
              <IoMdMenu size={34} />
            </a>
          </div>

          <h1>
            <strong>
              <BiSolidPolygon />
            </strong>{" "}
            Food Explorer
          </h1>
          <div className="iconButton">
            <a href="">
              <BsBorderStyle size={34} />
              <div className="orders">
                <span>0</span>
              </div>
            </a>
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
          <Button className="ButtonHeader">
            <BsBorderStyle size={24} /> Pedidos <span>(0)</span>
          </Button>
          <a href="">
            <RxExit size={54} />
          </a>
        </NavDesk>
      </Div>
    </Container>
  );
}
