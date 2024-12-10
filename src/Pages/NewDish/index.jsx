import { Container, Menu, MenuDesk, Div } from "./styles";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import { Input } from "../../Components/Input";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Textarea } from "../../Components/Textarea";
import { FiDownload } from "react-icons/fi";
import { Button } from "../../Components/Button";
import { useParams } from "react-router-dom";

export function NewDish() {
  const { id } = useParams();

  const isEdition = Number(id) > 0;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Imagem selecionada:", file.name); // Remova ou substitua por outra ação
    }
  };

  return (
    <Container>
      <Nav />
      {/* Mobile View */}
      <div className="header">
        <div className="back">
          <a href="#">
            <IoMdArrowRoundBack size={30} /> Voltar
          </a>
        </div>
        <div className="text"> {isEdition ? "Editar" : "Novo "} Prato</div>
      </div>
      <Menu>
        <div className="inputs">
          <span>Imagem do Prato</span>
          <div className="image-upload">
            <input type="file" id="fileInput" onChange={handleImageUpload} />
            <label htmlFor="fileInput">
              <span>
                {" "}
                <FiDownload size={25} />
                Selecione a imagem
              </span>
            </label>
          </div>

          <div className="inputs">
            <span className="namedish">Nome do Prato</span>
            <Input placeholder="Ex: Salada Ceasar" type="text" />
          </div>

          <div className="inputs">
            <span className="category">Categoria</span>
            <select>
              <option value="sobremesas">Sobremesas</option>
              <option value="bebidas">Bebidas</option>
              <option value="refeicoes">Refeições</option>
            </select>
          </div>
        </div>

        <div className="inputs">
          <span>Ingredientes</span>
          <Input placeholder="Ex: Alface, tomate, frango" type="text" />
        </div>

        <div className="inputs">
          <span>Preço</span>
          <Input placeholder="R$ 38,98" type="number" />
        </div>

        <div className="inputs">
          <span>Descrição</span>
          <Textarea placeholder="Descreva o prato ou bebida." />
        </div>

        <div className="buttonMenu">
        {isEdition && <Button className="del"> Excluir </Button>}
          <Button>Salva alterações</Button>
        </div>
      </Menu>

      {/* Desktop View */}
      <Div>
        <div className="header">
          <div className="back">
            <a href="#">
              <IoMdArrowRoundBack size={30} /> Voltar
            </a>
          </div>
          <div className="text">{isEdition ? "Editar" : "Novo "} Prato</div>
        </div>
        <MenuDesk>
          <div className="ContainerOne">
            <div className="inputs">
              <span>Imagem do Prato</span>
              <div className="image-upload">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleImageUpload}
                />
                <label htmlFor="fileInput">
                  <span id="img">
                    <FiDownload size={25} />
                    Selecione a imagem
                  </span>
                </label>
              </div>
            </div>

            <div className="inputs">
              <span className="namedish">Nome do Prato</span>
              <Input placeholder="Ex: Salada Ceasar" type="text" />
            </div>

            <div className="inputs">
              <span className="category">Categoria</span>
              <select>
                <option value="sobremesas">Sobremesas</option>
                <option value="bebidas">Bebidas</option>
                <option value="refeicoes">Refeições</option>
              </select>
            </div>
          </div>

          <div className="ContainerTwo">
            <div className="inputs">
              <span>Ingredientes</span>
              <Input placeholder="Ex: Alface, tomate, frango" type="text" />
            </div>

            <div className="inputs">
              <span>Preço</span>
              <Input placeholder="R$ 38,98" type="number" />
            </div>
          </div>

          <div className="ContainerThree">
            <div className="inputs">
              <span>Descrição</span>
              <Textarea placeholder="Descreva o prato ou bebida." />
            </div>
          </div>
          <div className="buttonMenu">
{/*             Quando eu for apenas verificar se vai aparecer ou não 
 */}            {isEdition && <Button className="del"> Excluir </Button>}

            <Button>Salvar alterações</Button>
          </div>
        </MenuDesk>
      </Div>
      <Footer />
    </Container>
  );
}
