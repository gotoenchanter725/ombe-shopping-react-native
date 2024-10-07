import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import Header from '../../layout/Header';
import { COLORS,FONTS} from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Cardstyle4 from '../../components/Card/Cardstyle4';


const MyorderData = [
    {
        id:"30",
        image:IMAGES.item3,
        title:'Sweet Lemon Indonesian Tea',
        price:"$12.6",
        brand:"Tea Lemon",
        btntitle:'Track Order',
        trackorder:true,
        status : "ongoing",
    },
    {
        id:"31",
        image:IMAGES.item2,
        title:"Creamy Mocha Ome Coffee",
        price:"$92.9",
        brand:"Coffee",
        btntitle:'Write Review',
        hascolor:true,
        completed:true,
        status : "completed",
    },
    {
        id:"32",
        image:IMAGES.item1,
        title:'Arabica Latte Ombe Coffee',
        price:"$11.9",
        brand:"Coffee",
        btntitle:'Write Review',
        EditReview:true,
        completed:true,
        status : "completed",
    },
    {
        id:"33",
        image:IMAGES.item4,
        title:'Original Hot Coffee',
        price:"$11.49",
        brand:"Coffee",
        btntitle:'Write Review',
        completed:true,
        status : "completed",
    },
    {
        id:"34",
        image:IMAGES.item1,
        title:"Hot Cappuccino Latte with Mocha",
        price:"$9.29",
        brand:"Coffee",
        btntitle:'Track Order',
        trackorder:true,
        status : "ongoing",
    },
    {
        id:"35",
        image:IMAGES.item2,
        title:'Arabica Latte Ombe Coffee ',
        price:"$11.99",
        btntitle:'Track Order',
        brand:"coffee",
        trackorder:true,
        status : "ongoing",
    },
]

type MyorderScreenProps = StackScreenProps<RootStackParamList, 'Myorder'>;

const Myorder = ({navigation} : MyorderScreenProps) => {
    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [orderData , setOrderData] = useState(MyorderData);
    const [activeFilter, setActiveFilter] = useState('all'); // Track active filter

    const filterData = (val:any) => {
        setActiveFilter(val); // Update active filter when a filter is selected
        if(val === 'all'){
            setOrderData(MyorderData);
        } else {
            const newArry = MyorderData.filter(e => e.status === val);
            setOrderData(newArry);
        }
    }


    return (
       <View style={{backgroundColor:colors.card,flex:1}}>
            <Header
                title='My Order'
                leftIcon='back'
                rightIcon4='home'
            />
            <View 
                style={[{
                        width:'auto',
                        position:'absolute',
                        left:10,
                        right:10,
                        bottom:10,
                        zIndex:10,
                        backgroundColor:COLORS.title,
                        borderRadius: 60,
                        height:65,
                        //alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:10
                    }]}
            >
                <View style={GlobalStyleSheet.flex}>
                    <TouchableOpacity
                        onPress={() => filterData('all')} 
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:47,
                            width:'20%',
                            backgroundColor: activeFilter === 'all' ? COLORS.primary : COLORS.title,
                            borderRadius:50,
                        }}
                    >
                        <Text style={[
                            FONTS.fontRegular,{fontSize:14,color: activeFilter === 'all' ? COLORS.card : COLORS.card },
                        ]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterData('ongoing')}
                        activeOpacity={0.5}  
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:47,
                            width:'40%',
                            backgroundColor:activeFilter === 'ongoing' ? COLORS.primary : COLORS.title,
                            borderRadius:50,
                        }}
                    >
                        <Text style={[
                            FONTS.fontRegular,{fontSize:14,color: activeFilter === 'ongoing' ? COLORS.card : COLORS.card },
                        ]}>Ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterData('completed')} 
                        activeOpacity={0.5}  
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            height:47,
                            width:'40%',
                            backgroundColor:activeFilter === 'completed' ? COLORS.primary : COLORS.title ,
                            borderRadius:50,
                        }}
                    >
                         <Text style={[
                            FONTS.fontRegular,{fontSize:14,color: activeFilter === 'completed' ? COLORS.card : COLORS.card },
                        ]}>Completed</Text>
                    </TouchableOpacity>
                </View>
            </View>
           <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:70,}}>
                <View style={[GlobalStyleSheet.container, { paddingTop: 20,paddingHorizontal:20 }]}>
                    <View style={{ }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View>
                                {orderData.map((data:any, index) => {
                                    return (
                                        <View   key={index} style={{marginBottom:30}}>
                                            <Cardstyle4
                                                id={data.id}
                                                Myorder={true}
                                                title={data.title}
                                                price={data.price}
                                                image={data.image}
                                                brand={data.brand}
                                                btntitle={data.btntitle}
                                                completed={data.completed}
                                                onPress={() => navigation.navigate('ProductsDetails')}
                                                onPress3={() => navigation.navigate('Trackorder')}
                                                onPress4={() => navigation.navigate('Writereview')}                                          
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
       </View>
    )
}


const styles = StyleSheet.create({
    TopbarCenterLine:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        justifyContent:'center',
    }
})

export default Myorder