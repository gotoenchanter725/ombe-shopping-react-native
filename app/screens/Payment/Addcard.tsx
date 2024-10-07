import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { View, Text,ScrollView, StyleSheet } from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CreditCard from '../../components/Card/CreditCard';
import Input from '../../components/Input/Input';
import { COLORS, FONTS } from '../../constants/theme';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type AddcardScreenProps = StackScreenProps<RootStackParamList, 'Addcard'>;

const Addcard = ({navigation} : AddcardScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused1 , setisFocused1] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);
    const [isFocused3 , setisFocused3] = useState(false);

    return (
       <View style={{flex:1,backgroundColor:colors.background}}>
            <Header
                title='Add Card'
                leftIcon='back'
                titleRight
            />
            <ScrollView contentContainerStyle={{flexGrow:1,padding:15,paddingTop:0}}>
                <View style={[styles.backgroundData,{}]}>
                    <View style={{}}>
                        <View style={[GlobalStyleSheet.container,{zIndex:20,padding:0,paddingVertical:15}]}>
                            <CreditCard
                                creditCard
                            />
                        </View>
                    </View>
                    <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginBottom:10,borderRadius:15}]}>
                        <Text style={[styles.cardTitle,{color: colors.title,borderBottomColor:COLORS.inputborder,}]}>Enter Details</Text>
                        <View style={styles.inputCard}>
                            <Input  
                                onFocus={() => setisFocused(true)}
                                onBlur={() => setisFocused(false)}
                                isFocused={isFocused}
                                onChangeText={(value) => console.log(value)}
                                backround={colors.card}
                                style={{borderRadius:48,paddingLeft:20}}
                                placeholder='Card Name'
                            />
                        </View>
                        <View style={{ marginBottom:15 }}>
                            <Input
                                onFocus={() => setisFocused1(true)}
                                onBlur={() => setisFocused1(false)}
                                isFocused={isFocused1}
                                backround={colors.card}
                                onChangeText={(value) => console.log(value)}
                                style={{borderRadius:48,paddingLeft:20}}
                                keyboardType={'number-pad'}
                                placeholder='Card Number'
                            />
                        </View>
                        <View style={[GlobalStyleSheet.flex,{ gap: 10, paddingRight: 20 }]}>
                            <View style={{ marginBottom: 0, width: '50%' }}>
                                <Input
                                    onFocus={() => setisFocused2(true)}
                                    onBlur={() => setisFocused2(false)}
                                    isFocused={isFocused2}
                                    placeholder='Expiry Date'
                                    onChangeText={(value) => console.log(value)}
                                    backround={colors.card}
                                    style={{borderRadius:48,paddingLeft:20}}
                                    keyboardType={'number-pad'}
                                />
                            </View>
                            <View style={{ marginBottom: 0, width: '50%' }}>
                                <Input
                                    onFocus={() => setisFocused3(true)}
                                    onBlur={() => setisFocused3(false)}
                                    isFocused={isFocused3}
                                    placeholder='CVV'
                                    onChangeText={(value) => console.log(value)}
                                    backround={colors.card}
                                    style={{borderRadius:48,paddingLeft:20}}
                                    keyboardType={'number-pad'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{}]}>
                <Button
                    title='Add Card'
                    color={COLORS.primary}
                    text={COLORS.card}
                    onPress={() => navigation.navigate('Payment')}
                    style={{borderRadius:48}}
                />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    backgroundData:{
        paddingBottom:0,
        flex:1,
    },
    cardTitle:{
        ...FONTS.fontRegular,
        fontSize: 14,
        color: COLORS.title,
        borderBottomWidth:1,
        borderBottomColor:COLORS.inputborder,
        borderStyle:'dashed',
        marginHorizontal:-15,
        paddingHorizontal:15,
        paddingBottom:15,
    },
    inputCard:{
        marginBottom: 15,
        marginTop: 15 
    },
    bottomBtn:{
        height:75,
        width:'100%',
        backgroundColor:COLORS.card,
        justifyContent:'center',
        paddingHorizontal:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: .1,
        shadowRadius: 5,
    }
})

export default Addcard