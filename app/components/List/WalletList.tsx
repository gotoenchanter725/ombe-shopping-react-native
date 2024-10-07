import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

type Props = {
    image : any;
    name : string;
    tag : string;
    balance : string;
    amount : string;
    rate : string;
}

const WalletList = ({name, tag, balance, amount, rate, image} : Props) => {

    const {colors} : {colors : any} = useTheme();

    return (
        <View 
            style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:10,
            }}
        >
            <View
                style={{
                    height:50,
                    width:50,
                    borderRadius:SIZES.radius,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:colors.card,
                    marginRight:15,
                }}
            >
                <Image
                    style={{
                        height:22,
                        width:22,
                        resizeMode:'contain',
                        tintColor:colors.title,
                    }}
                    source={image}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={[FONTS.fontLg,FONTS.fontMedium,{color:colors.title,marginBottom:6,lineHeight:18}]}>{name}</Text>
                <Text style={[FONTS.fontSm,FONTS.fontRegular,{color:colors.text,lineHeight:18}]}>{tag}{balance}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <Text style={[FONTS.h6,FONTS.fontSemiBold,{color:colors.title,marginBottom:2}]}>{amount}</Text>
                <Text style={[FONTS.fontXs,FONTS.fontMedium,{color: parseInt(rate) > 0 ? COLORS.success : COLORS.danger}]}>{rate}%</Text>
            </View>
        </View>
    )
}

export default WalletList;