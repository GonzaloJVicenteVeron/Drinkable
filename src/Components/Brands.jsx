import React from "react";
import styled from "styled-components";
import chandonLogo from '../assets/Chandon logo.png'
import jonniewLogo from '../assets/jonnie w (2).png'
import perignonLogo from '../assets/don perignon logo (1).png'


const BrandsStyles = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
        text-transform: uppercase;
        font-family: 'Kanit', sans-serif;
        font-weight: 700;
        padding: 5px 20px;
        color: white;
        text-align: center; 

    };

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 50px;
        padding-top: 20px;
    };

    img {
        max-width: 80%
    };

    @media screen and (min-width: 600px) {
        div {
            flex-direction: row;

        }

        img {
            max-width: 25%
        }
    }


`


const Brands = () => {
    return (
        <BrandsStyles>
            <h2>Marcas que confian en nosotros</h2>
            <div>
                <img src={chandonLogo} alt="chandonLogo" />
                <img src={jonniewLogo} alt="jonniewLogo" />
                <img src={perignonLogo} alt="perignonLogo" />
            </div>



        </BrandsStyles>
    );
};

export default Brands 