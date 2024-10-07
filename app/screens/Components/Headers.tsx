import React from 'react';
import { useTheme } from '@react-navigation/native';
import {  ScrollView, View } from 'react-native';
import Header from '../../layout/Header';
import HeaderStyle1 from '../../components/Headers/HeaderStyle1';
import HeaderStyle2 from '../../components/Headers/HeaderStyle2';
import HeaderStyle3 from '../../components/Headers/HeaderStyle3';
import { COLORS } from '../../constants/theme';

const Headers = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View style={{flex:1,backgroundColor:theme.dark ? colors.card :colors.background}}>
                <Header 
                    title={'Header Styles'}
                    leftIcon={'back'}
                    titleRight
                 />
                <ScrollView>
                    <View style={{paddingVertical:30}}>
                        <View style={{marginBottom:25}}>
                            <HeaderStyle1 title={'Home'}/>
                        </View>
                        <View style={{marginBottom:25}}>
                            <HeaderStyle2 title={'Home'}/>
                        </View>
                        <View style={{marginBottom:25}}>
                            <View
                                style={{
                                    backgroundColor: colors.card,
                                    shadowColor: "rgba(0,0,0,.6)",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.30,
                                    shadowRadius: 4.65,

                                    elevation: 8,
                                }}
                            >
                                <HeaderStyle3/>
                            </View>
                        </View>
                        <View style={{marginBottom:25}}>
                            <Header  
                            leftIcon={'back'} 
                            title={'Home'}
                            titleRight
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


export default Headers;