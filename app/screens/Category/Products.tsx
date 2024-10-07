import React, { useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { View, Text,TouchableOpacity,Image,ScrollView, StyleSheet, TextInput, Platform,Animated, useWindowDimensions } from 'react-native'
import { COLORS,FONTS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { addToCart } from '../../redux/reducer/cartReducer';
import CategoryCart from '../../components/CategoryCart';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const CardStyleData =[
    {
        id:"5",
        image:IMAGES.item1,
        title:"Hot Creamy Cappuccino Latte Ombe",
        price:"$12.6",
        brand:"Coffee",
    },
    {
        id:"6",
        image:IMAGES.item2,
        title:"Hot Cappuccino Latte with Mocha",
        price:"$13.6",
        brand:"Coffee",
    },
    {
        id:"7",
        image:IMAGES.item3,
        title:"Sweet Lemon Indonesian Tea",
        price:"$51.6",
        brand:"Tea, Lemon",
    },
    {
        id:"8",
        image:IMAGES.item13,
        title:"Arabica Latte Ombe Coffee",
        price:"$51.6",
        brand:"Coffee",
    },
    {
        id:"9",
        image:IMAGES.item14,
        title:"Original Latte Ombe Hot Coffee ",
        price:"$51.6",
        brand:"Coffee",
    },
]


const FirstRoute = () => (
    <ScrollView contentContainerStyle={{paddingBottom:20,marginTop:10}} showsVerticalScrollIndicator={false}>
        <CategoryCart
            data={CardStyleData}
        /> 
    </ScrollView>
);
  
const SecondRoute = () => (
    <ScrollView contentContainerStyle={{paddingBottom:20,marginTop:10}} showsVerticalScrollIndicator={false}>
        <CategoryCart
            data={CardStyleData}
        /> 
    </ScrollView>
);
const ThreeRoute = () => (
    <ScrollView contentContainerStyle={{paddingBottom:20,marginTop:10}} showsVerticalScrollIndicator={false}>
        <CategoryCart
             data={CardStyleData}
        /> 
    </ScrollView>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Three:ThreeRoute,
});


type ProductsScreenProps = StackScreenProps<RootStackParamList, 'Products'>;

const Products = ({navigation} : ProductsScreenProps)=> {

    const dispatch = useDispatch();

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const sheetRef = useRef<any>(null);

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Breverages' },
        { key: 'second', title: 'Brewed Coffee' },
        { key: 'Three', title: 'Blended Coffee' },
    ]);

    return (
       <SafeAreaView style={{backgroundColor:colors.card, flex:1}}>
            <Header
                title='Products'
                leftIcon='back'
                rightIcon3={'cart'}
            />
            <View style={[GlobalStyleSheet.container,{padding:0,paddingHorizontal:30,paddingVertical:15,backgroundColor:colors.card}]}>
                <View>
                    <TextInput
                        placeholder='Search Best items for You'
                        style={[styles.TextInput, { color: COLORS.title,backgroundColor:'#FAFAFA' }]}
                        placeholderTextColor={'#929292'} />
                    <View style={{ position: 'absolute', top: 17, right: 20 }}>
                        <FeatherIcon name='search' size={24} color={'#C9C9C9'} />
                    </View>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container,{padding:0,flex:1}]}>
                <TabView
                    style={{flexGrow:1}}
                    renderTabBar={props => (
                        <TabBar
                            pressOpacity={0}
                            {...props}
                            activeColor={COLORS.primary}
                            indicatorStyle={{ backgroundColor: COLORS.primary,height:3}}
                            labelStyle={[FONTS.fontMedium,{fontSize:16,color:'#A5A5A5'}]}
                            scrollEnabled={true}
                            tabStyle={{width:185}}
                            style={{ 
                                backgroundColor:colors.card, 
                                //borderBottomWidth: 1,
                                //borderBottomColor:'#F0F0F0',
                                paddingVertical:0,
                                paddingTop:5
                            }}
                        />
                    )}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width  }}
                />
            </View>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    TextInput:{
        ...FONTS.fontRegular,
        fontSize:16,
        color:COLORS.title,
        height:60,
        borderRadius:61,
        paddingHorizontal:40,
        paddingLeft:30,
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#FAFAFA'
    },
})

export default Products