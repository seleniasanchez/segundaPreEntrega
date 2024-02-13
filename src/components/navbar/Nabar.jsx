import React, { useContext, useState } from 'react';
import '../../estilos/estilos.css'
import logo from '../../header/logoreason.png'
import { Categorias } from "./categorias";
import { ArticulosContext } from '../context/providerArticulos';

export const Navbar = ({cuerpo, setCuerpo, cuerpoRender,articulos, setArticulos}) => {

    const { items } = useContext(ArticulosContext);

    console.log(items, 'articulos')
    return (
        <>
            <header className="header   d-flex ">

                <div className="navHeader ps-5  d-flex justify-content-between">
                    <img src={logo} />
                    <div>
                    <Categorias cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoRender={cuerpoRender} />
                </div>
                </div>

                

            </header>


        </>
    )
}