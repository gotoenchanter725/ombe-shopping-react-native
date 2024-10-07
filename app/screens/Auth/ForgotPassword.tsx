import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import Input from '../../components/Input/Input'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'

type ForgotPasswordScreenProps = StackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = ({navigation} :ForgotPasswordScreenProps) => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.card,}}>
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
        <ScrollView style={{flexGrow:1,}} showsVerticalScrollIndicator={false}>
            <View style={[GlobalStyleSheet.container,{flexGrow:1,paddingBottom:0,paddingHorizontal:30,paddingTop:0}]}>
                <View style={{}}>
                    <View style={{marginBottom:30}}>
                        <Text style={[styles.title1,{color:colors.title}]}>Forgot Password</Text>
                        <Text style={[styles.title2, {color: colors.title }]}>Enter The Email Associated With Your Account And We’ll Send And Email To Reset Your Password</Text>
                    </View>
                    <View style={[GlobalStyleSheet.container,{padding:0}]}>
                        <Text style={[styles.title3,{color:'#8A8A8A'}]}>Email Address</Text>
                    </View>
                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Input
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            onChangeText={(value) => console.log(value)}
                            isFocused={isFocused}
                            inputBorder
                            defaultValue='info@examplegmail.com'
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={[GlobalStyleSheet.container,{paddingTop:0,paddingHorizontal:30}]}>
            <Button
                title={"Send Mail"}
                color={COLORS.primary}
                onPress={() => navigation.navigate('OTPAuthentication')}
                style={{borderRadius:52}}
            />
           <View style={[GlobalStyleSheet.bottombtn]}>
                <Text style={[FONTS.fontRegular,{fontSize:14,color:colors.title}]}>Back To</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SingIn')}>
                    <Text style={styles.title4}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title1:{
        ...FONTS.fontSemiBold,
         fontSize: 24,
        color: COLORS.title,
        marginBottom: 5 
    },
    title2:{
        ...FONTS.fontRegular,
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
        textDecorationColor:'#8ABE12'
    },
    imagebackground:{
        height:46,
        width:46,
        borderRadius:50,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default ForgotPassword