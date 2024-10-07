import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';

const HeaderStyle3 = () => {

    const {colors}:{colors : any} = useTheme();

    return (
        <>
            <View style={{
                height:70,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:15,
            }}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={IMAGES.user}
                        style={{
                            height:45,
                            width:45,
                            borderRadius:45,
                            marginRight:12,
                        }}
                    />
                    <View>
                        <Text style={{...FONTS.fontXs,...FONTS.fontMedium,color:colors.text,marginBottom:2}}>Hello, John</Text>
                        <Text style={{...FONTS.font,...FONTS.fontRegular,color:colors.title}}>Thursday, 10 Sep</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        height:45,
                        width:45,
                        borderWidth:1,
                        backgroundColor:colors.card,
                        borderRadius:SIZES.radius,
                        borderColor:colors.border,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <View
                        style={{
                            position:'absolute',
                            zIndex:1,
                            height:10,
                            width:10,
                            top:11,
                            right:12,
                            borderRadius:8,
                            backgroundColor:COLORS.primary,
                            borderWidth:2,
                            borderColor:colors.card,
                        }}
                    />
                    <FeatherIcon name='bell' color={colors.title} size={20}/>
                </TouchableOpacity>
            </View>
        </>
    );
};



export default HeaderStyle3;