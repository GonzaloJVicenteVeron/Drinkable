import React from "react";
import styled from "styled-components";
import chandon from '../assets/imagenesdeproductos/Chandon.jpg'
import jonnyw from '../assets/imagenesdeproductos/Jonnie W.jpg'
import perignon from '../assets/imagenesdeproductos/Don perignone.jpg'

const ProductosStyles = styled.section `

    .principal {
        border: white solid;
        border-radius: 0.5rem;
        margin: 10px;
    }

    .title-productos {
        color: white;
        text-transform: uppercase;
        font-weight: 700px;
        text-align: center;
        padding: 10px;
    };

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
    };

    .product {
        border: white solid ;
        padding: 20px;
        margin: 10px;
        img {
            max-width: 70%;

        }
    }

    .descriptionproduct {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; 
        color: white ;
        padding: 10px;
        gap: 5px;
        h3 {
            text-align: center
        }
    }

    .imgproduct {
        display: flex;
            flex-direction: column;
            align-items: center;

    }

    @media screen and (min-width: 700px) {
        .container {
            flex-direction: row;
            
        }
    }
`


const Productos = () => {
    return (
        <ProductosStyles>
            <section className="principal">  
            <h2 className="title-productos">Productos Destacados</h2>
                <div className="container">
                    <div className="product">
                            <div className="imgproduct">
                                <img src={chandon} alt="" />
                            </div>

                            <div className="descriptionproduct">
                                <h3>Moet & Chandon Brut</h3>
                                <h2>USD 100</h2>
                            <h3>Champagne</h3>
                            <button>Comprar</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="imgproduct">
                                <img src={jonnyw} alt="" />
                            </div>

                            <div className="descriptionproduct">
                            <h3>Jonnie Walker</h3>
                                <h2>USD 150</h2>
                                <h3>Whisky</h3>
                                <button>Comprar</button>
                            </div>
                        </div>
                        <div className="product">
                            <div className="imgproduct">
                            <img src={perignon} alt="" />
                            </div>

                            <div className="descriptionproduct">
                                <h3>Champagne Don Perignon</h3>
                                <h2>USD 200</h2>
                            <h3>Champagne</h3>
                            <button>Comprar</button>
                            </div>
                    </div>

                </div>
            </section> 

        </ProductosStyles>
    );
};

export default Productos