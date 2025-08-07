import React, { useContext, useRef } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import Product_item from '../Product_item/Product_item';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDisplay = ({ category }) => {
  const { Product_list } = useContext(StoreContext);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="Product-display" id="Product-display">
      <h2>Products </h2>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="Product-display-list" ref={scrollRef}>
          {Product_list.map((item, index) => {
            if (category === 'All' || category === item.category) {
              return (
                <div key={index} className="product-scroll-item">
                  <Product_item
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
      <hr/>
    </div>
  );
};

export default ProductDisplay;
