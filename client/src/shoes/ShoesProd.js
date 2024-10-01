import React from 'react';
import Listshoes from './ListShoes';
import './ShoesProd.css';
import { Link } from 'react-router-dom';

const ShoesProd = () => {
    return (
        <div className="container">
            <div className="row">
                {Listshoes.map(product => (
                    <div className="col-sm-2" key={product.name}>
                        <div className="card" style={{ width: 150, height: "auto" }}>
                            <Link to={`/product/${product.name}`}> {/* Passer le nom du produit dans l'URL */}
                                <img src={product.img} alt='' />
                            </Link>
                            console.log(`${product.name}`);
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price} €</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default ShoesProd;
