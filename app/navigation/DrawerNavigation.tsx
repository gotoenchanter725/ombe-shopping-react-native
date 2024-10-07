import React from 'react';
// import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import DrawerMenu from '../layout/DrawerMenu';


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {

    const { colors } = useTheme();

    return (
        <>
            {/* <BottomNavigation/> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
                <Drawer.Navigator
                    initialRouteName='BottomNavigation'
                    screenOptions={{
                        headerShown: false,
                        drawerType:'slide',
                        overlayColor:'transparent',
                    }}
                    drawerContent={(props) => {
                        return <DrawerMenu navigation={props.navigation} />
                    }}
                    >
                    <Drawer.Screen name='BottomNavigation' component={BottomNavigation} />
                </Drawer.Navigator>
            </SafeAreaView>
        </>
    );
};


export default DrawerNavigation;