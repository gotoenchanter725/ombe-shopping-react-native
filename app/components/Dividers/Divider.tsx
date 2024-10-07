import React from 'react';
import { Platform, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    color ?: string;
    dashed ?: any;
    style ?: object;
}

const Divider = ({color , dashed, style} : Props) => {

    const {colors} = useTheme();

    return (
        <>
            {Platform.OS === "ios" ?
                <View style={{ 
                    overflow: 'hidden' ,
                    marginTop:15,
                    marginBottom:15, 
                    ...style,
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
                        ...style,
                    }}
                />
            }
        </>
    );
};


export default Divider;