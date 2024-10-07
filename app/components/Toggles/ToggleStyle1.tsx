import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS } from '../../constants/theme';

const ToggleStyle1 = (props:any) => {
    
    const theme = useTheme();
    const {colors} = theme;

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
    useEffect(() => {
        if(props.active){
            setActive(true);
            offset.value = withSpring(28)
        }
    },[props.active])

    return (
        <>
            <TouchableOpacity
                onPress={() => { 
                    props.onToggle && props.onToggle(active);
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
                    backgroundColor : active ? COLORS.primary : theme.dark ? 'rgba(255,255,255,.15)' : '#e8e9ea',
                }]}
            >
                <Animated.View
                    style={[toggleStyle,{
                        height:24,
                        width:24,
                        backgroundColor:"#fff",
                        top:4,
                        left:4,
                    }]}
                />
            </TouchableOpacity>
        </>
    );
};

export default ToggleStyle1;