import { View, Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { COLORS ,FONTS} from '../../constants/theme';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ButtonOutline from '../Button/ButtonOutline';
import Accordion from 'react-native-collapsible/Accordion';
import { GlobalStyleSheet } from '../../constants/StyleSheet';


type Props = {
    component ?: any,
    Payment ?: any,
    netbanking ?: any,
}

const PaymentAccordion = ({component ,Payment,netbanking} : Props)=> {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;
    
    const [activeSections, setActiveSections] = useState([0]);

    const setSections = (sections:any) => {
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const SECTIONS = [
        {
            icon: IMAGES.dollar,
            title: 'Cash on Delivery(Cash/UPI)',
            content: 'Carry on your cash payment..\nThanx!',
        },
        {
            icon: IMAGES.payment,
            title: 'Google Pay/Phone Pay/BHIM UPI',
            content: 'Your UPI ID Will be encrypted and is 100% safe with us.',
            component: true
        },
        {
            icon: IMAGES.folder,
            title: 'Payments/Wallet',
            payment: true
        },
        {
            icon: IMAGES.bank,
            title: 'Netbanking',
            netbanking: true,
        },
    ];


    const AccordionHeader = (item:any, _:any ,isActive:any) => {

        return (
            <View style={styles.AccodionCard}>
                <Image
                    style={[GlobalStyleSheet.image2,{
                        tintColor: COLORS.primary,
                        marginRight: 10,
                    }]}
                    source={item.icon}
                />
                <Text style={[FONTS.fontRegular, { fontSize: 14, color: colors.title, flex: 1 }]}>{item.title}</Text>
                <View
                    style={{
                        backgroundColor:colors.background,
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View style={[{
                        width: 14,
                        height: 14,
                        backgroundColor:colors.background,
                        borderRadius: 50
                    }, isActive == true && {
                        backgroundColor: COLORS.primary
                    }]}></View>
                </View>
            </View>
        )
    }

    const AccordionBody = (item:any, _:any, isActive:any) => {
        return (
            <View style={{
                borderTopWidth: 1,
                borderStyle:'dashed',
                borderTopColor:COLORS.inputborder,
                paddingVertical: 15,
                paddingHorizontal: 15,
            }}>
                {item.component ?

                    <View>
                        <Input
                            placeholder='Link via UPI'
                            onChangeText={(value) => console.log(value)}
                            backround={colors.card}
                            style={{borderRadius:48,paddingLeft:20,}}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Button
                                title={"Continue"}
                                color={COLORS.secondary}
                                text={ COLORS.primary}
                                style={{borderRadius:48}}
                            />
                        </View>
                        <View style={styles.upiCard}>
                            <Image
                                style={{ height: 18, width: 18, resizeMode: 'contain',tintColor:COLORS.primary }}
                                source={IMAGES.shieldcheck}
                            />
                            <Text style={{ ...FONTS.fontRegular, fontSize: 12, color:colors.text,paddingRight:50 }}>{item.content}</Text>
                        </View>
                    </View>
                    :
                    item.payment ?
                        <View>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 12, color:COLORS.primary, marginBottom: 5 }}>Link Your Wallet</Text>
                            <Input
                                placeholder='+91'
                                onChangeText={(value) => console.log(value)}
                                backround={colors.card}
                                style={{borderRadius:48,paddingLeft:20,}}
                                keyboardType={'number-pad'}
                            />
                            <View style={{ marginTop: 15, marginBottom: 10 }}>
                                <Button
                                    title={"Continue"}
                                    color={COLORS.secondary}
                                    text={ COLORS.primary}
                                    style={{borderRadius:48}}
                                />
                            </View>
                        </View>
                        :
                        item.netbanking ?
                        
                            <View style={{ marginVertical: 10 }}>
                                <ButtonOutline
                                    color={theme.dark ? COLORS.white :COLORS.primary}
                                    title={"Netbanking"}
                                    style={{borderRadius:48}}
                                />
                            </View>
                            :
                            <Text style={[FONTS.fontSm, { color: colors.text, lineHeight: 20 }]}>{item.content}</Text>
                }
            </View>
        )
    }

    return (
        <>
            <Accordion
                sections={SECTIONS}
                duration={300}
                sectionContainerStyle={{
                    marginBottom: 10,
                    backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,
                    borderRadius:15
                }}
                activeSections={activeSections}
                onChange={setSections}
                touchableComponent={TouchableOpacity}
                renderHeader={AccordionHeader}
                renderContent={AccordionBody}
            />
        </>
    );
}

const styles = StyleSheet.create({
    AccodionCard:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15
    },
    upiCard:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10, 
        marginLeft: 10,
        paddingBottom:0 
    }
})

export default PaymentAccordion