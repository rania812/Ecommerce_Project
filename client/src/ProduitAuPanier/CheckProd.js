/*
import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.css';
import im2 from './Half.jpeg';
const Cart = () => {
  const data = [
    {
      id: 1,
      image: im2,
      name: 'iheb',
      desc: 'this description',
      price: 123
    }
  ]

  return (
    <div className="cart">
      <h1>title</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt="" />
          <div className="details">
            <h1>{item.name}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon />
        </div>
      ))}
    </div>
  )

}

export default Cart
*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice'

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.css'; // Assurez-vous d'importer le fichier CSS approprié

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  // Créer un objet pour stocker les quantités de chaque produit
  const itemCounts = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});



  return (
    <div className='cart'>

      {cartItems.map((item, index) => (
        // Afficher seulement si c'est le premier élément ou si l'ID précédent est différent
        index === 0 || cartItems[index - 1].id !== item.id ? (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.name} className='c-image' /> {/* Assurez-vous d'utiliser la bonne image */}
            <div className="details">
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
              <p>{item.description?.substring(0, 100)}</p> {/* Utilisez item.description au lieu de item.desc */}
              <div className="price">
                Quantité: {itemCounts[item.id]}
              </div>
            </div>
            <button className='btn btn-warning btn-sm' onClick={() => dispatch(removeFromCart(item.id))}>            <DeleteOutlinedIcon />
            </button>
          </div>
        ) : null // Si le produit a déjà été affiché, ne rien rendre
      ))}
    </div>
  );
};

export default Cart;






















/*
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { removeFromCart } from '../redux/cartSlice'
import { DeleteOutlinedIcon } from '@mui/icons-material/DeleteOutlined';

const CheckProd = () => {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  // Créer un objet pour stocker les quantités de chaque produit
  const itemCounts = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1
    return acc
  }, {})

  return (
    <div>
      {cartItems.map((item, index) => (
        // Afficher seulement si c'est le premier élément ou si l'ID précédent est différent
        index === 0 || cartItems[index - 1].id !== item.id ? (
          <div key={item.id} className='d-flex'>
            <img src={item.img} alt='' className='c-image' />
            <div>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
              <p>Quantité: {itemCounts[item.id]}</p>
              <button className='btn btn-warning btn-sm' onClick={() => dispatch(removeFromCart(item.id))}>remove</button>
            </div>
          </div>
        ) : null   // Si le produit a déjà été affiché, ne rien rendre
      ))}
    </div>
  )
}

export default CheckProd
*/