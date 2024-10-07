import React from 'react';
import Ripple from 'react-native-material-ripple';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ListStyle2 = (props:any) => {

    const {colors}:{colors : any} = useTheme();

    return (
        <>
            <Ripple
                onPress={() => props.onPress && props.onPress()}
                style={[{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingVertical:20,
                    borderBottomWidth:1,
                    borderColor:colors.border,
                }]}
            >
                <View style={{
                    height:40,
                    width:40,
                    borderWidth:1,
                    borderColor:colors.border,
                    borderRadius:SIZES.radius,
                    marginRight:12,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    {props.icon}
                </View>
                <View style={{flex:1,paddingRight:10}}>
                    <Text style={[FONTS.font,FONTS.fontMedium,{color:colors.title,fontSize:15,marginBottom:7}]}>{props.title}</Text>
                    <Text numberOfLines={1} style={[FONTS.fontSm,{opacity:.6,color:colors.text,marginBottom:2,lineHeight:14}]}>{props.desc}</Text>
                </View>
                <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/>
            </Ripple>
        </>
    );
};

export default ListStyle2;