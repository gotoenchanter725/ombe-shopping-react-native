import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

type Props = {
    title : string,
    onPress ?: (e : any) => void,
    color ?: any,
    style ?: object,
    size ?: any,
    text ?: any,
}

const Button = ({
    title,
    onPress,
    color,
    style,
    size,
    text,
}: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View
                style={[styles.button,color && {
                    backgroundColor:color,
                },size === 'sm' && {
                    height:36,
                    paddingHorizontal:10,
                    borderRadius:4
                },size === 'lg' && {
                    height:55,
                    paddingHorizontal:30,
                },style && {...style}]}
            >
                <Text style={[styles.buttnTitle,size === 'sm' && {
                        fontSize:14,
                    },size === 'lg' && {
                        fontSize:18,
                    },color && {color : COLORS.white},text && {color : (text)}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor:COLORS.primary,
        height:60,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
    },
    buttnTitle : {
        ...FONTS.fontSemiBold,
        fontSize:16,
        color : '#fff',
        lineHeight:24,
        textTransform:'uppercase'
    }
});

export default Button;