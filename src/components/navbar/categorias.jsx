
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget';
import { ArticulosContext } from '../context/providerArticulos';

export const Categorias = ({ cuerpo, setCuerpo, cuerpoRender}) => {
 const {setItems, items} = useContext(ArticulosContext)
 return (
    <div className='d-flex'>
      <CartWidget articulos={items} setArticulos={setItems} />

      {cuerpoRender.map((cuer) => (
        <div key={cuer} className='categorias d-flex pt-4'>
          <NavLink
            to={`/${cuer.toLocaleLowerCase()}`}
            activeClassName="active"
            onClick={() => setCuerpo(cuer)}
          >
            {cuer}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

