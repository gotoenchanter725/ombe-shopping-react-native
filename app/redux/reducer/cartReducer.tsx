import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers:{
        addToCart : (state:any,action:any) => {
            const itemInCart = state.cart.find((item:any) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state:any,action:any) => {
            const removeFromCart = state.cart.filter((item:any) => item.id !== action.payload.id);
            state.cart = removeFromCart;
        },
        incrementQuantity : (state:any,action:any) => {
            const itemInCart = state.cart.find((item:any) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrementQuantity : (state:any,action:any) => {
            const itemInCart = state.cart.find((item:any) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const removeFromCart = state.cart.filter((item:any) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            }else{
                itemInCart.quantity--;
            }
        }
    }
});

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;