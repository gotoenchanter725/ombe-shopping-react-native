import { View, Text,  ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Cardstyle2 from '../../components/Card/Cardstyle2';


const WriteReviewData = [
    {
        id:"40",
        image:IMAGES.item1,
        title:"Hot Creamy Cappuccino Latte Ombe",
        price:"$12.6",
        brand:"Coffee",
    },
]

const btnData = [
    {
        name:"Yes"
    },
    {
        name:"No"
    }
]

type WritereviewScreenProps = StackScreenProps<RootStackParamList, 'Writereview'>;

const Writereview = ({navigation} : WritereviewScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isChecked, setIsChecked] = useState(btnData[0]);

    const [rating , setRating] = useState(4);
    
   
    return (
        <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Write Review'
                leftIcon='back'
                titleRight
            />
            <ScrollView contentContainerStyle={{flexGrow:1,paddingHorizontal:15,}}>
                <View style={[GlobalStyleSheet.container,{padding:0,marginBottom:10,backgroundColor:theme.dark ? colors.background :colors.card,}]}>
                    <View style={{
                        marginHorizontal: -15
                    }}>
                        {WriteReviewData.map((data:any, index) => {
                            return (
                                <View key={index}>
                                     <Cardstyle2
                                        id={data.id} 
                                        title={data.title}
                                        price={data.price}
                                        image={data.image}
                                        onPress={() => navigation.navigate('ProductsDetails')} 
                                        brand={data.brand}
                                        writeReview={true}                                    
                                    />
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{alignItems:'center',marginTop:20,marginBottom:30}}>
                        <Text style={{...FONTS.fontSemiBold,fontSize:18,color:colors.title}}>What do you think?</Text>
                        <Text style={{...FONTS.fontRegular,fontSize:14,color:colors.title,textAlign:'center',paddingHorizontal:25,marginTop:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{padding:0 ,alignItems:'center'}]}>
                    <Text style={{...FONTS.fontSemiBold,fontSize:50,color:colors.title}}>{rating}.0</Text>
                    <View style={{flexDirection:'row'}}>
                        {new Array(rating).fill(rating).map((_,index) => {
                            return(
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => setRating(index + 1)}
                                    key={index}
                                    style={{margin:5}}
                                >
                                    <View
                                        style={{
                                            height:50,
                                            width:50,
                                            borderRadius:50,
                                            backgroundColor:'#FF8730',
                                            alignItems:'center',
                                            justifyContent:'center'
                                        }}
                                    >
                                        <Image
                                            style={[GlobalStyleSheet.image3,{zIndex:1}]}
                                            source={IMAGES.Star4}
                                        />  
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        {new Array(5 - rating).fill(5 - rating).map((_,index) => {
                            return(
                                <TouchableOpacity
                                    activeOpacity={1}
                                    key={index}
                                    onPress={() => setRating(index + rating + 1)}
                                    style={{margin:5}}
                                >
                                    <View
                                        style={{
                                            height:50,
                                            width:50,
                                            borderRadius:50,
                                            backgroundColor:'#B6B6B6',
                                            alignItems:'center',
                                            justifyContent:'center'
                                        }}
                                    >
                                        <Image
                                            style={[GlobalStyleSheet.image3,{zIndex:1}]}
                                            source={IMAGES.Star4}
                                        />    
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <TextInput
                        placeholder='Write your review here'
                        placeholderTextColor={'#AFAFAF'}
                        numberOfLines={4}
                        multiline
                        style={{
                            ...FONTS.fontRegular,
                            fontSize:16,
                            color:colors.title,
                            height:108,
                            width:'100%',
                            backgroundColor:colors.card,
                            padding:20,
                            borderRadius:20,
                            borderWidth:2,
                            borderColor:COLORS.primary
                        }}
                    />
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container]}>
                <Button
                    title='Send'
                    color={COLORS.primary}
                    text={COLORS.card }
                    onPress={() => navigation.navigate('Rewards')}
                    style={{borderRadius:50}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardBackground:{
        marginTop: 15,
        borderBottomWidth:1,
        borderBottomColor:COLORS.background,
        marginHorizontal:-15,
        paddingHorizontal:15,
        paddingBottom:15,
        marginBottom:10 
    },
    inputTitle:{
        ...FONTS.fontRegular, 
        fontSize: 12, 
        color: COLORS.title, 
        marginBottom: 5 
    },
    title:{
        ...FONTS.fontMedium, 
        fontSize: 16, 
        color: COLORS.title 
    },
    bottomBtn:{
        height:75,
        width:'100%',
        backgroundColor:COLORS.card,
        justifyContent:'center',
        paddingHorizontal:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: .1,
        shadowRadius: 5,
    }
})

export default Writereview