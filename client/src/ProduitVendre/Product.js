import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
 
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.clicked ? "red" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;  
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.3);  
  }
`;

const Message = styled.div`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.show ? "block" : "none")};
`;


const Product = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    setShowMessage(true); // Show message when item is added to cart
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  const handleHeartClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} /> 
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleAddToCart}/>
        </Icon>
        <Link to={`/detail/${item.id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon clicked={clicked} onClick={handleHeartClick}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Message show={showMessage}>Item added to cart successfully</Message>
    </Container>
  );
};

export default Product;
