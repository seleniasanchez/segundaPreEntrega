import React, { useContext, useState } from 'react';
import { TrajesDeBaño } from '../jDatos/imagenesComponent';
import { RopaInterior } from '../jDatos/ropaInterior';
import { ArticulosContext } from '../context/providerArticulos';


export const Inicio = ({cuerpo, setCuerpo, cuerpoRender}) => {

 

    return (
        <>

            <div>
                {/* <div className='imagens d-flex justify-content-center'>

                    {cuerpoRender.map((cuer) => (
                        <button key={cuer}
                            onClick={() => setCuerpo(cuer)}
                            className={cuerpo === cuer ? ' buttonSelect botonSeletActive mx-2 px-2 py-2' : ' buttonSelect  mx-2 px-2 py-2 '}

                        >
                            {cuer.toLocaleLowerCase()}
                        </button>
                    ))}
                </div> */}



                <div className="productos">
                    {cuerpo === 'Ropa Interior' && (
                        <RopaInterior cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoRender={cuerpoRender}  />
                    )}

                    {cuerpo === 'Trajes de Baños' && (
                        <TrajesDeBaño cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoRender={cuerpoRender}  />
                    )}


                </div>
            </div>

        </>
    )
}