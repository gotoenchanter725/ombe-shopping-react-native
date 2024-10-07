import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { useNavigation, useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SelectCountery from '../SelectCountery';
//import { Ionicons } from '@expo/vector-icons';


type Props = {
    moresheet3 ?: any;
}

const SkipLoginSheet = ({moresheet3} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navigation = useNavigation<any>();

    const [show, setshow] = useState(true)

    return (
        <View style={[GlobalStyleSheet.container, { backgroundColor:theme.dark ? COLORS.title:COLORS.white, }]}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Image
                        style={{height:24,width:28,resizeMode:'contain'}}
                        source={IMAGES.headerlogo}
                    />
                    <Text style={[FONTS.fontMedium,{fontSize:20,color:colors.title}]}>Click <Text style={{color:COLORS.primary}}>Cart</Text></Text>
                </View>
                <TouchableOpacity
                    style={{ height: 38, width: 38, backgroundColor: colors.card, borderRadius: 38,alignItems:'center',justifyContent:'center'}}
                    onPress={() => moresheet3.current.close()}
                >
                    <FeatherIcon size={20} color={colors.title} name={'x'} />
                </TouchableOpacity>
            </View>
            <View style={{paddingVertical:5,marginHorizontal:-15,paddingTop:0}}>
                <Image
                    style={{width:'100%',height:undefined,aspectRatio:1/.3,resizeMode:'contain'}}
                    source={IMAGES.ads4}
                />
            </View>
            <View style={{}}>
                <Text style={[FONTS.fontMedium,{fontSize:18,color:colors.title,}]}>Unlock Personalized Content{"\n"}Tailored Just For You</Text>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:15,paddingBottom:5}}>
                    <TouchableOpacity 
                        onPress={() => {setshow(!show)}}
                    >
                        <Text style={[FONTS.fontMedium,{fontSize:14,color:show ? colors.text : COLORS.primary}]}>Enter Mobile Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            onPress={() => {setshow(!show)}}
                    >
                        <Text style={[FONTS.fontMedium,{fontSize:12,color:show ? COLORS.primary : colors.text}]}>Use Email Id</Text>
                    </TouchableOpacity>
                </View>
                {show ?
                        <View>
                        <Input
                            inputBorder
                            onChangeText={(value) => console.log(value)}
                            keyboardType={'number-pad'}
                            style={{borderColor:COLORS.primary,paddingLeft:70}}
                        />
                        <View style={{position:'absolute',top:12,left:0}}>
                            <SelectCountery/>
                        </View>
                    </View>
                    :
                    <View>
                        <Input
                            inputBorder
                            onChangeText={(value) => console.log(value)}
                            style={{borderColor:COLORS.primary,paddingLeft:0}}
                        />
                    </View>
                }
                <View style={{paddingTop:10}}>
                    <Text style={[FONTS.fontRegular,{fontSize:14,color:colors.title}]}>By continuing, you agree to AmazMart's <Text style={[FONTS.fontSemiBold,{color:COLORS.primary}]}>Terms of Use</Text>{"\n"}and <Text style={[FONTS.fontSemiBold,{color:COLORS.primary}]}>Privacy Policy</Text>.</Text>
                </View>
            </View>
            <View style={{marginTop:30}}>
                <Button
                    title='Continue'
                    onPress={() => moresheet3.current.close()}
                />
            </View>
        </View>
    )
}

export default SkipLoginSheet