import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    title : string;
}

const HeaderStyle1 = ({title} : Props) => {

    const {colors} : {colors : any} = useTheme();

    return (
        <>
            <View style={{
                height:50,
                backgroundColor: colors.card,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:5,
                shadowColor: "rgba(0,0,0,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}>
                <TouchableOpacity
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <FeatherIcon color={colors.title} name='menu' size={18}/>
                </TouchableOpacity>
                <Text style={{...FONTS.h6,color:colors.title,flex:1}}>{title}</Text>
                <TouchableOpacity
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <FeatherIcon color={colors.title} name='search' size={20}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <View
                        style={{
                            height:18,
                            width:18,
                            borderRadius:20,
                            position:'absolute',
                            top:7,
                            right:10,
                            zIndex:1,
                            backgroundColor:COLORS.warning,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Text style={{...FONTS.fontXs,color:COLORS.white,...FONTS.fontRegular,lineHeight:17}}>9</Text>
                    </View>
                    <FeatherIcon color={colors.title} name='bell' size={20}/>
                </TouchableOpacity>
            </View>
        </>
    );
};



export default HeaderStyle1;