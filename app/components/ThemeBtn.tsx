import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { COLORS } from '../constants/theme';
import { IMAGES } from '../constants/Images';
import themeContext from '../constants/themeContext';

const ThemeBtn = () => {

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const {setDarkTheme ,setLightTheme} = React.useContext<any>(themeContext);

    const offset = useSharedValue(0);
    const opacityDark = useSharedValue(0);
    const opacityLight = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: offset.value}],
        };
    });
   
    if(theme.dark){
        offset.value = withSpring(34);
        opacityDark.value = withTiming(1);
        opacityLight.value = withTiming(0);
    }else{
        offset.value = withSpring(0);
        opacityLight.value = withTiming(1);
        opacityDark.value = withTiming(0);
    }


    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                if(theme.dark){
                    setLightTheme()
                }else{
                    setDarkTheme()
                }
            }
            }
            style={{
                height:40,
                width:72,
                borderRadius:50,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:theme.dark ? COLORS.title :COLORS.card,
                shadowColor: "rgba(4,118,78,.6)",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.34,
                shadowRadius: 10.27,
                elevation: 5, 
            }}
            >
            
            <Animated.View
                style={[animatedStyles,{
                height:28,
                width:28,
                borderRadius:14,
                backgroundColor:theme.dark ? COLORS.primary : COLORS.primary ,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:6,
                left:5,
                }]}
            ></Animated.View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                    source={IMAGES.sun}
                    style={{
                        height:18,
                        width:18,
                        tintColor:COLORS.white ,
                    }}
                />
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                    source={IMAGES.darkMode}
                    style={{
                        height:16,
                        width:16,
                        tintColor: theme.dark ? COLORS.white : COLORS.primary,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};


export default ThemeBtn;