import React, { useState } from 'react'
import { View, Text,  ScrollView, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import Input from '../../components/Input/Input';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button/Button';
import { COLORS, FONTS } from '../../constants/theme';

const EditProfile = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navigation = useNavigation<any>();

    const [isFocused, setisFocused] = useState(false)
    const [isFocused1, setisFocused1] = useState(false)
    const [isFocused2, setisFocused2] = useState(false)
    const [isFocused3, setisFocused3] = useState(false)

    const [imageUrl, setImageUrl] = useState('');

    const handleImageSelect = () => {
        if(Platform.OS == 'android'){
            try {
                ImagePicker.openPicker({
                    width: 200,
                    height: 200,
                    cropping: true
                }).then((image: { path: React.SetStateAction<string>; })  => {
                    setImageUrl(image.path);
                });
            } catch (e) {
                console.log(e);
            }
            
        }
    }

    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
           <Header
                title='Edit Profile'
                leftIcon='back'
                titleRight
           />
            <ScrollView contentContainerStyle={{flexGrow:1,paddingHorizontal:15,marginBottom:50}}>
                <View style={[GlobalStyleSheet.container, {backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:10,borderRadius:15}]}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
                        <View style={{}}>
                            <View style={styles.imageborder}>
                                <Image
                                    style={{ height: 82, width: 82, borderRadius: 50 }}
                                    source={imageUrl ? {uri : imageUrl}  : IMAGES.small6}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleImageSelect} 
                                style={[styles.WriteIconBackground,{ backgroundColor: colors.card }]}
                            >
                                <View style={styles.WriteIcon}>
                                    <Image
                                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: COLORS.card }}
                                        source={IMAGES.write}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[FONTS.fontMedium,{fontSize:19,color:colors.title}]}>James Smith</Text>
                            <Text style={[FONTS.fontRegular,{fontSize:12,color:colors.text}]}>Last Visit : 17 Jan 2024</Text>
                        </View>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card,marginTop:10,paddingVertical:10,borderRadius:15}]}>
                    <View style={[styles.cardBackground,{ borderBottomColor:COLORS.inputborder,borderStyle:'dashed'}]}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>Overall Rating</Text>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 10 }}>
                        <Input  
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            isFocused={isFocused}
                            onChangeText={(value) => console.log(value)}
                            backround={colors.card}
                            style={{borderRadius:48}}
                            inputicon
                            placeholder='Full Name'
                            icon={<Image source={IMAGES.user2} style={[styles.icon,{tintColor:colors.title}]}/>}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input  
                            onFocus={() => setisFocused1(true)}
                            onBlur={() => setisFocused1(false)}
                            isFocused={isFocused1}
                            onChangeText={(value) => console.log(value)}
                            backround={colors.card}
                            style={{borderRadius:48}}
                            keyboardType={'number-pad'}
                            inputicon
                            placeholder='Mobile No.'
                            icon={<Image source={IMAGES.Phoneduotone} style={[styles.icon,{tintColor:colors.title}]}/>}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input  
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            isFocused={isFocused2}
                            onChangeText={(value) => console.log(value)}
                            backround={colors.card}
                            style={{borderRadius:48}}
                            inputicon
                            placeholder='Email Address '
                            icon={<Image source={IMAGES.email2} style={[styles.icon,{tintColor:colors.title}]}/>}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Input  
                            onFocus={() => setisFocused3(true)}
                            onBlur={() => setisFocused3(false)}
                            isFocused={isFocused3}
                            onChangeText={(value) => console.log(value)}
                            backround={colors.card}
                            style={{borderRadius:48}}
                            inputicon
                            placeholder='Location'
                            icon={<Image source={IMAGES.Pinduotone} style={[styles.icon,{tintColor:colors.title}]}/>}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container]}>
                <Button
                    title='Update Profile'
                    color={COLORS.primary}
                    text={ COLORS.card}
                    onPress={() => navigation.navigate('Profile')}
                    style={{borderRadius:50}}
                />
            </View> 
       </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        height:28,
        width:28,
        resizeMode:'contain',
    },
    cardBackground:{
        marginTop: 10,
        borderBottomWidth:1,
        borderBottomColor:COLORS.background,
        marginHorizontal:-15,
        paddingHorizontal:15,
        paddingBottom:15,
        marginBottom:10 
    },
    imageborder:{
        borderWidth: 2, 
        borderColor:COLORS.primary, 
        height: 90,
        width: 90, 
        borderRadius: 50, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    WriteIconBackground:{
        height: 42, 
        width: 42, 
        borderRadius: 40, 
        backgroundColor: COLORS.card, 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'absolute', 
        bottom: 0, 
        left:60
    },
    WriteIcon:{
        height: 36, 
        width: 36, 
        borderRadius: 36, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:COLORS.primary 
    },
    InputTitle:{
        ...FONTS.fontMedium, 
        fontSize: 13, 
        color:COLORS.title,
        marginBottom:5
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


export default EditProfile