import { Container, Menu, Div, Section } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Selection } from "../../Components/Selection";

import { motion } from "framer-motion";

import foto2 from "../../assets/drive-img-food/Mask group-1.png";
import foto3 from "../../assets/drive-img-food/Mask group-2.png";

import foto1 from "../../assets/drive-img-food/pngegg 1.png";

const FoodImg = [foto1, foto2, foto3];

export function Home() {
  return (
    <Container>
      <Nav />
      <Menu>
        <Div>
          <div className="imgs">
            <img src={foto1} alt="Fotos de frutas e doces." />
          </div>
          <div className="text">
            <h2>Sabores inigualáveis</h2>
            <p> Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Div>

        <div className="refs">
          <h1>Refeições</h1>
        </div>
        <Section as={motion.div} whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="carousel-inner"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Selection
              image={foto2}
              title="Salada Ravanello"
              description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
              price="R$49,97"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />

            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
          </motion.div>
        </Section>

        <div className="refs">
          <h1>Refeições</h1>
        </div>
        <Section as={motion.div} whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="carousel-inner"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Selection
              image={foto2}
              title="Salada Ravanello"
              description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
              price="R$49,97"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />

            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
          </motion.div>
        </Section>
        <div className="refs">
          <h1>Refeições</h1>
        </div>
        <Section as={motion.div} whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="carousel-inner"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Selection
              image={foto2}
              title="Salada Ravanello"
              description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
              price="R$49,97"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />

            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
            <Selection
              image={foto3}
              title="Macarrão Italiano"
              description="Macarrão ao molho de tomate fresco com manjericão"
              price="R$35,90"
            />
          </motion.div>
        </Section>
      </Menu>
      <Footer />
    </Container>
  );
}
