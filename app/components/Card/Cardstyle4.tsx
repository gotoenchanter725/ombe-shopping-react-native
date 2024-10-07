import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS,FONTS } from '../../constants/theme'
import { IMAGES } from '../../constants/Images'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromwishList } from '../../redux/reducer/wishListReducer'
import LikeBtn from '../LikeBtn'

type Props = {
    id : string;
    title : string;
    btntitle ?: string;
    price : string;
    brand ?: string;
    image ?: any;
    product ?: any;
    Myorder ?: any;
    completed ?: any;
    countnumber ?: string;
    onPress ?: (e : any) => void,
    onPress2 ?: any,
    onPress3 ?: (e : any) => void,
    onPress4 ?: (e : any) => void,
    onPress5 ?: (e : any) => void,
}

const Cardstyle4 = ({id,title,image,countnumber,price,onPress,brand,product,onPress2,Myorder,btntitle,completed,onPress5,onPress3,onPress4} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [show, setshow] = useState(false)

    const dispatch = useDispatch();

    const wishList = useSelector((state:any) => state.wishList.wishList);

    const inWishlist = () => {
        var temp = [] as any;
        wishList.forEach((data:any) => {
            temp.push(data.id);
        });
        return temp;
    }

    const removeItemFromWishList = () => {
        dispatch(removeFromwishList(id as any));
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress} 
            style={{flexDirection:'row',width:'100%',alignItems:'flex-start'}}
        >
            <View style={{width:'40%',alignItems:'center'}}>
                <View 
                    style={{
                        height:undefined,
                        width:'100%',
                        backgroundColor:COLORS.primary,
                        borderRadius:22,
                        aspectRatio:1/1.2,
                        alignItems:'center',
                        justifyContent:'center',
                        overflow:'hidden'
                    }}
                >
                    <Image
                        style={{height:undefined,width:'100%',aspectRatio:1/1.2,}}
                        source={image}
                    />
                </View>
                <View
                    style={{
                        borderRadius:19,
                        backgroundColor:'#FF8730',
                        width:70,
                        height:30,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        gap:10,
                        position:'absolute',
                        bottom:-15
                    }}
                >
                        <Image
                            style={{height:13,width:13}}
                            source={IMAGES.Star4}
                        />
                        <Text style={[styles.brandsubtitle3,{fontSize:16,color:COLORS.card,lineHeight:34}]}>3.8</Text>
                </View>
            </View>
            <View 
                style={{
                    width:'60%',
                    paddingHorizontal:20,
                    paddingRight:product ? 10 : 0
                }}
            >
                <View>
                    <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title,paddingRight:40}}>{title}</Text>
                    <Text style={{...FONTS.fontRegular,fontSize:12,color:theme.dark ? 'rgba(255,255,255,.7)':'#6A6A6A',marginTop:5}}>{brand}</Text>
                </View>
                <View style={[GlobalStyleSheet.flex,{marginTop:Myorder ? 45:30}]}>
                    <Text style={{...FONTS.fontSemiBold,fontSize:18,color:colors.title}}>{price}</Text>
                    {product ? 
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {setshow(!show) ; onPress2() }} 
                            style={{
                                padding:10,
                                paddingHorizontal:25,
                                backgroundColor:show ? COLORS.primary :'#E5F5F0',
                                borderRadius:30,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center',
                                gap:10
                            }}
                        >
                            <Image
                                style={[GlobalStyleSheet.image2,{tintColor:show ?  COLORS.card : COLORS.primary,}]}
                                source={IMAGES.shoppingbag}
                            />
                            <Text style={{...FONTS.fontMedium,fontSize:16,color:show ? COLORS.card : COLORS.primary}}>Buy</Text>
                        </TouchableOpacity>
                    :Myorder ?completed ? 
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onPress4}
                            style={{
                                padding:10,
                                paddingHorizontal:20,
                                backgroundColor:COLORS.primary,
                                borderRadius:30,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center',
                                gap:10
                            }}
                        >
                            <Text style={{...FONTS.fontMedium,fontSize:14,color:COLORS.card,lineHeight:21}}>{btntitle}</Text>
                        </TouchableOpacity>
                    : 
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onPress3}
                            style={{
                                padding:10,
                                paddingHorizontal:20,
                                backgroundColor:COLORS.primary,
                                borderRadius:30,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center',
                                gap:10
                            }}
                        >
                            <Text style={{...FONTS.fontMedium,fontSize:14,color:COLORS.card,lineHeight:21}}>{btntitle}</Text>
                        </TouchableOpacity>
                        :
                        <Text style={{...FONTS.fontMedium,fontSize:18,color:COLORS.primary}}>{countnumber}</Text>
                    }
                </View>
                {Myorder ?
                    null
                :
                    <View
                        style={{
                            position:'absolute',
                            right:0,
                            top:0,
                        }}
                    >
                        <LikeBtn
                            onPress={inWishlist().includes(id) ? removeItemFromWishList : onPress5}
                            id={id}
                            inWishlist={inWishlist}
                        />
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    brandsubtitle3:{
        ...FONTS.fontMedium,
        fontSize:12,
        color:COLORS.title
    },
})



export default Cardstyle4

