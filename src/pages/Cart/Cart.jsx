import { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'


const Cart = () => {

  const {cartItem,Product_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {Product_list.map((item,index)=>{
          if(cartItem[item.id]>0)
          {
            return(
              <div key={item.id}>
              <div className='cart-items-title cart-items-item'>
                    
                    <img src={item.image} alt=''/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItem[item.id]}</p>
                    <p>${parseFloat((item.price * cartItem[item.id]).toFixed(2))}</p>

                    <p onClick={()=>removeFromCart(item.id)}  className='cross'>x</p>
              </div>
              <hr />
              </div>
              
            )
          }
        })}
      </div>

      <div className='cart-bottom'>
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>
              <hr/>

              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr/>

              <div className="cart-total-details">
                <b>Total</b>
                <b>{getTotalCartAmount()}</b>
              </div>
              <hr/>

            </div>
            <button>Proceed to checkout</button>
          </div> 
          <div className="cart-promocode">
            <div>
              <p>if you have a code, Enter it here</p>
              <div className='cart-promocode-input'>
                <input type='text' placeholder='promocode'/>
                <button>Submite</button>
              </div>
            </div>
          </div>

      </div>
    </div>

  )
}

export default Cart