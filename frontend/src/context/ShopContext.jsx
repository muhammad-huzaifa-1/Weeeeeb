import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const navigate = useNavigate();
    // let cate = localStorage.getItem('category')
    const [latestProducts, setLatestProducts] = useState();
    const [ShowSeacrh, setShowSearch] = useState('hidden')
    const [allCollection, setAllCollection] = useState([]);
    const [ProductCategory, setProductCategory] = useState();
    const [list, setList] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartData, setCartData] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [TotalFee, setTotalFee] = useState(0);
    const [bestSeller,setBestSeller] = useState([]);
    const currency = "$";
    const deliveryFee = 10;

    let tostNotifications = null;
    let isPresented = false;

    const showTosts = async (type,error)=>{
        const user = await JSON.parse(localStorage.getItem('user'));
        switch(type){
            case 'success':
                tostNotifications={
                    id:list.length+1,
                    title:"Praduct Added to Cart",
                    icon:"fa-circle-check",
                    color:"text-green-700"
                };
                break;
            
            case 'error':
                tostNotifications={
                    id:list.length+1,
                    title:"Product Already Added",
                    icon:"fa-circle-exclamation",
                    color:"text-red-700"
                };
                break;

            case 'delete':
                tostNotifications={
                    id:list.length+1,
                    title:"Product Removed from Cart",
                    icon:"fa-triangle-exclamation",
                    color:"text-yellow-500"
                };
                break;

            case "checkoutError":
                tostNotifications={
                    id:list.length+1,
                    title:"No Product in Cart",
                    icon:"fa-circle-xmark",
                    color:"text-red-700"
                };
                break;

            case "AdminDelete":
                tostNotifications={
                    id:list.length+1,
                    title:"Item removed from Store",
                    icon:"fa-circle-xmark",
                    color:"text-red-700"
                };
                break;

            case "register":
                tostNotifications={
                    id:list.length+1,
                    title:`Welcome! ${await user?user.name:"Guest user"}`,
                    icon:"fa-circle-check",
                    color:"text-green-700"
                };
                break;

            case "logout":
                tostNotifications={
                    id:list.length+1,
                    title:`You are logged out!`,
                    icon:"fa-circle-check",
                    color:"text-green-700"
                };
                break;

            case "plsLogin":
                tostNotifications={
                    id:list.length+1,
                    title:`Login to Add Items!`,
                    icon:"fa-circle-xmark",
                    color:"text-red-700"
                };
                break;

            case "loginError":
                tostNotifications={
                    id:list.length+1,
                    title:`${error}`,
                    icon:"fa-circle-xmark",
                    color:"text-red-700"
                };
                break;

            case "RegisterError":
                tostNotifications={
                    id:list.length+1,
                    title:`${error}`,
                    icon:"fa-circle-xmark",
                    color:"text-red-700"
                };
                break;

            case "placeOrder":
                tostNotifications={
                    id:list.length+1,
                    title:`Feature is not available in Demo!`,
                    icon:"fa-triangle-exclamation",
                    color:"text-yellow-500"
                };
                break;

            case "productAdd":
                tostNotifications={
                    id:list.length+1,
                    title:`Product Added to Collection!`,
                    icon:"fa-circle-check",
                    color:"text-green-700"
                };
                break;

            case "addError":
                tostNotifications={
                    id:list.length+1,
                    title:`Opp's Something went wrong!`,
                    icon:"fa-triangle-exclamation",
                    color:"text-yellow-500"
                };
                break;
        }

        setList([...list,tostNotifications])
    }

    const getProducts = async()=>{
        let response = await fetch('https://weeeeeb-final.vercel.app/fetchProduct');
        response = await response.json();
        setLatestProducts(response.slice(0,10))
        setBestSeller(response.slice(10,15));
        setAllCollection(response)
      }
    const user = JSON.parse(localStorage.getItem('user'));
    const addToCart = async(id)=>{
        if(user){
            cartData.forEach((product)=>{
                if(product._id === id){
                    isPresented = true;
                    showTosts("error");
                }
            })
    
            if(isPresented === false){
                navigate('/Cart')
                let result = await fetch(`https://weeeeeb-final.vercel.app/getbyId/${id}`);
                result = await result.json();
                if(result){
                    showTosts('success');
                    setCartData([...cartData, result]);
                    setCartCount(cartCount+1)
                    let total = subTotal+result.price
                    setSubTotal(total);
                    setTimeout(()=>{
                        setTotalFee(total+10)
                    },1000);
                    
                }
            }
        }else{
            showTosts('plsLogin')
        }
    }

    const value = {
        products,
        currency,
        deliveryFee,
        latestProducts,
        getProducts,
        setLatestProducts,
        ProductCategory,
        setProductCategory,
        allCollection,
        setAllCollection,
        ShowSeacrh,
        setShowSearch,
        addToCart,
        cartData,
        cartCount,
        setCartData,
        setCartCount,
        setSubTotal,
        subTotal,
        TotalFee,
        setTotalFee,
        list,
        setList,
        showTosts,
        bestSeller
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;
