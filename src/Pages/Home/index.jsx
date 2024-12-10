import { Container, Menu, Div, Section } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Selection } from "../../Components/Selection";

import { motion } from "framer-motion";

import fotoFood from "../../assets/drive-img-food/pngegg 1.png";
import foto1 from "../../assets/drive-img-food/Mask group-1.png";
import foto2 from "../../assets/drive-img-food/Mask group-2.png";
import foto3 from "../../assets/drive-img-food/Mask group-3.png";
import foto4 from "../../assets/drive-img-food/Mask group-4.png";
import foto5 from "../../assets/drive-img-food/Mask group-5.png";
import foto6 from "../../assets/drive-img-food/Mask group-6.png";
import foto7 from "../../assets/drive-img-food/Mask group-7.png";
import foto8 from "../../assets/drive-img-food/Mask group-8.png";
import foto9 from "../../assets/drive-img-food/Mask group-9.png";
import foto10 from "../../assets/drive-img-food/Mask group-10.png";
import foto11 from "../../assets/drive-img-food/Mask group-11.png";

const FoodMainCourse = [foto1, foto2, foto3];

const Desserts = [foto4, foto5, foto6, foto7];

const Drinks = [foto8, foto9, foto10, foto11];

export function Home() {
  
  return (
    <Container>
      <Nav />
      <Menu>
        <Div>
          <div className="imgs">
            <img src={fotoFood} alt="Fotos de frutas e doces." />
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
              image={foto1}
              title="Torradas de Parma"
              description="Presunto de parma e rúcula em um pão com fermento natural"
              price="R$25,97"
            />
            <Selection
              image={foto2}
              title="Spaguetti Gambe"
              description="Massa fresca com camarões e pesto "
              price="R$79,90"
            />
            <Selection
              image={foto3}
              title="Salada Ravanello"
              description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
              price="R$49,90"
            />

            <Selection
              image={foto1}
              title="Torradas de Parma"
              description="Presunto de parma e rúcula em um pão com fermento natural"
              price="R$25,97"
            />
            <Selection
              image={foto2}
              title="Spaguetti Gambe"
              description="Massa fresca com camarões e pesto "
              price="R$79,90"
            />
            <Selection
              image={foto3}
              title="Salada Ravanello"
              description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
              price="R$49,90"
            />
          </motion.div>
        </Section>

        <div className="refs">
          <h1>Sobremesas</h1>
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
              image={foto4}
              title="Prugna Pie"
              description="Torta de ameixa com massa amanteigada, polvilho em açúcar."
              price="R$79,97"
            />
            <Selection
              image={foto5}
              title="Peachy Pastrie"
              description="Delicioso folheado de pêssego com folhas de hortelã "
              price="R$32,97"
            />
            <Selection
              image={foto6}
              title="Macarons "
              description="Farinha de amêndoas, manteiga, claras e açúcar"
              price="R$79,97"
            />

            <Selection
              image={foto7}
              title="Bolo de Damasco "
              description="Delicioso bolo de damasco com coco e amêndoas"
              price="R$85,90"
            />
            <Selection
              image={foto4}
              title="Prugna Pie"
              description="Torta de ameixa com massa amanteigada, polvilho em açúcar."
              price="R$79,97"
            />
            <Selection
              image={foto5}
              title="Peachy Pastrie"
              description="Delicioso folheado de pêssego com folhas de hortelã "
              price="R$32,97"
            />
            <Selection
              image={foto6}
              title="Macarons "
              description="Farinha de amêndoas, manteiga, claras e açúcar"
              price="R$79,97"
            />
          </motion.div>
        </Section>
        <div className="refs">
          <h1>Bebidas</h1>
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
              image={foto8}
              title="Suco de Maracujá"
              description="Suco de maracujá natural, gelado, cremoso e docinho."
              price="R$13,97"
            />
            <Selection
              image={foto9}
              title="Espresso "
              description="Café cremoso feito na temperatura e pressão perfeitas "
              price="R$9,90"
            />
            <Selection
              image={foto10}
              title="Tè d'autunno"
              description="Chá de anis, canela e limão. Sinta o outono italiano. "
              price="R$10,90"
            />

            <Selection
              image={foto11}
              title="Chá de Leão "
              description="Chá de leão, gengibre, canela e limão. Sinta o inverno italiano. "
              price="R$9,90"
            />
            <Selection
              image={foto8}
              title="Suco de Maracujá"
              description="Suco de maracujá natural, gelado, cremoso e docinho."
              price="R$13,97"
            />
            <Selection
              image={foto9}
              title="Espresso "
              description="Café cremoso feito na temperatura e pressão perfeitas "
              price="R$9,90"
            />
          </motion.div>
        </Section>
      </Menu>
      <Footer />
    </Container>
  );
}
