import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { popularProducts } from '../component/data';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductDetail.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 120px; /* Ajout de marge supérieure */
`;


const DetailWrapper = styled.div`
  padding: 20px;
  display: flex; /* Ajout de display flex */
  gap: 30px; /* Ajout de gap pour l'espace entre les deux parties */
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetail = () => {
  const { id } = useParams(); // Obtenez l'ID du produit de l'URL

  // Trouvez le produit correspondant dans la liste de produits
  const product = popularProducts.find(item => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <DetailWrapper>
          {/* Partie de l'image */}
          <div className="image-section">
            <ProductImage src={product.img} alt="Product Image" />
          </div>
          {/* Partie des détails du produit */}
          <div className='right'>
            <h1>{product.name}</h1>
            <span className="price">{product.price}</span>
            <p>{product.description}</p>
            <div className='quantity'>
              <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button className="add" >
              <AddShoppingCartIcon onClick={() => dispatch(addToCart({ id: product.id,name: product.name, img: product.img }))} /> ADD TO CART

            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item" >
                <BalanceIcon /> ADD TO COMPARE 
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </DetailWrapper>
      </Container>
    </>
  );
};

export default ProductDetail;

/*** */