import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyleSheet } from '../constants/StyleSheet';
import Cardstyle4 from './Card/Cardstyle4';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducer/cartReducer';
import { addTowishList } from '../redux/reducer/wishListReducer';

const CategoryCart = ({data } : any) => {
    
    const dispatch = useDispatch();

    const navigation = useNavigation<any>();

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    return (
        <View style={[GlobalStyleSheet.container,{padding:0}]}>
            <View style={{  }}>
                <View style={[GlobalStyleSheet.container,{paddingHorizontal:30}]}>
                    {data.map((data:any, index:any) => {
                        return (
                            <View key={index} style={{marginBottom:35}}>
                                <Cardstyle4
                                    id={data.id}
                                    image={data.image}
                                    price={data.price}
                                    brand={data.brand}
                                    countnumber={data.countnumber} 
                                    title={data.title}
                                    onPress={() => navigation.navigate('ProductsDetails')}
                                    onPress2={() => {addItemToCart(data) ; navigation.navigate('MyCart')}}
                                    onPress5={() => addItemToWishList(data) }
                                    product={true}                                                               
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

export default CategoryCart