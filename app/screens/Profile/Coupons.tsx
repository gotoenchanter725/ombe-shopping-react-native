import { View, Text,  Platform, ScrollView, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import Divider from '../../components/Dividers/Divider';
import Button from '../../components/Button/Button';
import { COLORS, FONTS } from '../../constants/theme';



const CouponsData = [
    {
        title: "Home Decor",
        text: "On minimum purchase of Rs. 1,999",
        offer: "20%\nOff",
    },
    {
        title: "Home Furnishing",
        text: "On minimum purchase of Rs. 2,999",
        offer: "50%\nOff",
    },
    {
        title: "Mobile Accessories",
        text: "On minimum purchase of Rs. 999",
        offer: "25%\nOff",
    },
]


const Coupons = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Coupons'
                leftIcon='back'
                titleRight
                //titleLeft
               
            />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={GlobalStyleSheet.container}>
                    <View>
                        {CouponsData.map((data:any, index) => {
                            return (
                                <View 
                                    key={index}
                                    style={{ 
                                        height: 78, 
                                        width: '100%', 
                                        borderRadius: 12, 
                                        backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card, 
                                        padding: 15, 
                                        flexDirection: 'row', 
                                        alignItems: 'center', 
                                        gap: 40,
                                        marginBottom: 15, 
                                    }}
                                >
                                    <Text style={{ ...FONTS.fontRegular, fontSize: 13, color: colors.title, marginLeft: 10 }}>{data.offer}</Text>
                                    <View style={{ transform: [{ rotate: '90deg' }], width: 60, position: 'absolute', top: 25, left: 50 }}>
                                        <Divider dashed color={theme.dark ? 'rgba(255,255,255,0.4)':'rgba(0,0,0,0.4)'} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 12, color: colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 12, color: colors.title, opacity: 0.6 }}>{data.text}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
       </View>
    )
}



export default Coupons