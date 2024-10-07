import React from 'react';
import {  ScrollView, Text, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import ClassicAccordion from '../../components/Accordion/ClassicAccordion';
import AccordionHighlight from '../../components/Accordion/AccordionHighlight';
import { useTheme } from '@react-navigation/native';

const AccordionScreen = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View
                style={{
                    flex:1,
                    //backgroundColor:colors.card,
                }}
            >
                <Header 
                    title={'Accordions List'} 
                    leftIcon={'back'}
                    titleRight
                />
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title}}>Classic Accordion</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <ClassicAccordion/>
                            </View>
                        </View>
                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title}}>Accordion Highlight</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <AccordionHighlight/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default AccordionScreen;