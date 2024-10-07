import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    color ?: string;
    textcolor ?: string;
    border ?: string;
    rounded ?: any;
    icon ?: any;
    text ?: string;
    onpress ?:any;
    gap?:any;
}

const SocialBtn = ({color, rounded, icon, text ,onpress,gap,textcolor,border} : Props) => {

    const {colors}:{colors : any} = useTheme();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[{
                backgroundColor: color ? color : COLORS.borderColor,
                paddingVertical: 18,
                overflow: 'hidden',
                paddingHorizontal:gap ? 25 :30,
                height: 60,
                alignItems: 'center',
                flexDirection: 'row',
                gap:gap ? 5: 10,
                justifyContent: 'center',
                borderWidth:1,
                borderColor:border ? border : COLORS.borderColor
            }, rounded && {
                borderRadius: 30,
            }]}
            onPress={onpress}
        >
            <View
                style={[{
                    // width: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, rounded && {
                    borderRadius: 30,
                }]}
            >
                {icon}
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{...FONTS.fontSemiBold,color:textcolor ? textcolor :colors.title,fontSize:16,textAlign:'center'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};



export default SocialBtn;