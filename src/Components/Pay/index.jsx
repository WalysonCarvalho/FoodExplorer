import { Container,Main} from './styles';
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";


export function Pay(){
  return(
    <Container>
      <h1>Pagamento</h1>
      <Main>
      <div className='Container'>
        <div className='pix'> <FaPix />
         Pix</div>
        <div className='card'> <FaRegCreditCard />
        Cartão </div>
      </div>
      <div className='ContainerTwo'>
      </div>
      </Main>
    </Container>
  )
}