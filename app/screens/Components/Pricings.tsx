import React from 'react';
import {  ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import PricingStyle1 from '../../components/Pricing/PricingStyle1';
import PricingStyle2 from '../../components/Pricing/PricingStyle2';

const Pricings = () => {

    const {colors} = useTheme();

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View style={{flex:1}}>
                <Header title={'Pricings'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={{...GlobalStyleSheet.container,alignItems:'center',paddingVertical:30}}>
                        <View  style={{marginBottom:20}}>
                            <PricingStyle1/>
                        </View>
                        <View  style={{marginBottom:30}}>
                            <PricingStyle2/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};



export default Pricings;