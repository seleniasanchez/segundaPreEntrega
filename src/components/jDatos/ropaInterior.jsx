import React, { useContext, useEffect, useState } from 'react';
import { ArticulosContext } from '../context/providerArticulos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RopaInterior = () => {

  const { setItems, items } = useContext(ArticulosContext)

  const [datos, setDatos] = useState([])




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('jsonListArticulos.json');
        const data = await response.json('../../../public/jsonListArticulos.json');
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar el JSON:', error);
      }
    }

    fetchData();
  }, []);


  console.log(datos, 'datos')

  const notify = (item) =>
    toast.success('Se reasignó correctamente ' + item, {
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

        <h1>Ropa interior</h1>
      </div>


       <div className='imagens d-flex justify-content-center'>

                {datos.map(imagen => (
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