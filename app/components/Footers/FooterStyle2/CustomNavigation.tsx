import React, {useEffect, useRef, useState} from 'react';
import { 
    View, 
    Animated,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Dimensions
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SIZES,COLORS,FONTS } from '../../../constants/theme';
import { IMAGES } from '../../../constants/Images';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const home  = require('../../../assets/images/icons/home.png');
const wallet  = require('../../../assets/images/icons/wallet.png');
const profile  = require('../../../assets/images/icons/user.png');
const transfer  = require('../../../assets/images/icons/transfer.png');
const trade  = require('../../../assets/images/icons/trade.png');

type Props = {
    state : any,
    navigation : any,
    descriptors : any
}

const CustomNavigation = ({state, navigation, descriptors}: Props) => {

    const theme = useTheme();
    const {colors} : {colors : any} = theme;
    
    const [tabWidth, setWidth] = useState(wp('100%'));


    const tabWD =
        tabWidth < SIZES.container ? (tabWidth - 20) / 5 : SIZES.container / 5;

    const circlePosition = useRef(
        new Animated.Value(0),
    ).current;

    Dimensions.addEventListener('change', val => {
        setWidth(val.window.width);
    });
    
    useEffect(() => {
        Animated.spring(circlePosition, {
            toValue: state.index * tabWD ,
            useNativeDriver: true,
        }).start();
    },[state.index,tabWidth])

    
    
    return (
        <View style={{
            height:60,
            flexDirection:'row',
            position:'absolute',
            //width:'100%',
            width:'auto',
            left:10,
            right:10,
            bottom:10,
            borderRadius: 20,
            shadowColor: "rgba(0,0,0,.6)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            //backgroundColor:'green'
            backgroundColor:theme.dark ? 'rgba(0,9,9,.6)' :colors.card,
            
        }}>  
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
                            width: tabWidth < SIZES.container ? tabWidth / 5 : SIZES.container / 5,
                            position: 'absolute',
                            //backgroundColor:'red',
                            zIndex: 1,
                            bottom:10,
                            left: 0,
                            right:0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            //width:(SIZES.width - 30) / 5,
                        }}
                    >
                        {/* <View
                            style={{
                                height:65,
                                width:65,
                                borderRadius:0,
                                backgroundColor:'rgba(255,255,255,.1)',
                                position:'absolute',
                            }}
                        /> */}
                        <View
                            style={{
                                height:45,
                                width:45,
                                borderRadius:45,
                                backgroundColor:theme.dark ? COLORS.white :COLORS.primary,
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
                        toValue: isFocused ? 0: 0,
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
                                <Animated.View
                                    style={{
                                        transform: [{translateY: iconTranslateY}],
                                }}>
                                    <Image 
                                        style={{
                                            height:20,
                                            width:20,
                                            resizeMode:'contain',
                                            marginBottom:5,
                                            marginLeft:3,
                                            opacity:isFocused ? 1 : .6,
                                            tintColor:isFocused ?theme.dark ? COLORS.title : COLORS.white : colors.text,
                                        }}
                                        source={
                                            label === 'Home'    ?  home:
                                            label === 'Markets' ?  transfer:
                                            label === 'Change'   ?  trade:
                                            label === 'Wallet'   ?  wallet:
                                            label === 'Profile'  ?  profile : IMAGES.Home
                                        }
                                    />
                                </Animated.View>
                                {/* <Text style={[styles.navText,{color:colors.title,opacity:isFocused ? 0 : 1}]}>{label}</Text> */}
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar : {
        height : 60,
        borderTopWidth:1,
    },
    tabItem : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    tabLink : {
        alignItems: 'center',
    },
    navText : {
        ...FONTS.fontXs,
        ...FONTS.fontMedium,
    }
});
 
export default CustomNavigation;