import React from 'react';
import { View, Text,  ScrollView, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
//import { Ionicons } from '@expo/vector-icons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';

const accordionIco = require('../../assets/images/icons/accordion.png');
const bottomSheet = require('../../assets/images/icons/bottomSheet.png');
const modal = require('../../assets/images/icons/modal.png');
const chart = require('../../assets/images/icons/chart.png');
const divider = require('../../assets/images/icons/divider.png');
const badge = require('../../assets/images/icons/badge.png');
const input = require('../../assets/images/icons/input.png');
const list = require('../../assets/images/icons/list.png');
const pricing = require('../../assets/images/icons/pricing.png');
const share = require('../../assets/images/icons/share.png');
const tabs = require('../../assets/images/icons/tabs.png');
const table = require('../../assets/images/icons/table.png');
const toggle = require('../../assets/images/icons/toggle.png');

const ComponentData = [
    {
        icon : accordionIco,
        title : "Accordions List",
        navigate : 'Accordion',
    },
    {
        icon : bottomSheet,
        title : "Bottom Sheets",
        navigate : 'BottomSheet',
    },
    {
        icon : modal,
        title : "Modal Box",
        navigate : 'ModalBox',
    },
    {
        icon : accordionIco,
        title : "Button Styles",
        navigate : 'Buttons',
    },
    {
        icon : badge,
        title : "Badges",
        navigate : 'Badges',
    },
    {
        icon : chart,
        title : "Charts",
        navigate : 'Charts',
    },
    {
        icon : accordionIco,
        title : "Header Styles",
        navigate : 'Headers',
    },
    {
        icon : accordionIco,
        title : "Footer Menu Styles",
        navigate : 'Footers',
    },
    {
        icon : input,
        title : "Inputs",
        navigate : 'Inputs',
    },
    {
        icon : list,
        title : "List Styles",
        navigate : 'lists',
    },
    {
        icon : pricing,
        title : "Pricing Pack",
        navigate : 'Pricings',
    },
    {
        icon : divider,
        title : "Seprators",
        navigate : 'DividerElements',
    },
    {
        icon : accordionIco,
        title : "Snackbars",
        navigate : 'Snackbars',
    },
    {
        icon : share,
        title : "Social",
        navigate : 'Socials',
    },
    {
        icon : accordionIco,
        title : "Swipeable",
        navigate : 'Swipeable',
    },
    {
        icon : tabs,
        title : "Tabs",
        navigate : 'Tabs',
    },
    {
        icon : table,
        title : "Table",
        navigate : 'Tables',
    },
    {
        icon : toggle,
        title : "Toggle",
        navigate : 'Toggles',
    },
]
type ComponentScreenProps = StackScreenProps<RootStackParamList, 'Components'>;

const Components = ({navigation} : ComponentScreenProps) => {
    
    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View
            style={{
                flex:1,
                backgroundColor:colors.background,
            }}
        >
            <Header
                title='Components'
                leftIcon='back'
                titleRight
                //titleLeft
                //rightIcon1='search'
            />
            <ScrollView contentContainerStyle={{paddingBottom:15,paddingTop:15}}>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    {ComponentData.map((data:any,index) => {
                        return(
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate(data.navigate)}
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 15,
                                    height: 48,
                                    alignItems: 'center',
                                    padding: 10,
                                    borderRadius: SIZES.radius_lg,
                                    backgroundColor:colors.card,
                                    marginBottom:10
                                }}
                            >
                                <View style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 10,
                                }}>
                                    <Image
                                        style={{
                                            height:20,
                                            width:20,
                                            tintColor:COLORS.primary,
                                            resizeMode:'contain',
                                        }}
                                        source={data.icon}
                                    />
                                </View>
                                <Text style={{...FONTS.fontRegular,fontSize:14,color:colors.title,flex:1}}>{data.title}</Text>
                                <FeatherIcon size={20} color={colors.title} name={'chevron-right'} />
                                {/* <Ionicons  style={{opacity:.8}} color={colors.title} name='chevron-forward' size={20}/> */}
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default Components;