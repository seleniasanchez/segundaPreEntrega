import React, { useContext } from 'react';
import tb1 from '../../imagenes/trajeDeBaño/tb1.jpg'
import tb2 from '../../imagenes/trajeDeBaño/tb2.jpg'
import tb3 from '../../imagenes/trajeDeBaño/tb3.jpg'
import tb4 from '../../imagenes/trajeDeBaño/tb4.jpeg'
import tb5 from '../../imagenes/trajeDeBaño/tb6.jpeg'
import tb6 from '../../imagenes/trajeDeBaño/tb7.jpeg'
import tb7 from '../../imagenes/trajeDeBaño/tb8.jpeg'
import tb8 from '../../imagenes/trajeDeBaño/tb9.jpeg'
import tb9 from '../../imagenes/trajeDeBaño/tb10.jpeg'
import tb10 from '../../imagenes/trajeDeBaño/tb11.jpeg'
import tb11 from '../../imagenes/trajeDeBaño/tb12.jpeg'
import tb12 from '../../imagenes/trajeDeBaño/tb13.jpeg'
import tb13 from '../../imagenes/trajeDeBaño/tb14.jpeg'
import tb14 from '../../imagenes/trajeDeBaño/tb15.jpg'
import { ArticulosContext } from '../context/providerArticulos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const TrajesDeBaño = () => {

    const { setItems, items } = useContext(ArticulosContext)

    const imagenes = [
        {
            id: 1,
            url: tb1,
            alt: 'Conjunto Elena',
            precio: 45.99,
            descripcion: 'Conjunto de bikini elegante y cómodo.'
        },
        {
            id: 2,
            url: tb2,
            alt: 'Conjunto Comoda',
            precio: 39.99,
            descripcion: 'Bañador de una pieza con diseño moderno y funcional.'
        },
        {
            id: 3,
            url: tb3,
            alt: 'Conjunto Coquette',
            precio: 49.99,
            descripcion: 'Bikini de dos piezas con estampado floral y detalles de encaje.'
        },
        {
            id: 4,
            url: tb4,
            alt: 'Conjunto Casual',
            precio: 55.99,
            descripcion: 'Conjunto de bikini cómodo y casual para un día en la playa.'
        },
        {
            id: 5,
            url: tb5,
            alt: 'Conjunto Sifri',
            precio: 42.99,
            descripcion: 'Bañador de una pieza con tirantes ajustables y diseño versátil.'
        },
        {
            id: 6,
            url: tb6,
            alt: 'Conjunto Roxy',
            precio: 59.99,
            descripcion: 'Bikini de colores vibrantes y tejido suave para mayor comodidad.'
        },
        {
            id: 7,
            url: tb7,
            alt: 'Conjunto Mama sexy',
            precio: 49.99,
            descripcion: 'Bikini elegante y sexy con detalles de encaje y corte favorecedor.'
        },
        {
            id: 8,
            url: tb8,
            alt: 'Conjunto Millo',
            precio: 37.99,
            descripcion: 'Bañador de una pieza con estampado tropical y tejido resistente al agua.'
        },
        {
            id: 9,
            url: tb9,
            alt: 'Conjunto Basica',
            precio: 33.99,
            descripcion: 'Bikini básico y versátil para cualquier ocasión.'
        },
        {
            id: 10,
            url: tb10,
            alt: 'Conjunto Presa',
            precio: 47.99,
            descripcion: 'Bikini deportivo con diseño ajustado y tejido transpirable.'
        },
        {
            id: 11,
            url: tb11,
            alt: 'Conjunto Hija',
            precio: 39.99,
            descripcion: 'Conjunto de bikini juvenil con estampado divertido y colores vivos.'
        },
        {
            id: 12,
            url: tb12,
            alt: 'Conjunto Puerto',
            precio: 52.99,
            descripcion: 'Bañador de una pieza con diseño elegante y tejido de secado rápido.'
        }
    ];


    const notify = (item) =>
        toast.success('Se agrego correctamente ' + item, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        const handleItems = (alt, precio) => {
            notify(alt)
            // Copia el estado actual de los artículos
            const nuevosArticulos = [...items];
            // Agrega el artículo seleccionado a la lista de artículos
            nuevosArticulos.push({ alt, precio });
            // Actualiza el estado de los artículos
            setItems(nuevosArticulos);
        }


    return (
        <>
            <div className='d-flex justify-content-center py-3'>

                <h1>Trajes de baño</h1>
            </div>
            <div className='imagens d-flex justify-content-center'>

                {imagenes.map(imagen => (
                    <div className=' catalogo' onClick={() => handleItems(imagen.alt, imagen.precio)}>
                        <div className='decripcionCatalogo'>
                        <p> <b>{imagen.alt}</b>  </p>  
                            <p>{imagen.descripcion}</p>
                                               


                        </div>

                        <img key={imagen.id} src={imagen.url} alt={imagen.alt} />
                        <p><u>Precio: {imagen.precio}</u></p>
                    </div>

                ))}
            </div>

            <ToastContainer />
        </>

    )
}