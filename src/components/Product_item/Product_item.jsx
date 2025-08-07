import './Product_item.css';
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Product_item = ({id,name,price,description,image}) => {

    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
   <div className='Product-item'>
      <div className="Product-item-img-container">
        <img className='Product-item-img' src={image} alt=''/>
        {!cartItem[id]
            ?<img className='add' onClick={()=>addToCart(id)}  src={assets.add_icon}/>
            :<div className='Product-item-counter'>
               <img className='product-item-icons' onClick={()=>removeFromCart(id)} src={assets.sub_icon} alt=""/>
               <p>{cartItem[id]}</p>
               <img className='product-item-icons' onClick={()=>addToCart(id)} src={assets.add_icon} alt=''/>
              </div>

        }
      </div>

      <div className="Product-item-info">
        <div className="Product-item-name-rating">
          <p>{name}</p>
          <img className="Product-item-star" src={assets.rating_star} alt='rating stars'/>
        </div>
        <p className='Product-item-des'>{description}</p>
        <p className='Product-item-price'>${price}</p>
        <button className='Product-item-btn'>Add To Cart</button>

      </div>

   </div>
  )
}

export default Product_item