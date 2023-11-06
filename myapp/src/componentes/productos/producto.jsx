import React from 'react'

const Producto = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_895718-MLA40186103130_122019-O.webp" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nombre: {props.nombre}</h5>
                <p className="card-text">Descripcion: {props.descripcion}</p>
                <p className="card-text">Precio: {props.precio}</p>
                <p className="card-text">SKU: {props.sku}</p>
                <p className="card-text">Stock: {props.stock}</p>
            </div>
        </div>

    )
}
export default Producto;



