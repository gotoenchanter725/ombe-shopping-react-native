import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import LikeBtn from '../LikeBtn';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwishList } from '../../redux/reducer/wishListReducer';

type Props = {
    id : string;
    title : string;
    price : string;
    miles ?: string;
    watts ?: string;
    speed ?: string;
    weight ?: string;
    image ?: any;
    wishlist?:any;
    Mycart?:any;
    Myorder?:any;
    removelikebtn?: any;
    offer?:any,
    btntitle?:string,
    brand?:any,
    discount?:any,
    closebtn?:any,
    trackorder?:any,
    shop?:any,
    trackorder2?:any,
    completed?:any,
    EditReview?:any,
    removebottom?:any,
    onPress ?: (e : any) => void,
    onPress2 ?: (e : any) => void,
    onPress3 ?: (e : any) => void,
    onPress4 ?: (e : any) => void,
    onPress5 ?: (e : any) => void,
    onPress6 ?: (e : any) => void,
    //hascolor:any
}


const Cardstyle3 = ({id, title,price,miles,watts,speed,weight,image, wishlist,Mycart,Myorder,trackorder2,shop,onPress,trackorder,completed,EditReview,onPress2,removebottom,onPress3,onPress4,onPress5,onPress6}:Props) => {
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
        <LinearGradient 
            colors={[
                wishlist ?  theme.dark ? colors.card : '#FFFFFF' :
                Mycart ?theme.dark ? colors.card : '#FFFFFF' :
                Myorder ?theme.dark ? colors.card : '#FFFFFF' :
                shop ?theme.dark ? colors.card : '#FFFFFF' :
                    theme.dark ? 'rgba(47,47,47,.2)' :'#FFFFFF',
                wishlist ?  theme.dark ? colors.card: '#FFFFFF' :
                Mycart ?theme.dark ? colors.card : '#FFFFFF':
                Myorder ?theme.dark ? colors.card : '#FFFFFF' :
                shop ?theme.dark ? colors.card : '#FFFFFF' :theme.dark ? 'rgba(47,47,47,.8)' : '#F6F6F6']} style={{padding:15,paddingBottom:5,borderRadius:wishlist ? 15: Mycart ? 15: Myorder ? 15:0}}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={GlobalStyleSheet.flex}
            >
                <View style={[GlobalStyleSheet.col35]}>
                    <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                        <Text style={[styles.title1,{color:colors.title}]}>{title}</Text>
                        <View style={{paddingTop:20}}>
                            <Text style={[styles.subtitle,{color:colors.title}]}>Price</Text>
                            <Text style={{...FONTS.fontSemiBold,fontSize:24,color:'#8ABE12'}}>{price}</Text>
                        </View>
                    </View>
                </View>
                <View style={GlobalStyleSheet.col65}>
                    <Image
                        style={{height:undefined,width:'100%',aspectRatio:1/.6,resizeMode:'contain'}}
                        source={image}
                    />
                    <View style={{position:'absolute',top:wishlist ? 0 :Mycart ? 0 :-10,right:wishlist ? 0 :Mycart ? 0 :-10}}>
                        {wishlist ?
                            <TouchableOpacity
                                onPress={onPress3}
                            >
                                <FeatherIcon size={20} color={colors.title} name={'x'} />
                            </TouchableOpacity>
                            :trackorder2 ? 
                                null
                            :Mycart ? 
                                <TouchableOpacity
                                    onPress={onPress3}
                                >
                                    <FeatherIcon size={20} color={colors.title} name={'x'} />
                                </TouchableOpacity>
                            :
                            <LikeBtn
                                onPress={inWishlist().includes(id) ? removeItemFromWishList : onPress6}
                                id={id}
                                inWishlist={inWishlist}
                            />
                        }
                    </View>
                </View>
            </TouchableOpacity>
            {wishlist ?
                <View style={{paddingTop:10,paddingBottom:10}}>
                    <Button
                        title='Add To Card'
                        style={{height:48}}
                        onPress={onPress4}
                    />
                </View> 
            :Mycart ? 
                null
            :Myorder ? 
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:10,
                    marginVertical:10,
                    marginBottom:5
                }}>
                    {trackorder ? 
                        <TouchableOpacity onPress={onPress2} activeOpacity={0.5} style={[styles.flexcenter,{borderColor:COLORS.inputborder}]}>
                            <FeatherIcon size={15} color={colors.title} name={'truck'} />
                            <Text style={[styles.subtitle2,{color:colors.title}]}>Track Order</Text>
                        </TouchableOpacity>
                    
                    :completed ? 
                        <View style={[styles.flexcenter,{borderWidth:0,backgroundColor:COLORS.primary}]}>
                            <Image
                                style={[styles.image,{tintColor:COLORS.title}]}
                                source={IMAGES.check4}
                            />
                            <Text style={[styles.subtitle2,{color:COLORS.title}]}>Completed</Text>
                        </View>
                    :
                    null
                    }
                    {trackorder ? 
                        <TouchableOpacity onPress={onPress3} activeOpacity={0.5} style={[styles.flexcenter,{borderWidth:0,backgroundColor:'#898C90'}]}>
                            <Image
                                style={[styles.image,{tintColor:COLORS.card}]}
                                source={IMAGES.Star4}
                            />
                            <Text style={[styles.subtitle2,{color:COLORS.card}]}>Write Review</Text>
                        </TouchableOpacity>
                    :EditReview ?
                    <TouchableOpacity onPress={onPress3} activeOpacity={0.5} style={[styles.flexcenter,{borderWidth:0,backgroundColor:COLORS.title}]}>
                        <Image
                            style={[styles.image,{tintColor:'#FFAC5F'}]}
                            source={IMAGES.Star4}
                        />
                        <Text style={[styles.subtitle2,{color:COLORS.card}]}>4.5 <Text style={{color:'#FFCC4A'}}>Edit</Text></Text>
                        <Image 
                            style={[styles.image,{tintColor:'#FFCC4A'}]} 
                            source={IMAGES.write}
                        />
                    </TouchableOpacity>
                    :completed ?
                        <TouchableOpacity onPress={onPress3} activeOpacity={0.5} style={[styles.flexcenter,{borderWidth:0,backgroundColor:COLORS.title}]}>
                            <Image
                                style={[styles.image,{tintColor:'#FFAC5F' }]}
                                source={IMAGES.Star4}
                            />
                            <Text style={[styles.subtitle2,{color:COLORS.card}]}>Write Review</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity
                            onPress={onPress5}
                            activeOpacity={0.5} style={[styles.flexcenter,{borderColor:COLORS.inputborder}]}>
                            <FeatherIcon size={14} color={colors.text} name={'save'} />
                            <Text style={[styles.subtitle,{color:colors.text}]}>Save for later</Text>
                        </TouchableOpacity>
                    }
                </View>
            :
                <View style={styles.bottomcart}>
                    <View style={[styles.subCard,{backgroundColor:shop ? colors.background :colors.card}]}>
                        <View style={styles.subCardflex}>
                            <Image
                                style={GlobalStyleSheet.image3}
                                source={IMAGES.biking}
                            />
                            <View>
                                <Text style={[styles.subCardTitle,{color:colors.title}]}>{miles}</Text>
                                <Text style={[styles.subCardsubTitle,{color:colors.title}]}>Miles</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.subCard,{backgroundColor:shop ? colors.background :colors.card}]}>
                        <View style={styles.subCardflex}>
                            <Image
                                style={GlobalStyleSheet.image3}
                                source={IMAGES.tachometerfast}
                            />
                            <View>
                                <Text style={[styles.subCardTitle,{color:colors.title}]}>{speed}</Text>
                                <Text style={[styles.subCardsubTitle,{color:colors.title}]}>Speed</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.subCard,{backgroundColor:shop ? colors.background :colors.card}]}>
                        <View style={styles.subCardflex}>
                            <Image
                                style={GlobalStyleSheet.image3}
                                source={IMAGES.bolt}
                            />
                            <View>
                                <Text style={[styles.subCardTitle,{color:colors.title}]}>{watts}</Text>
                                <Text style={[styles.subCardsubTitle,{color:colors.title}]}>Watts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.subCard,{backgroundColor:shop ? colors.background :colors.card}]}>
                        <View style={styles.subCardflex}>
                            <Image
                                style={GlobalStyleSheet.image3}
                                source={IMAGES.scale}
                            />
                            <View>
                                <Text style={[styles.subCardTitle,{color:colors.title}]}>{weight}</Text>
                                <Text style={[styles.subCardsubTitle,{color:colors.title}]}>weight</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    title1:{
        ...FONTS.fontBold,
        fontSize:18,
        color:COLORS.title,
        textTransform:'uppercase'
    },
    subtitle:{
        ...FONTS.fontRegular,
        fontSize:12,
        color:COLORS.title,
        textTransform:'uppercase'
    },
    bottomcart:{
        width:'100%',
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        paddingTop:20
    },
    subCard:{
        backgroundColor:COLORS.card,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    subCardflex:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    subCardTitle:{
        ...FONTS.fontSemiBold,
        fontSize:12,
        color:COLORS.title
    },
    subCardsubTitle:{
        ...FONTS.fontRegular,
        fontSize:10,
        color:COLORS.title,
        opacity:.5,
        textTransform:'uppercase'
    },
    subtitle2:{
        ...FONTS.fontRegular,
         fontSize: 13,
    },
    flexcenter:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        paddingHorizontal:10,
        borderWidth:2,
        width:'50%',
        height:48,
        borderRadius:8,
        justifyContent:'center'
    },
    image:{
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
})
   

export default Cardstyle3