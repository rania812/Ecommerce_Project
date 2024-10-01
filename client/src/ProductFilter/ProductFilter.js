/* import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Products from '../ProduitVendre/Products';

const FilterContainer = styled.div`
  margin-top: 20px;
`;

const ProductFilter = () => {
    const titleref = useRef()


    return (
        <div>
            <FilterContainer>
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={(e) => handlefilter('title', e.target.value)}
                    ref={titleref}
                />
            </FilterContainer>
            <Products searchTerm={searchTerm} />
        </div>
    );
};

export default ProductFilter;
  */