

import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'


const HeaderContainer = styled.header`

    
    background-color:  white;
    display: flex;
    justify-content: center;
    padding: 10px;
  align-items: center;
  
  
    
 
  
`

function Header (){
    return(

        <HeaderContainer>
      
       <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
          
        </HeaderContainer>
    
  
    )
}

export default Header;