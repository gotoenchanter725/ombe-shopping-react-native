import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    title : string;
    color ?: string;
    onPress ?: (e ?: any) => void,
    style ?: object;
    size ?: any;
    badge ?: any;
    text ?: any;
}

const ButtonLight = ({title,color,onPress,style,size,badge,text}:Props) => {

    const theme = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={()=> onPress && onPress()}
            style={[{
                height:48,
            },size === 'sm' && {
                height:40,
            },size === 'lg' && {
                height:58,
            },style && {...style}]}
        >
            <View
                style={[{
                    position:'absolute',
                    height:'100%',
                    width:'100%',
                    backgroundColor:color ? color : COLORS.primary,
                    opacity:.2,
                },theme.dark && color === COLORS.secondary && {
                    backgroundColor: 'rgba(255,255,255,.4)',
                }]}
            />
            <View
                style={[{
                    paddingHorizontal:25,
                    paddingVertical:13,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                },size === 'sm' && {
                    paddingHorizontal:25,
                    paddingVertical:10,
                },size === 'lg' && {
                    paddingHorizontal:35,
                    paddingVertical:16,
                }]}
            >
                <Text style={[
                    {
                        ...FONTS.h6,
                        ...FONTS.fontMedium,
                        lineHeight:20,
                        color: color ? color : COLORS.primary,
                        textAlign:'center',
                    },size === 'sm' && {
                        fontSize:14,
                    },size === 'lg' && {
                        fontSize:18,
                    },theme.dark && color === COLORS.secondary && {
                        color:COLORS.white,
                    },text && {color : (text)}
                ]}>{title}</Text>
                {badge && 
                    <View style={{marginVertical:-4,marginLeft:8}}>
                        {badge()}
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};


export default ButtonLight;