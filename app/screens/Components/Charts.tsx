import React from 'react';
import {  ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import BasicLineChart from '../../components/Charts/LineChart';
import BasicBarChart from '../../components/Charts/BarChart';
import BasicPieChart from '../../components/Charts/PieChart';

const Charts = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View
                style={{
                    flex:1,
                    //backgroundColor:colors.background,
                }}
            >
                <Header 
                    title={'Charts'} 
                    leftIcon={'back'}
                    titleRight
                />
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title}}>Line Chart</Text>
                            </View>
                            <View  style={GlobalStyleSheet.cardBody}>
                                <BasicLineChart/>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title}}>Bar Chart</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <BasicBarChart/>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:colors.title}}>Pie Chart</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <BasicPieChart/>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Charts;