import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: rgb(0, 0, 0);
  width: 100%;
  height: 50px;
  padding-top: 10px;
  
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
} 

  h2 {
    color: white;
  }

  @media (min-width: 400px) {
    nav {
      padding: 0px 20px;
    }
  }

  @media (min-width: 400px) {
    nav {
      padding: 0px 25px;
    }
  }

  @media (min-width: 768px) {
    nav {
      padding: 0px 50px;
    }
  }

  @media (min-width: 1020px) {
    nav {
      padding: 0px 70px;
    }
  }


  ul {
    display: flex;
    gap: 10px;
  }

  @media (min-width: 400px) {
    ul {
      gap: 22px;
    }
  }

  @media (min-width: 1020px) {
    ul {
      gap: 90px;
    }
  }

  /* Estilos para enlaces en el encabezado */
  a {
    font-size: 14px;
    color: #ffffff; /* Color del enlace */
    text-decoration: none; /* Eliminar subrayado de enlaces */
    margin: 0; /* Margen horizontal entre enlaces */
  }

  @media (min-width: 400px) {
    a {
      font-size: 16px;
    }
  }

  @media (min-width: 1020px) {
    a {
      font-size: 18px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h2>DRINKABLE</h2>
        <ul>
          <a href="/">Inicio</a>

          <a href="/acerca">Productos</a>

          <a href="/contacto">Contacto</a>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;