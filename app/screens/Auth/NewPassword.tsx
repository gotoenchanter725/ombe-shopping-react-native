import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'
import OTPInput from '../../components/Input/OTPInput'
import Input from '../../components/Input/Input'
//import { Grayscale } from 'react-native-color-matrix-image-filters'
import LinearGradient from 'react-native-linear-gradient'

type NewPasswordScreenProps = StackScreenProps<RootStackParamList, 'NewPassword'>;

const NewPassword = ({navigation} : NewPasswordScreenProps) => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);

  return (
    <SafeAreaView style={{flex:1,backgroundColor: colors.card,}}>
       <View style={[GlobalStyleSheet.container,GlobalStyleSheet.flexcenter,{paddingVertical:50,}]}>
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
            <View style={[GlobalStyleSheet.container,{flexGrow:1,paddingBottom:0,paddingHorizontal:30,paddingTop:0}]}>
                <ScrollView style={{flex:1,}} showsVerticalScrollIndicator={false}>
                    <View style={{marginBottom:30}}>
                        <Text style={[styles.title1,{color:colors.title}]}>Enter New Password</Text>
                        <Text style={[styles.title2, {color: colors.title }]}>Your new password must be different from previously used password.</Text>
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Password</Text>
                    </View>
                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Input
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            backround={colors.card}
                            onChangeText={(value) => console.log(value)}
                            isFocused={isFocused}
                            type={'password'}
                            inputBorder
                            defaultValue='123456789'
                        />
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Confirm Password</Text>
                    </View>
                    <View style={{ marginBottom: 10,marginTop:10 }}>
                        <Input
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            backround={colors.card}
                            onChangeText={(value) => console.log(value)}
                            isFocused={isFocused2}
                            type={'password'}
                            inputBorder
                            defaultValue='123456789'
                        />
                    </View>
                </ScrollView>
                <View style={[GlobalStyleSheet.container,{paddingTop:0,paddingHorizontal:0}]}>
                    <Button
                        title={"Continue"}
                        onPress={() => navigation.navigate('SingIn')}
                        style={{borderRadius:48}}
                    />
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
        ...FONTS.fontLight,
        fontSize:14,
        color:COLORS.title,
        textDecorationLine:'underline'
    },
    title1:{
        ...FONTS.fontSemiBold,
         fontSize: 25,
        color: COLORS.title,
        marginBottom: 5 
    },
    title2:{
        ...FONTS.fontLight,
        fontSize: 14,
        color: COLORS.title,
    },
    title3:{
        ...FONTS.fontMedium,
        fontSize:14,
        color:'#8A8A8A'
    },
    title4:{
        ...FONTS.fontRegular,
        fontSize:14,
        color:COLORS.primary,
        textDecorationLine:'underline',
        textDecorationColor:COLORS.primary
    },
    icon:{
        height:28,
        width:28,
        resizeMode:'contain',
    }

})

export default NewPassword