import React, { useState } from 'react'
import {  useTheme } from '@react-navigation/native';
import { View ,ScrollView, Text} from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { COLORS, FONTS } from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartReducer';
import { removeFromwishList } from '../../redux/reducer/wishListReducer';
import Cardstyle2 from '../../components/Card/Cardstyle2';



const cardData =[
    {
        id:"0",
        image:IMAGES.item1,
        title:"Hot Creamy Cappuccino Latte Ombe",
        price:"$12.6",
        brand:"Coffee",
    },
    {
        id:"1",
        image:IMAGES.item2,
        title:"Hot Cappuccino Latte with Mocha",
        price:"$13.6",
        brand:"Coffee",
    },
    {
        id:"2",
        image:IMAGES.item3,
        title:"Sweet Lemon Indonesian Tea",
        price:"$51.6",
        brand:"Tea, Lemon",
    },
    {
        id:"3",
        image:IMAGES.item13,
        title:"Arabica Latte Ombe Coffee",
        price:"$51.6",
        brand:"Coffee",
    },
    {
        id:"4",
        image:IMAGES.item14,
        title:"Original Latte Ombe Hot Coffee ",
        price:"$51.6",
        brand:"Coffee",
    },
]

type WishlistScreenProps = StackScreenProps<RootStackParamList, 'Wishlist'>;

const Wishlist = ({navigation} : WishlistScreenProps) => {

    const wishList = useSelector((state:any) => state.wishList.wishList);
    const dispatch = useDispatch();

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    const removeItemFromWishList = (data: any) => {
        dispatch(removeFromwishList(data));
    }

  return (
     <View style={{backgroundColor:colors.background,flex:1}}>
        <Header
          title='My Wishlist'
          leftIcon={'back'}
          rightIcon1={'search'}
          //titleLeft
        />
        <ScrollView contentContainerStyle={{flexGrow:1,}}>
            <View style={[GlobalStyleSheet.container,{padding:15,alignItems:'center'}]}>
                  <View>
                      {wishList.map((data:any, index:any) => {
                          return (
                            <View key={index} style={{marginBottom:15}}>
                                <Cardstyle2
                                    id={data.id}
                                    brand={data.brand}
                                    image={data.image}
                                    price={data.price}
                                    countnumber={data.countnumber} 
                                    title={data.title}
                                    onPress={() => navigation.navigate('ProductsDetails')}                                        
                                    // onPress2={() => addItemToWishList(data)}                                
                                />
                            </View>
                          )
                      })}
                    {wishList.length === 0 && 
                        <View
                            style={{
                                flex:1,
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <View
                                style={{
                                    height:60,
                                    width:60,
                                    borderRadius:60,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    backgroundColor:COLORS.primaryLight,
                                    marginBottom:20,
                                }}
                            >
                                <FeatherIcon color={COLORS.primary} size={24} name='heart'/>
                            </View>
                            <Text style={{...FONTS.h5,color:colors.title,marginBottom:8}}>Your Wishlist is Empty!</Text>    
                            <Text
                                style={{
                                    ...FONTS.fontSm,
                                    color:colors.text,
                                    textAlign:'center',
                                    paddingHorizontal:40,
                                    marginBottom:30,
                                }}
                            >Add Product to you favourite and shop now.</Text>
                        </View>
                    }
                  </View>
              </View>
        </ScrollView>
     </View>
  )
}

export default Wishlist