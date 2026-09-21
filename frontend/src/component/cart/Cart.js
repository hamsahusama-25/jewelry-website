import React from 'react'
import products from '../products/products'
import { useParams } from 'react-router-dom'
import './cart.css'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { useAuth } from '../context/Authcontext';


function Cart({cartItems}) {

  const {removeCart,numberofItem,getQuantity,increaseItem,decreaseItem,totalItemPrice, totalPrice}= useAuth()


  const cartProduct= products.filter((item)=>cartItems.some((cartItem)=>cartItem.id===item.id))
  const numberOfItem= getQuantity(cartProduct.id)
  console.log(numberOfItem)
  return (
    <div className='cart-section'>
      <div className='container'>
        
        {cartProduct.map((item)=>{
          return(<div className='cart-item'>
            
            <div className='image'>
          <img src={item.image}/>
        </div>
        <div className='cart-details'>
          <h5>{item.title}</h5>
          <p>{item.category}</p>
          <p>{item.itemType}</p>
          <p>{item.price} $</p>
          <div className='cart-button-item'>
            <button onClick={()=>decreaseItem(item.id)}>-</button>
            <p className='numberOfItem'>{getQuantity(item.id)}</p>
            <button onClick={()=>increaseItem(item.id)}>+</button>
          </div>
          {/* <div>{getQuantity(item.id)}</div> */}
          
          <div className='total-price'>total {totalItemPrice(item.id)}$</div> 
        
        </div>
        <IoMdClose className='delete-item' onClick={()=>removeCart(item.id)}/>
          
          </div>
          )
        })}
        <h3 className='totalPrice'>Total {totalPrice()}$</h3>
        <button className='shopNow'>Check Out</button>
      </div>
      
    </div>
  )
}

export default Cart
