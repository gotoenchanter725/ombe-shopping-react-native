import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../../../layout/Header';
import CustomNavigation from './CustomNavigation';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';


const Home = () => {
    return(
        <>
        </>
    )
}
const Market = () => {
    return(
        <>
        </>
    )
}
const Change = () => {
    return(
        <>
        </>
    )
}
const Wallet = () => {
    return(
        <>
        </>
    )
}
const Profile = () => {
    return(
        <>
        </>
    )
}

const Tab = createBottomTabNavigator();

const TabStyle3 = () => {

    const {colors} = useTheme();

    return (
        <View style={{flex:1,backgroundColor:colors.card}}>
            <Header title={'Footer Style 3'} leftIcon={'back'} titleRight />
            <Tab.Navigator
                 tabBar={props => <CustomNavigation {...props} />}
                 screenOptions={{
                     headerShown:false,
                 }}
                 initialRouteName="Home"
            >
                <Tab.Screen 
                    name="Markets"
                    component={Market}
                />
                <Tab.Screen 
                    name="Change"
                    component={Change}
                />
                <Tab.Screen 
                    name="Home"
                    component={Home}

                />
                <Tab.Screen 
                    name="Wallet"
                    component={Wallet}
                />
                <Tab.Screen 
                    name="Profile"
                    component={Profile}
                />
            </Tab.Navigator>
        </View>
    );
};



export default TabStyle3;