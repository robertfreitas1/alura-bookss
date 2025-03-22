import { livros } from "./dadosUltimosLancamentos";
import {Titulo} from '../Titulo'
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../images/livro2.png'
import styled from 'styled-components'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

// ...

function UltimosLancamentos (){
    return(

        <UltimosLancamentosContainer>
            <Titulo cor="#eb9b00" tamanhoFonte="36px"  alinhamento="center" >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer> 

            {livros.map(livro=> (
                
                <img src={livro.src}></img>
            ))}
            </NovosLivrosContainer> 
          <CardRecomenda
             titulo="Talvez você se interesse por..."
             subtitulo="Angular 11"
             descricao="Contruindo uma aplicação com a plataforma google"
             img={imagemLivro
             }
          />

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;