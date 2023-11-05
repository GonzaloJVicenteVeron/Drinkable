import React from "react";
import styled from "styled-components";
import heroImg from '../assets/hero.jpg';


const HeroStyles = styled.section `
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    
    

    p {
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    line-height: 23px;
    font-family: 'Kanit', sans-serif;
    padding-bottom: 5px;
}

    @media screen and (min-width: 320px) {
        img {
            max-width: 90vw;
        }
    }
    @media screen and (min-width: 430px) {
        p{
            padding: 10px
        }
        img {
            max-width: 70vw;
        }
    }

    @media screen and (min-width: 600px) {
        flex-direction: row;
        img {
            max-width: 50%;
            padding: 15px;
        }
    }

    @media screen and (min-width: 900px) {
        p {
            font-size: 25px
        }
    }

`

const Hero = () => {

    return (
        <HeroStyles>
            
            <p>
                Con mas de 20 años en el rubro bebidas, ofrecemos una amplia gama de marcas reconocidas a nivel internacional. 
                Contamos con personal capacitado para asesorarte y brindarte la mejor calidad y el mejor precio en el mercado.
                Actualmente, tenemos establecimientos a lo largo y a lo ancho de la Republica Argentina. Proximamente, nos expandimos para el mundo.

            </p>

            <img src= {heroImg} alt="heroimg" />

            
        </HeroStyles>
    )
};

export default Hero 