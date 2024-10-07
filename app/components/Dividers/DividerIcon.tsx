import React from 'react';
import { Platform, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    color ?: string;
    style ?: object;
    dashed ?: any;
    icon ?: any;
}

const DividerIcon = ({color, style, dashed, icon} : Props) => {

    const {colors} = useTheme();

    return (
        <>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {Platform.OS === "ios" ?
                    <View style={{ 
                        overflow: 'hidden' ,
                        marginTop:15,
                        marginBottom:15, 
                        flex:1,
                    }}>
                        <View
                            style={{
                                borderStyle: dashed ? 'dashed' : 'solid',
                                borderWidth: 1,
                                borderColor: color ? color : colors.border,
                                margin: -2,
                                marginTop: 0,
                            }}>
                            <View style={{ height: 2 }} />
                        </View>
                    </View>
                    :
                    <View
                        style={{
                            borderBottomWidth:1, 
                            borderColor: color ? color : colors.border,
                            borderStyle: dashed ? 'dashed' : 'solid',
                            marginTop:15,
                            marginBottom:15,
                            flex:1,
                            ...style,
                        }}
                    />
                }
                {
                    icon && 
                    <View style={{paddingHorizontal:10}}>

                        {icon}
                    </View>
                }
                {Platform.OS === "ios" ?
                    <View style={{ 
                        overflow: 'hidden' ,
                        marginTop:15,
                        marginBottom:15, 
                        flex:1,
                    }}>
                        <View
                            style={{
                                borderStyle: dashed ? 'dashed' : 'solid',
                                borderWidth: 1,
                                borderColor: color ? color : colors.border,
                                margin: -2,
                                marginTop: 0,
                            }}>
                            <View style={{ height: 2 }} />
                        </View>
                    </View>
                    :
                    <View
                        style={{
                            borderBottomWidth:1, 
                            borderColor: color ? color : colors.border,
                            borderStyle: dashed ? 'dashed' : 'solid',
                            marginTop:15,
                            marginBottom:15,
                            flex:1,
                            ...style,
                        }}
                    />
                }
            </View>
        </>
    );
};


export default DividerIcon;