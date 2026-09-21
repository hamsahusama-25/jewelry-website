import React, { useState } from 'react'
import './newCollection.css'
import PostDetails from './postdetails/postDetails';
import { Link } from 'react-router-dom';
import products from "../../component/products/products.js"
import { MdOutlineFavorite } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {useAuth} from "../../component/context/Authcontext.js"
import { GoHeart } from "react-icons/go";



function NewCollection() {
    const [favouritecount, setFavouritecount]=useState(0)
    const [cartCount, setCartCount]= useState(0)
    const [search, setSearch]=useState("")

    const {handleFavorite,favorite,addToCart,handleCart}= useAuth()
    const [selectCategory, setSelectCategory]= useState("All")

    const seacrchAboutProduct= products.filter((item)=>{
        const seacrchItem=item.title.toLowerCase().includes(search.toLowerCase())
        const  filterdProduct= selectCategory==="All"? products:item.category === selectCategory

        return seacrchItem &&filterdProduct

    }) 





    const newcollection=[
        "All","Kids","Men","Women"
    ]
   

  return (
    <div className='newCollection'>
        <div className='container'>
            <div className='filter'>
                <div className='search' >
                <input type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className='category'>
                    {newcollection.map((item,id)=>{
                        return(<div className={selectCategory===item?"active":""} onClick={()=>setSelectCategory(item)}>
                            <ul key={id} >{item}</ul>
                            
                        </div>)
                    })}
                </div>
            </div>
            <div className='collection-cards'>
                    {seacrchAboutProduct.map((item,id)=>{
                        return(<div key={id}>
                <div className='collection-card'>
                    <div className='icons'>
                        <button><Link  to={`/newCollection/${item.id}`}>buy Now</Link></button>
                        <button onClick={()=>handleCart(item.id)}> {addToCart.some((getItem)=>getItem.id===item.id)?"Done":"Add to Cart"}</button>
                    </div>
                    <img src={item.image}/>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p className='price'>{item.price} $<button style={{background:"transparent", fontSize:"20px"}} onClick={()=>handleFavorite(item.id)}>{favorite.includes(item.id)?<span style={{marginLeft:"10px"}}><FaHeart /> </span>:<span style={{marginLeft:"10px"}}> <GoHeart  /> </span>}</button></p>

                </div>
                        </div>)
                    })}
            </div>
            
        </div>
      
    </div>
  )
}

export default NewCollection
