import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer `
    background-color: black;
    h2, h3 {
        color: white;
        text-transform: uppercase;

    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        text-align: center;
    }

    @media screen and (min-width: 900px) {
        footer {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            margin: 10px;
        }
            
        
    }
`

const Footer = () => {
    return (
        
        <FooterStyles>
            <footer>
                <h3>Copyright 2023</h3>
                <h2>DRINKABLE</h2>
                <h3>Todos los derechos reservados</h3>
            </footer>
        </FooterStyles>

    );
};

export default Footer