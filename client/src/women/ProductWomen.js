import React from 'react';
import './ProductWomen.css'
import products from './DataWomen'
import { Card } from 'react-bootstrap';
const ProductWomen = () => {
    

    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Produits pour femmes</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-2" key={product.id}>
                        <div className="card" style={{width:150,height:"auto"}}>
                            <img src={product.image} alt='' />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price} €</p>
                            </div>
                            <div>
                            <Card.Link href="#">Another Link</Card.Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductWomen;
