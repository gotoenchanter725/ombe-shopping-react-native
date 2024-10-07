import React ,{useState} from 'react'
import { View, Text ,ScrollView, Image, TouchableOpacity ,} from 'react-native'
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS,FONTS, SIZES } from '../constants/theme';

const CheckoutItems = ({productList } : any) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [itemQuantity, setItemQuantity] = useState(10);

  return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: productList ? 1 : 0 ,
            height:42,
            borderRadius:22,
            borderColor:COLORS.inputborder,
            //overflow:'hidden'
        }}
    >
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => itemQuantity > 1 && setItemQuantity(itemQuantity - 1)}
            style={{
                height:productList ? 40 : 35,
                width:productList ? 40 : 35,
                borderRadius:50,
                borderTopRightRadius:productList ? 0 : 50,
                borderBottomRightRadius:productList ? 0 : 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:productList ?theme.dark ? colors.background : colors.card :COLORS.primary,
            }}
        >
             <FeatherIcon size={20} color={productList ?theme.dark ? COLORS.card : '#8F8F8F' :COLORS.card} name={'minus'} />
        </TouchableOpacity>
        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.title, width:productList ? 45 : 35,textAlign:'center' }}>{itemQuantity}</Text>
        <TouchableOpacity
             activeOpacity={0.8}
            onPress={() => setItemQuantity(itemQuantity + 1)}
            style={{
                height:productList ? 40 : 35,
                width:productList ? 40 : 35,
                borderRadius:50,
                borderTopLeftRadius:productList ? 0 : 50,
                borderBottomLeftRadius:productList ? 0 : 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:productList ?theme.dark ? colors.background : colors.card :COLORS.primary,
            }}
        >
            <FeatherIcon size={20} color={productList ?theme.dark ? COLORS.card : '#4A3749':COLORS.card} name={'plus'} />
        </TouchableOpacity>
    </View>
  )
}

export default CheckoutItems