
import styled from 'styled-components';


// Estilizando cada item da lista (li)
const Opcao = styled.li`
  position: relative;
  min-width: 120px;
  font-size: large;
  font-weight: 700;
  padding-bottom: 5px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Criando a linha animada abaixo do item */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #000; /* Cor da linha */
    transition: width 0.7s ease-in-out; /* Suaviza a animação */
  }

  /* Efeito de hover: faz a linha crescer */
  &:hover::after {
    width: 100%;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  gap: 50px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']



function OpcoesHeader (){
return (
  <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao key={index}>{texto}</Opcao> // Removido <p> desnecessário
      ))}
    </Opcoes>
)
}

export default OpcoesHeader;