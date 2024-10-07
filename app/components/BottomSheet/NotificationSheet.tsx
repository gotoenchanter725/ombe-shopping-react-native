import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { useNavigation, useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../Button/Button';
import ButtonOutline from '../Button/ButtonOutline';
//import { Ionicons } from '@expo/vector-icons';


type Props = {
    moresheet2 ?: any;
}

const NotificationSheet = ({moresheet2} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const navigation = useNavigation<any>();

    return (
        <View style={[GlobalStyleSheet.container, { backgroundColor:theme.dark ? COLORS.title:COLORS.white,paddingTop:25 }]}>
            <TouchableOpacity
                style={{ height: 38, width: 38, backgroundColor: colors.card, borderRadius: 38,position:'absolute',right:0,top:10,alignItems:'center',justifyContent:'center' }}
                onPress={() => moresheet2.current.close()}
            >
                 <FeatherIcon size={20} color={colors.title} name={'x'} />
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
                <View style={{height:80,width:80,borderRadius:100,borderWidth:1,borderColor:COLORS.danger,alignItems:'center',justifyContent:'center'}}>
                     <FeatherIcon size={40} color={COLORS.danger} name={'bell'} />
                </View>
                <Text style={[FONTS.fontMedium,{fontSize:20,color:colors.title,marginTop:10}]}>Push Notifications</Text>
                <Text style={[FONTS.fontRegular,{fontSize:16,color:colors.text,textAlign:'center',marginTop:5}]}>Stay informed with order updates, promotional offers, and platform communications.</Text>
            </View>
            <View style={{marginVertical:15,marginTop:20}}>
                <Button
                    title='Give Permission'
                    color={COLORS.primary}
                    text={COLORS.title}
                    onPress={() => navigation.navigate('Notification')}
                />
            </View>
            <View>
                <ButtonOutline
                    title='Later, Take Me Back '
                    color={COLORS.inputborder}
                    text={colors.title}
                    onPress={() => moresheet2.current.close()}
                />
            </View>
        </View>
    )
}

export default NotificationSheet