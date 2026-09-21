import React, { useState } from 'react'
import "./postDetails.css"
import { useParams } from 'react-router-dom'
import products from '../../../component/products/products'
import ImageMagnifier from '../../../component/imageMagnifier/imageMagnifier'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../component/context/Authcontext'

function PostDetails() {
    const {id}= useParams()
    const product = products.find((item)=> item.id === Number(id))
    const [item, setNumbersOfItem]= useState(1)
   const relatedItem= products.filter((item)=> item.itemType=== product.itemType && item.id !== product.id)
   const {addToCart,handleCart,increaseItem,decreaseItem,getQuantity} =useAuth()

  return (
    <div className='postDetails-section'>
        <div className='container'>
            <div className='item-info'>
                <div className='image'>
                    <ImageMagnifier src={product.image}/>
                </div>
                <div className='details'>
                    <div className='item-name'>
                        <h2>{product.title}</h2>
                        <h4>{product.description}</h4>
                        <p className='price'> {product.price} $</p>
                    </div>
                    <div className='numbersOfItem'>
                        <button onClick={()=>decreaseItem(product.id)}>-</button>
                        <p>{getQuantity(product.id)}</p>
                        <button  onClick={()=>increaseItem(product.id)}>+</button>
                    </div>
                    <img  src='/assets/installments.webp'/>
                    <button style={{backgroundColor:"white", color:"black", border:"1px solid"}} className='PostShop' onClick={()=>handleCart(product.id)}>{addToCart.some((findItem)=>findItem.id===product.id)?"Done":"Add to Cart"}</button>
                    <button className='PostShop'>Shop Now</button>
                    <div className='info'>
                        <div> <img src='/assets/icons/free delivery.png'  style={{width:"20px", height:"20px", textAlign:"center"}}/> <p>  Free Delivery on All Orders</p></div>
                        <div>
                            <img src='/assets/icons/free30day return.svg'  style={{width:"20px", height:"20px", textAlign:"center"}}/> 
                            <p>FREE 20-Day Returns</p>
                        </div>
                        <div>
                            <img src='/assets/icons/buy now pay later.svg'  style={{width:"20px", height:"20px", textAlign:"center"}}/>
                            <p>Buy Now, Pay Later</p>
                        </div>
                        <div>
                            <img src='/assets/icons/delivery in cairo.svg'  style={{width:"20px", height:"20px", textAlign:"center"}}/>
                            <p>Free Next Day Delivery in Cairo</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* You May Also Like section*/}
      <div className='YouMayAlsoLike'>
        <h2>You May Also Like </h2>
        <div  className='cards'>
            {relatedItem.map((item, id)=>{
                return(<div key={id} style={{padding:"10px", border:"none"}} className='card'>
                    <img style={{borderRadius:"4px"}} src={item.image}/>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <p>{item.price}$</p>
                    <button ><Link to={`/newCollection/${item.id}`}>Quick View</Link></button>

                </div>)
            })}
        </div>
      </div>
        </div>
    </div>
  )
}

export default PostDetails