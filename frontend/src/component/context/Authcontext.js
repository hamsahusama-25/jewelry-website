import {  useState, useContext, createContext } from "react";
import products from "../products/products";

const AuthContext= createContext()

export function AuthProvider({children}){

    const [user,setUser] = useState("null")
    const [log,setLog] =useState(false)
    const [favorite, setFavourite]= useState([])
    const [addToCart, setAddToCart]=useState([])


    function login(userdata){
        setUser(userdata)
        setLog(true)
    }
    function logout(){
        setUser(null)
        setLog(false)
        console.log("done")
    }
    const isAuthenticated= user!== null;

    // handle favourite
    function handleFavorite(id){
        setFavourite((pre)=>{
            if(pre.includes(id)){
                return pre.filter((itemId)=>itemId !== id)
            }else{
                return [...pre, id]
            }
        })
    }
    function handleCart(id){
        setAddToCart((pre)=>{
            const isItemExist= pre.find((item)=>item.id===id)
            if(isItemExist){
                return pre.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:item)
            }

            return [...pre, {id:id, quantity:1}]
        })
    }
    function increaseItem(id){
        setAddToCart((pre)=>{
            
                return pre.map((item)=>item.id ===id?{...item, quantity: item.quantity+1}:item)
            
        } 
        )
    }

    function decreaseItem(id){
        setAddToCart((pre)=>{
            return pre.map((item)=>item.id===id&& item.quantity>1 ?{...item, quantity:item.quantity-1}:item)
        })

    }
    function getQuantity(id){
        const findCart= addToCart.find((item)=>item.id===id)
        return  findCart?findCart.quantity:1;
    }

    function removeCart(id){
        setAddToCart((pre)=>{
            return pre.filter((item)=>item.id!==id)
        })
    }

    function totalItemPrice(id){
        const product =products.find((item)=>item.id===id)
        const price = addToCart.find((item)=>item.id===id)
        
        return product.price * price.quantity
    }

    function totalPrice(){
        return addToCart.reduce((total,current)=>{
        const product= products.find((item)=>item.id===current.id)
        return total + current.quantity* product.price
    },0)
    }


    function removeFavourite(id){
        setFavourite((pre)=>{
            if(pre.includes(id)){
                return pre.filter((item)=> item !==id)
            }
        })

    }
    return(
        <AuthContext.Provider value={{user,login,log,logout,isAuthenticated,favorite,handleFavorite,addToCart,handleCart,removeCart,decreaseItem,increaseItem,getQuantity, totalItemPrice,totalPrice, removeFavourite}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}