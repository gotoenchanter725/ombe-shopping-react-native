import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text ,ScrollView} from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/reducer/cartReducer';
import Cardstyle1 from '../../components/Card/Cardstyle1';


const cardData =[
    {
        id:"0",
        image:IMAGES.item1,
        title:"Hot Creamy Cappuccino Latte Ombe ",
        price:"$12.6",
        discount:"8.3",
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


type MyCartScreenProps = StackScreenProps<RootStackParamList, 'MyCart'>;

const MyCart = ({navigation} : MyCartScreenProps)=> {

    const cart = useSelector((state:any) => state.cart.cart);
    const dispatch = useDispatch();

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const removeItemFromCart = (data: any) => {
        dispatch(removeFromCart(data));
    }

  return (
      <View style={{backgroundColor:colors.background,flex:1}}>
          <Header
            title='Shopping Cart'
            leftIcon='back'
            //titleLeft
            rightIcon1={'search'}
          />
            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:70}} showsVerticalScrollIndicator={false}>
                <View style={[GlobalStyleSheet.container,{padding:15}]}>
                    <View>
                        {cart.map((data:any, index:any) => {
                            return (
                                <View key={index} style={{marginBottom:10}}>
                                    <Cardstyle1
                                        discount={data.discount}
                                        id={data.id}
                                        image={data.image}
                                        price={data.price}
                                        title={data.title}
                                        onPress={() => navigation.navigate('ProductsDetails')}                                        
                                        onPress2={() => removeItemFromCart(data)}       
                                    />
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
           
                {cart.length > 0 ? 
                    (
                        
                        <View style={[GlobalStyleSheet.container,{backgroundColor:colors.card,borderBottomWidth:1,borderBlockColor:COLORS.borderColor}]}>
                            <Button
                                title='Proceed to Buy'
                                color={COLORS.primary}
                                text={COLORS.card}
                                onPress={() => navigation.navigate('DeliveryAddress')}
                                style={{borderRadius:48}}
                            />
                        </View>
                    )
                    :
                    (
                        <View style={[GlobalStyleSheet.container,{padding:0,position:'absolute',left:0,right:0,bottom:0,top:65}]}>
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
                                    <FeatherIcon color={COLORS.primary} size={24} name='shopping-cart'/>
                                </View>
                                <Text style={{...FONTS.h5,color:colors.title,marginBottom:8}}>Your shopping-cart is Empty!</Text>    
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
                        </View>
                    )
                }
            </View>
  )
}


export default MyCart