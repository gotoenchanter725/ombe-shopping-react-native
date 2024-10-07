import { createSlice } from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList: [],
    },
    reducers:{
        addTowishList : (state:any,action:any) => {
            const itemInwishList = state.wishList.find((item:any) => item.id == action.payload.id);
            if(itemInwishList){
                itemInwishList.quantity++;
            }else{
                state.wishList.push({...action.payload,quantity:1})
            }
        },
        removeFromwishList:(state:any,action:any) => {
            const removeFromwishList = state.wishList.filter((item:any) => item.id !== action.payload);
            state.wishList = removeFromwishList;
        },
        incrementQuantity : (state:any,action:any) => {
            const itemInwishList = state.wishList.find((item:any) => item.id == action.payload.id);
            itemInwishList.quantity++;
        },
        decrementQuantity : (state:any,action:any) => {
            const itemInwishList = state.wishList.find((item:any) => item.id == action.payload.id);
            if(itemInwishList.quantity == 1){
                const removeFromwishList = state.wishList.filter((item:any) => item.id !== action.payload.id);
                state.wishList = removeFromwishList;
            }else{
                itemInwishList.quantity--;
            }
        }
    }
});

export const {addTowishList,removeFromwishList,incrementQuantity,decrementQuantity} = wishListSlice.actions;

export default wishListSlice.reducer;