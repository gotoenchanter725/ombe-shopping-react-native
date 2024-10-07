import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

type Props = {
    title : string;
    color ?: any;
    style ?: object;
    rounded ?: any;
    size ?: string;
    text ?: any;
}

const Badge = ({title,color,style,rounded,size,text}:Props) => {
    return (
        <View
            style={[{
                paddingHorizontal:8,
                paddingVertical:3,
                backgroundColor:color ? color : COLORS.primary,
                height:20,
                borderRadius:SIZES.radius_sm,
            },style && {
                ...style,
            },rounded && {
                borderRadius:30,
            },size === "md" && {
                paddingHorizontal:10,
                paddingVertical:6,
                height:26
            },size === "lg" && {
                paddingHorizontal:16,
                paddingVertical:4,
                height:32
            }]}
        >
            <Text style={[
                {...FONTS.fontXs,color:COLORS.title,lineHeight:15},
                color && {
                    color: COLORS.white,
                },
                (color === COLORS.light || color === COLORS.white) && {
                    color:COLORS.title
                },
                size === "md" && {
                    fontSize:13,
                },
                size === "lg" && {
                    fontSize:15,
                    lineHeight:22,
                },text && {color : (text)}
                ]}>{title}</Text>
        </View>
    )
}

export default Badge;