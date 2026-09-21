import React from 'react'
import products from '../products/products'
import '../cart/cart.css'
import { IoMdClose } from "react-icons/io";
import { useAuth } from '../context/Authcontext';



function Favourite({favorite}) {
    const{removeFavourite} = useAuth()

    const product= products.filter((item)=>favorite.includes(item.id))

  return (
    <div>
      <div className='cart-section'>
            <div className='container'>
              
              {product.map((item)=>{
                return(<div className='cart-item'>
                  
                  <div className='image'>
                <img src={item.image}/>
              </div>
              <div className='cart-details'>
                <h5>{item.title}</h5>
                <p>{item.category}</p>
                <p>{item.itemType}</p>
                <p>{item.price} $</p>
                
                
              
              </div>
                      <IoMdClose className='delete-item' onClick={()=>removeFavourite(item.id)}/>
                </div>
                )

              } )}
            </div>
            
          </div>
    </div>
  )
}

export default Favourite
