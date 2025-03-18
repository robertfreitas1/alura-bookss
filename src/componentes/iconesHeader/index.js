
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`

margin: 20px;

align-items: center;
justify-content: center;

`;

const Icon = styled.ul`
display: flex;
gap:  50px;


`
const icones = [perfil, sacola]





function IconesHeader (){
    return(
        <Icon>
        { icones.map( (icone) => (
          <Icone><img src={icone}></img></Icone>
        )) }
    </Icon>
    )
}
export default IconesHeader;