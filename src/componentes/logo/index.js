
import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LoContainer = styled.div`
    display: flex;
    font-size: 30px;
 gap: 12px;
`




function Logo(){

    return (
        <LoContainer>
        <img src={logo}  alt="logo" />
        <p> <strong>Alura</strong>Books</p>

       
        </LoContainer>  
    )
}
export default  Logo;