import React, {useRef} from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    tabMenu : any;
    setActiveTab : any;
    activeTab : any;
    colors : any;
    size ?: string;
    color ?: string;
    activeIndex ?: number;
}

const TabStyle1 = ({tabMenu, setActiveTab, activeTab, colors, size, color, activeIndex} : Props) => {

    const theme = useTheme();
    const tabWidth =  (size === 'sm' ? SIZES.width - 38 : SIZES.width - 42) / 2;

    const indicatorPosition = useRef(new Animated.Value(activeIndex === 1 ? tabWidth : 0)).current;
    
    const onTabPress = (index:any) => {
        const tabW = tabWidth;
        Animated.spring(indicatorPosition, {
          toValue: index * tabW,
          useNativeDriver: true,
        }).start();
    };

    return (
        <View
            style={{
                height: size === 'sm' ? 38 : 48,
                borderRadius:SIZES.radius_sm,
                backgroundColor : colors.card,
                flexDirection:'row',
                paddingHorizontal:3,
                paddingVertical: size === 'sm' ?  4 : 6,
                marginBottom:8,
            }}
        >
            <Animated.View
                style={{
                    width : tabWidth,
                    position:'absolute',
                    backgroundColor:color ? theme.dark ? color : COLORS.primary : COLORS.primary,
                    height:'100%',
                    top:size === 'sm' ? 4 : 6,
                    left:size === 'sm' ? 4 : 6,
                    borderRadius:SIZES.radius_sm,
                    transform : [{translateX : indicatorPosition}]
                }}
            >
            </Animated.View>
            {tabMenu.map((data:any,index:any) => {

                return (
                    <View 
                        key={index}
                        style={{flex:1,paddingHorizontal:3}}
                    >
                        <TouchableOpacity
                            onPress={() => {onTabPress(index);setActiveTab(data)}}
                            style={{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center',
                            }}
                        >
                            <Text 
                                style={[
                                    FONTS.font,
                                    FONTS.fontSemiBold,
                                    {
                                        color: data === activeTab ? "#000" : colors.title,
                                        lineHeight:14,
                                    }]}>{data}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default TabStyle1;