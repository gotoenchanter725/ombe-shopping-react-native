import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import { useTheme } from '@react-navigation/native';

type Props = {
    title : string;
    color ?: string;
    style ?: object;
    rounded ?: any;
    size ?: any;
}

const BadgeOutline = ({title,color,style,rounded,size}:Props) => {

    const {colors} : {colors : any } = useTheme();

  return (
    <View
        style={[{position:'relative',height:20},
        size === 'md' && {
            height:26,
        },
        size === 'lg' && {
            height:32,
        },
        style && {...style}]}
    >
        <View
            style={[{
                height:'100%',
                width:'100%',
                position:'absolute',
                borderWidth:1,
                borderRadius:SIZES.radius_sm,
                borderColor:color ? color : COLORS.primary,
                opacity:.5,
            },rounded && {
                borderRadius:30,
            }]}
        />
        <View
            style={[{
                paddingHorizontal:8,
                paddingVertical:3,
            },size === "md" && {
                paddingHorizontal:10,
                paddingVertical:6,
            },size === "lg" && {
                paddingHorizontal:16,
                paddingVertical:4,
            }]}
        >
            <Text style={[
                {...FONTS.fontXs,color:color ? color : COLORS.primary},
                (color == COLORS.secondary || color == COLORS.dark) && {
                    color:colors.title,
                },
                size === "md" && {
                    fontSize:13,
                },
                size === "lg" && {
                    fontSize:15,
                    lineHeight:22,
                }]}>{title}</Text>
        </View>
    </View>
  )
}

export default BadgeOutline;