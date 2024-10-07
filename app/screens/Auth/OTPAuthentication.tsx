import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'
import OTPInput from '../../components/Input/OTPInput'
import FeatherIcon from 'react-native-vector-icons/Feather';


type OTPAuthenticationScreenProps = StackScreenProps<RootStackParamList, 'OTPAuthentication'>;

const OTPAuthentication = ({navigation} : OTPAuthenticationScreenProps) => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

  return (
    <SafeAreaView style={{flex:1,backgroundColor: colors.card,}}>
         <View style={[GlobalStyleSheet.container,GlobalStyleSheet.flexcenter,{paddingVertical:50}]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.5}
                style={[styles.imagebackground,{
                    backgroundColor:'#F6F6F6',
                }]}
            >
                <FeatherIcon name='arrow-left' size={24} color={COLORS.title}/>
            </TouchableOpacity>
            <View style={{flex:1,alignItems:'center',marginLeft:-40}}>
                <Image
                    style={{height:36}}
                    source={theme.dark ? IMAGES.appnamedark :IMAGES.appname}
                />
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={[GlobalStyleSheet.container,{flexGrow:1,paddingHorizontal:30,paddingBottom:0}]}>
                <ScrollView>
                    <Text style={[styles.title1,{color:colors.title,textAlign:'center'}]}>Enter Code</Text>
                    <Text style={[FONTS.fontRegular,{fontSize:14,color:colors.title,textAlign:'center'}]}>An Authentication Code Has Sent To{"\n"}info@examplegmail.com</Text>
                    <View>
                        <View style={{marginBottom:20}}>
                           <OTPInput
                                code={otpCode}
                                setCode={setOTPCode}
                                maximumLength={maximumCodeLength}
                                setIsPinReady={setIsPinReady}
                           />
                           {/* <StatusBar barStyle={'light-content'}/> */}
                        </View> 
                    </View>
                    <Text style={[styles.title2,{color:colors.title,textAlign:'center'}]}>If you don't receive code! <Text style={{...FONTS.fontMedium,textDecorationLine:'underline',color:COLORS.primary}}>Resend</Text></Text>
                </ScrollView>
                <View style={{marginBottom:10}}>
                    <View style={{}}>
                        <Button
                            title={"Verify and proceed"}
                            onPress={() => navigation.navigate('NewPassword')}
                            style={{borderRadius:48}}
                        />
                    </View>
                    <View style={[GlobalStyleSheet.bottombtn]}>
                        <Text style={[FONTS.fontRegular,{fontSize:14,color:colors.title}]}>Back To</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SingIn')}>
                            <Text style={styles.title4}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imagebackground:{
        height:46,
        width:46,
        borderRadius:50,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        ...FONTS.fontRegular,
        fontSize:16,
        color:COLORS.primary,
        textDecorationLine:'underline'
    },
    title1:{
            ...FONTS.fontSemiBold,
            fontSize: 24,
            color: COLORS.title,
            marginBottom: 5 
    },
    title2:{
        ...FONTS.fontRegular,
        fontSize: 14,
            color: COLORS.text 
    },
    title4:{
        ...FONTS.fontRegular,
        fontSize:14,
        color:COLORS.primary,
        textDecorationLine:'underline',
        textDecorationColor:COLORS.primary
    },

})

export default OTPAuthentication