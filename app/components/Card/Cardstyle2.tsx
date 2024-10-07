import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import LikeBtn from '../LikeBtn'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromwishList } from '../../redux/reducer/wishListReducer'

type Props = {
    id : string;
    title : string;
    brand : string;
    price : string;
    image ?: any;
    writeReview ?: any;
    countnumber ?: string;
    onPress ?: (e : any) => void,
    onPress2 ?: (e : any) => void,
}

const Cardstyle2 = ({id,title,image,countnumber,price,onPress,brand,onPress2,writeReview} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

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
            style={{
                flexDirection:'row',
                width:'100%',
                alignItems:'flex-start',
                backgroundColor:colors.card,
                borderRadius:writeReview ? 0 :13,
                padding:15,
                shadowColor:theme.dark ? colors.background : "rgba(4,118,78,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.34,
                shadowRadius: 18.27,
                elevation: 8, 
            }}
        >
            <View style={{width:'30%',alignItems:'center'}}>
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
            </View>
            <View 
                style={{
                    width:'70%',
                    paddingLeft:15,
                }}
            >
                <View>
                    <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title,paddingRight:25}}>{title}</Text>
                    {wishList ? 
                         <Text style={{...FONTS.fontRegular,fontSize:12,color:'#6A6A6A',marginTop:5}}>Nescafé</Text>
                    :
                    
                        <Text style={{...FONTS.fontRegular,fontSize:12,color:'#6A6A6A',marginTop:5}}>{brand}</Text>
                    }
                </View>
                <View style={[GlobalStyleSheet.flex,{marginTop:20,alignItems:'flex-end'}]}>
                    <Text style={{...FONTS.fontSemiBold,fontSize:18,color:colors.title}}>{price}</Text>
                    <View>
                        {writeReview ? 
                            null
                        :
                            <LikeBtn
                                onPress={inWishlist().includes(id) ? removeItemFromWishList : onPress2}
                                id={id}
                                inWishlist={inWishlist}
                            />
                        }
                    </View>
                </View>
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



export default Cardstyle2