import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS } from '../../constants/theme';

const ToggleStyle2 = () => {
    

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
                    width:60,
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
                    <FeatherIcon name={'check'} size={16} color={COLORS.white}/>
                    <FeatherIcon name={'x'} size={16} color={COLORS.white}/>
                </View>
                <Animated.View
                    style={[toggleStyle,{
                        height:24,
                        width:24,
                        backgroundColor:'#fff',
                        top:4,
                        left:4,
                    }]}
                />
            </TouchableOpacity>
        </>
    );
};

export default ToggleStyle2;