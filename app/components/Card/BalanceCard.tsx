import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

type Props = {
    balance : string,
    expires : string,
    number : string,
}

const BalanceCard = ({balance, expires, number} : Props) => {
    return (
        <ImageBackground
            source={IMAGES.card1}
            style={{
                height:140,
                width:270,
                borderRadius:SIZES.radius,
                overflow:'hidden',
                marginBottom:10,
                marginRight:12,
                paddingHorizontal:15,
                paddingVertical:15,
            }}
        >
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <Image
                    source={IMAGES.visa}
                    style={{
                        width:46,
                        height:23,
                        resizeMode:'contain',
                        tintColor:COLORS.white,
                    }}
                />
                <Text style={[FONTS.fontSm,FONTS.fontBaseSemiBold,{color:COLORS.white}]}>{number}</Text>
            </View>
            <View
                style={{
                    flexDirection:'row',
                }}
            >
                <View style={{
                    flex:1
                }}>
                    <Text style={[FONTS.fontSm,{color:COLORS.darkText,marginBottom:6}]}>Balance</Text>
                    <Text style={[FONTS.h4,FONTS.fontBaseSemiBold,{color:COLORS.white,lineHeight:24}]}>{balance}</Text>
                </View>
                <View
                    style={{
                        alignItems:'flex-end',
                    }}
                >
                    <Text style={[FONTS.fontSm,{color:COLORS.darkText,marginBottom:5}]}>Expires</Text>
                    <Text style={[FONTS.font,{color:COLORS.white}]}>{expires}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default BalanceCard;