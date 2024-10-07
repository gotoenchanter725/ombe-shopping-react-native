import React, {useEffect, useRef, useState} from 'react';
import { 
    View, 
    Animated,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    Platform
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { SIZES, FONTS, COLORS } from '../constants/theme';
import { IMAGES } from '../constants/Images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
    state : any,
    navigation : any,
    descriptors : any
}

const BottomMenu = ({state, navigation, descriptors}: Props) => {

    const theme = useTheme();
    const {colors} : {colors : any} = theme;
    
    const [tabWidth, setWidth] = useState(wp('100%'));

    const tabWD =
        tabWidth < SIZES.container ? tabWidth / 4 : SIZES.container / 4;

    const circlePosition = useRef(
        new Animated.Value(0),
    ).current;

    Dimensions.addEventListener('change', val => {
        setWidth(val.window.width);
    });
    
    useEffect(() => {
        Animated.spring(circlePosition, {
            toValue: state.index * tabWD,
            useNativeDriver: true,
        }).start();
    },[state.index,tabWidth])


    const onTabPress = (index:any) => {
        const tabW =
            tabWidth < SIZES.container ? tabWidth  / 4 : SIZES.container / 4; // Adjust this according to your tab width

        Animated.spring(circlePosition, {
            toValue: index * tabW,
            useNativeDriver: true,
        }).start();
    };




    return (
        <>
            <View
                 style={{
                    height:60,
                    flexDirection:'row',
                    backgroundColor:theme.dark ? colors.background :colors.card,
                    shadowColor: "rgba(2,81,53,.10)",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.40,
                    shadowRadius: 4.65,
                    elevation: 10,
                }}
            >
                <View
                    style={[GlobalStyleSheet.container,{
                        flexDirection: 'row',
                        paddingHorizontal: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }]}
                >

                    <Animated.View style={{transform: [{translateX: circlePosition}]}}>
                        <View
                            style={{
                                width: tabWidth < SIZES.container ? tabWidth / 4 : SIZES.container / 4,
                                position: 'absolute',
                                //backgroundColor:'red',
                                zIndex: 1,
                                top:0,
                                bottom:0,
                                left: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View
                                style={{
                                    height:40,
                                    width:40,
                                    borderRadius:50,
                                    backgroundColor:COLORS.primary,
                                }}
                            />
                        </View>
                    </Animated.View>

                    {state.routes.map((route:any , index:string) => {

                        const {options} = descriptors[route.key];
                        const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                        const isFocused = state.index === index;

                        const iconTranslateY = useRef(new Animated.Value(0)).current;
                        Animated.timing(iconTranslateY, {
                            toValue: isFocused ? -18 : 0,
                            duration: 200,
                            useNativeDriver: true,
                        }).start();

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
            
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({name: route.name, merge: true});
                                onTabPress(index);
                            }
                        };

                        return(
                            <View
                                key={index}
                                style={styles.tabItem}
                            >   
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={styles.tabLink}
                                >
                                    {/* <Animated.View
                                        style={{
                                            transform: [{translateY: iconTranslateY}],
                                    }}> */}
                                        <Image 
                                            style={{
                                                height:20,
                                                width:20,
                                                resizeMode:'contain',
                                                tintColor: isFocused ? theme.dark ? COLORS.card : colors.card : COLORS.primary ,
                                            }}
                                            source={
                                                label === 'Home'    ?  IMAGES.Home:
                                                label === 'Wishlist'   ?  IMAGES.heart2:
                                                label === 'MyCart'     ?  IMAGES.shopping:
                                                label === 'Profile'  ?  IMAGES.user3 : IMAGES.Home
                                            }
                                        />
                                    {/* </Animated.View> */}
                                    {/* <Text style={[styles.navText,{color:isFocused ? COLORS.primary : colors.title}]}>{label}</Text> */}
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tabBar : {
        height : 65,
        //borderTopWidth:1,
    },
    tabItem : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        //paddingTop:10
    },
    tabLink : {
        alignItems: 'center',
        justifyContent:'center'
    },
    navText : {
        ...FONTS.fontRegular,
        fontSize:13
    }
});
 
export default BottomMenu;