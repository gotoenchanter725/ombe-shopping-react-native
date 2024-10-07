import React from 'react';
import {  ScrollView, Text, View,Image } from 'react-native';
//import { FontAwesome } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import SocialBtn from '../../components/Socials/SocialBtn';
import SocialIcon from '../../components/Socials/SocialIcon';
import { IMAGES } from '../../constants/Images';

const Socials = () => {

    const theme = useTheme();
    const {colors}:{colors : any} = theme;

    return (
        <View style={{flex:1,backgroundColor:colors.card}}>
            <View style={{flex:1}}>
                <Header title={'Socials'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={{...GlobalStyleSheet.container}}>
                    <View style={[GlobalStyleSheet.card,{backgroundColor:theme.dark ?colors.card:colors.background}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Social Button</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={GlobalStyleSheet.row}>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            gap
                                            icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.google2} />}
                                            color={colors.card}
                                            text='Google'
                                        />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            gap
                                            icon={<FontAwesome name='apple' size={20} color={COLORS.title} />}
                                            color={colors.card}
                                            text='Apple'
                                        />
                                    </View>
                                     <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            gap
                                            icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.facebook} />}
                                            color={colors.card}
                                            text='Facebook'
                                        />
                                     </View>
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:theme.dark ?colors.card:colors.background}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Social Button Rounded</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={GlobalStyleSheet.row}>
                                        <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                            <SocialBtn
                                                icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.google2} />}
                                                color={colors.card}
                                                rounded
                                                text='Google'
                                                gap
                                            />
                                        </View>
                                        <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                            <SocialBtn
                                                icon={<FontAwesome name='apple' size={20} color={COLORS.title} />}
                                                color={colors.card}
                                                rounded
                                                text='Apple'
                                                gap
                                            />
                                        </View>
                                        <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                            <SocialBtn
                                                icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.facebook} />}
                                                rounded
                                                color={colors.card}
                                                text='Facebook'
                                                gap
                                            />
                                        </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


export default Socials;