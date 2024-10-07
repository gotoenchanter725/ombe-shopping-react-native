import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './BottomTabParamList';
import WishlistScreen from '../screens/Wishlist/Wishlist';
import MyCartScreen from '../screens/MyCart/MyCart';
import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import BottomMenu from '../layout/BottomMenu';
import { View } from 'react-native';
import { SIZES } from '../constants/theme';
import { useDrawerStatus } from '@react-navigation/drawer';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
// import { Animated } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();


const BottomNavigation = () => {

    const isDrawerOpen = useDrawerStatus();

    console.log(isDrawerOpen);

    const theme = useTheme();
    const {colors}:{colors : any} = theme;

    const drawerAnimation = useSharedValue(0);

    useEffect(() => {
        if (isDrawerOpen === 'open') {
            drawerAnimation.value = withTiming(1, { duration: 100 });
        } else {
            drawerAnimation.value = withTiming(0, { duration: 100 });
        }
    }, [isDrawerOpen]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: drawerAnimation.value === 1 ? withTiming(SIZES.height - 120) : undefined,
            top: drawerAnimation.value === 1 ? withTiming(40) : 0,
            flex : drawerAnimation.value === 1 ? undefined : 1, 
            borderRadius: drawerAnimation.value === 1 ? withTiming(30) : 0,
            elevation: drawerAnimation.value === 1 ? withTiming(10) : 0,
            transform: [
                { rotate: drawerAnimation.value === 1 ? '-4deg' : '0deg' },
                { translateX: drawerAnimation.value === 1 ? withTiming(40) : 0 }
            ]
        };
    });

    return (
        <View style={{flex:1,backgroundColor:colors.card}}>
            <Animated.View
                style={[{
                  height: SIZES.height,
                  backgroundColor: colors.card,
                  overflow: 'hidden'
                }, animatedStyle]}
            >
                <Tab.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerShown : false
                    }}
                    tabBar={(props:any) => <BottomMenu {...props}/>}
                >
                    <Tab.Screen 
                        name='Home'
                        component={HomeScreen}
                    />
                    <Tab.Screen 
                        name='Wishlist'
                        component={WishlistScreen}
                    />
                    <Tab.Screen 
                        name='MyCart'
                        component={MyCartScreen}
                    />
                    <Tab.Screen 
                        name='Profile'
                        component={ProfileScreen}
                    />
                </Tab.Navigator>
            </Animated.View>
        </View>
    )
}

export default BottomNavigation;