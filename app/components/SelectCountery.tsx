import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { CountryButton, CountryPicker } from 'react-native-country-codes-picker';
import { COLORS } from '../constants/theme';

const SelectCountery = () => {


    const theme = useTheme();
  const { colors } : {colors : any} = theme;

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const [countryflag, setCountryflag] = useState('');

  return (
    <View>
        <CountryButton 
            onPress={() => setShow(true)}
            item={{
                dial_code: countryCode ? countryCode : "+91", 
                flag: countryflag ? countryflag : "🇮🇳",
            }}
            style={{
            countryButtonStyles : {
                height : 48,
                backgroundColor:'transparent',
                //backgroundColor:COLORS.primary,
                width:70,
                paddingHorizontal:0,
                paddingVertical:0,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:8,
                borderWidth:1,
                borderColor:COLORS.inputborder,
                paddingLeft:10,
            },
            dialCode: {
                flex:1,
                color:colors.title
            },
            flag: {
                flex:0,
                width:20,
                marginRight:5,
            },
            countryName: {
                display:'none',
            }
            }}
        />
        <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
            // console.log(item);
            setCountryflag(item.flag);
            setCountryCode(item.dial_code);
            setShow(false);
        }}
        style={{
            modal: {
                height: 500,
                backgroundColor:theme.dark ? 'rgba(255,255,255,0.6)' : COLORS.card
            },
            countryButtonStyles: {
                // height: 80,
                backgroundColor:theme.dark ? colors.background : colors.input,
            },
            dialCode: {
                color:colors.title
            },
            countryName: {
                color:colors.title
            },
            textInput: {
                color:COLORS.title
            },   
        }}
        />
    </View>
  )
}

export default SelectCountery