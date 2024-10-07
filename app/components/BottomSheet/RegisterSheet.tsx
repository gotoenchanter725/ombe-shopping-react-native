import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Input from '../Input/Input';
import Button from '../Button/Button';

type Props = {
    sheetRef : any;
}

const RegisterSheet = ({sheetRef} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={[GlobalStyleSheet.container,{padding:0}]}>
            <View style={[GlobalStyleSheet.container,{backgroundColor:theme.dark ? colors.background :colors.card}]}>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingBottom:15,
                        marginBottom:20,
                        borderBottomWidth:1,
                        borderBottomColor:colors.border,
                    }}
                >
                    <Text style={{flex:1,...FONTS.h6,color:colors.title}}>Register</Text>
                    <TouchableOpacity
                        onPress={() => sheetRef.current.close()}
                        style={{
                            height:32,
                            width:32,
                            borderRadius:32,
                            backgroundColor:colors.background,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        {/* <FeatherIcon size={20} color={colors.title} name="x"/> */}
                        <FeatherIcon size={20} color={colors.title} name="x"/>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Username</Text>
                    <Input
                        //value={''}    
                        placeholder={'Type Username Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Email</Text>
                    <Input
                        //value={''}    
                        placeholder={'Type Email Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:25}}>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:4}}>Password</Text>
                    <Input
                        //value={''}   
                        type="password" 
                        placeholder={'Type Password Here'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <Button 
                    onPress={() => {}}
                    title={'Register'}
                    text={theme.dark ? COLORS.title :COLORS.card}
                    color={colors.title}
                />
            </View>
        </View>
    );
};



export default RegisterSheet;