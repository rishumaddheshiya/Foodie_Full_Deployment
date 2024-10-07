import { createContext, useEffect, useState } from "react";
import { menu_list,menu_list2} from "../components/ExploreMenu/exploremenuitem";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [rest_list, setRestList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [itemCount, setItemCount]  = useState(0)
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        await loadCartData({ token: localStorage.getItem("token") })
        await loadCountItems({ token: localStorage.getItem("token") })
    }

    const removeFromCart = async (itemId) => {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        await loadCartData({ token: localStorage.getItem("token") })
        await loadCountItems({ token: localStorage.getItem("token") })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }
       const fetchRestList = async () => {
        const response = await axios.get(url + "/api/rest/listrest");
        setRestList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
        
        
 
       
    }
    const loadCountItems = async(token)=>{
         const response = await axios.post(url + "/api/cart/count", {}, { headers: token });
         setItemCount(response.data.items);
       
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            await fetchRestList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                
                await loadCartData({ token: localStorage.getItem("token") })
                await loadCountItems({ token: localStorage.getItem("token") })
            }
        }
        loadData()
         
    }, [])

    const contextValue = {
        url,
        food_list,
        rest_list,
        menu_list,
        menu_list2,
        cartItems,
        itemCount,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;