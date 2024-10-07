import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ToggleStyle3 = () => {
    
    const {colors} = useTheme();

    const [active , setActive] = useState(false);

    const offset = useSharedValue(0);
    const toggleStyle = useAnimatedStyle(() => { 
        return {
            transform: [
                { 
                    translateX:  offset.value
                }
            ],
        };
    });

    return (
        <>
            <TouchableOpacity
                onPress={() => { 
                    setActive(!active);
                    if(active){
                        offset.value = withSpring(0)
                    }else{
                        offset.value = withSpring(28)
                    }
                }}
                style={[{
                    height:32,
                    width:65,
                    backgroundColor : active ? COLORS.success : COLORS.danger,
                }]}
            >
                <View
                    style={{
                        position:'absolute',
                        height:'100%',
                        width:'100%',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:4,
                        justifyContent:'space-around',
                    }}
                >
                    <Text style={{...FONTS.font,...FONTS.fontMedium,fontSize:10,color:COLORS.white}}>ON</Text>
                    <Text style={{...FONTS.font,...FONTS.fontMedium,fontSize:10,color:COLORS.white}}>OFF</Text>
                </View>
                <Animated.View
                    style={[toggleStyle,{
                        height:24,
                        width:26,
                        backgroundColor:'#fff',
                        top:4,
                        left:4,
                        right:4
                    }]}
                />
            </TouchableOpacity>
        </>
    );
};

export default ToggleStyle3;