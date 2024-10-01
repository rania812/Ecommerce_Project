/*import styled from "styled-components";
import { popularProducts } from "../component/data";
import Product from "./Product";

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

const Products = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
 */




import styled from "styled-components";
import { popularProducts } from "../component/data";
import Product from "./Product";

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

const Products = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;



 