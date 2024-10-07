import React from 'react';
import {  ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import ToggleStyle1 from '../../components/Toggles/ToggleStyle1';
import ToggleStyle2 from '../../components/Toggles/ToggleStyle2';
import ToggleStyle3 from '../../components/Toggles/ToggleStyle3';

const Toggles = () => {

    const theme = useTheme();
    const {colors} : {colors : any} = theme;

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View style={{flex:1,}}>
                <Header title={'Toggles'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={{...GlobalStyleSheet.container}}>
                    <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderStyle:'dashed',
                                        borderBottomColor:COLORS.inputborder,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontMedium}}>Classic toggle</Text>
                                    
                                    <ToggleStyle1/>
                                    
                                </View>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderStyle:'dashed',
                                        borderBottomColor:COLORS.inputborder,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontMedium}}>Toggle with Icon</Text>
                                    
                                    <ToggleStyle2/>
                                    
                                </View>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderStyle:'dashed',
                                        borderBottomColor:COLORS.inputborder,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontMedium}}>Toggle with text</Text>
                                    
                                    <ToggleStyle3/>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


export default Toggles;