import styled from "styled-components"
import { theme } from "../../pages/styles";



export const HeaderStyled = styled.header`
height:  10vh;
width: 100vw;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr; 
justify-items: end;
align-items: center;
background-color: ${theme.colors.cinza["500"]};

div.sender-profile {
      
}

div.action-menu {

        width: 100px;
}

`;

export const LogoLabenu = styled.img`

width: 28.02px;
height: 28.64px;

`;

export const Entrar = styled.span`

`;
export const Logout = styled.span`

`;

