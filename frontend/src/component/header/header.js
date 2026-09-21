import React, { useState } from 'react'
import './header.css'
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import Cart from '../cart/Cart';
import products from '../products/products';
import Favourite from '../favourite/favourite';





function Header() {
    const navbar=[
        {Link:"/",label:"Home"},
        {Link:"/newCollection",label:"New Collection"},
        {Link:"/#contact",label:"Contact"},
    ]
    const [isOpen,setIsOpen]= useState(false)
    const {isAuthenticated,logout,favorite,addToCart}= useAuth()
    const [profileOpen ,setProfileOpen]= useState(false)
    const [iscartOpen, setIsCartOpen]=useState(false)
    const [isFavoriteOpen, setIsFavoriteOpen]=useState(false)
    
  return (
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <div className='logo'>
                    <img src='/assets/Glamora.png' />
                </div>
                <div  className={isOpen?"navbar active":"navbar"} >
                    {navbar.map((item,index)=>{
                        return(<div className='nav-link'>
                            <ul Link='index'><a href={item.Link}>{item.label}</a></ul>
                        </div>)
                    }
                    )}
                </div>
                <button className='menu-icon' onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen?<IoCloseOutline className='icon'/> :<IoMdMenu className='icon'  />}
                </button>
                {isAuthenticated?
                 <div className='signin-login'>
                    <div className='profile-section'>
                        <div className='profile'  onClick={()=>setProfileOpen(!profileOpen)}>
                            <LuUserRound style={{fontSize:"25px"}} />
                        </div>
                        {profileOpen&&<div className='profile-data'>
                            <LuUserRound className='profile' style={{fontSize:"65px"}}/>
                            <p>My Name</p>
                            <p>my Gmail</p>
                            <p>My Orders </p>
                            <p>My Favorite</p>
                            <button onClick={logout}>Log out</button>
                        </div>}
                    </div>
                    <div className='icon icon-cart'  onClick={()=>setIsCartOpen(!iscartOpen)} >
                        <HiOutlineShoppingBag className='' style={{fontSize:"25px",color:"white"}}/>
                        {iscartOpen&&<div onClick={(e) => e.stopPropagation()}>
                            <Cart cartItems={addToCart} />
                            </div>}
                        <span>{addToCart.length}</span>
                    </div>
                    <div className='icon'>
                        <GoHeart style={{fontSize:"25px" ,color:"white"}} onClick={()=>setIsFavoriteOpen(!isFavoriteOpen)}/>
                            {isFavoriteOpen&& <div onClick={(e)=> e.stopPropagation()}>
                                <Favourite favorite={favorite}/>
                                </div>}
                        <span>{favorite.length}</span>
                    </div>
                 </div>
                 

                 :<div className='signin-login'>
                    <Link to='/signin'><button>Sign in</button></Link>
                    <Link to='/login'><button>Login</button></Link>
                </div>}
            </div>
        </div>
      
    </div>
  )
}

export default Header
