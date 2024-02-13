import { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { ArticulosContext } from './context/providerArticulos';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartWidget = () => {

  const { items } = useContext(ArticulosContext)
  console.log(items.length, 'items')

  const [open, setOpen] = useState(false)



  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const totalPrecio = items.reduce((total, item) => total + item.precio, 0);


  const notify = (item) =>
    toast.success('Se realizo la compra correctamente ' + item, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>


      <div>
        <button className='btn mt-4' onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-cart-shopping"></i> {items.length}
        </button>
      </div>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=''>
            {items.map((ele, index) => (
              <div className='cajitaCar d-flex justify-content-around' key={index}>
                <p>{ele.alt}</p>
                <p>{ele.precio}</p>
              </div>
            ))}
          </div>
          <p>Total: {totalPrecio.toFixed(2)}</p> {/* Mostrar el total de precios */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); notify(''); }}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}