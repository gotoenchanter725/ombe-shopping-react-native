import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text,TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from 'react-native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { COLORS, FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';


const SearchData = [
    {
        title: "Hot Cappuccino Latte with Mocha",
    },
    {
        title: "Sweet Lemon Indonesian Tea",
    },
    {
        title: "Arabica Latte Ombe Coffee",
    },
    {
        title: "Original Hot Coffee",
    },
]

const Search = ({navigation} : any) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    //const navigation = useNavigation();

    const [items, setItems] = useState(SearchData);

    const removeItem = () => {
        setItems([]);
    };

    const [show, setshow] = useState(SearchData);


  const removeItem2 = (indexToRemove: number) => {
    setshow(prevItems => prevItems.filter((item, index) => index !== indexToRemove));
  };


  return (
    <View style={{backgroundColor:colors.card,flex:1}}>
        <View 
            style={[
                GlobalStyleSheet.container,
                {
                    height:80,
                    backgroundColor:theme.dark ? colors.background :colors.card,
                    justifyContent:'center',
                }
            ]}
        >
            <View style={[GlobalStyleSheet.row,{alignItems:'center',gap:10}]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.searchCard,{backgroundColor:'#F6F6F6'}]}
                >
                    <FeatherIcon size={24} color={COLORS.title} name={'arrow-left'} />
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <TextInput
                        placeholder='Search Best items for You'
                        placeholderTextColor={COLORS.text}
                        style={[styles.searchTextinput,{
                            borderColor:colors.border,
                            color:COLORS.title,
                        }]}
                    />
                </View>
            </View>
        </View>
        <View style={[GlobalStyleSheet.container,{paddingTop:0}]}>
            <View style={{}}>
                {items.length > 0 &&
                    <View style={{ marginTop: 10 }}>
                        {show.length > 0 && 
                            <View style={[GlobalStyleSheet.flex,{marginBottom:10}]}>
                                <Text style={{ ...FONTS.fontMedium, fontSize: 20, color: colors.title }}>Search History</Text>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => removeItem()}
                                    >
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 12, color: colors.title }}>Clear All</Text>
                                    </TouchableOpacity>
                            </View>
                        }
                        <View style={{ marginTop: 10 }}>
                            {show.map((data, index) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Products')}
                                         key={index} 
                                         style={[GlobalStyleSheet.flex,{ paddingVertical: 8 }]}
                                    >
                                        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                                            <Image
                                                style={[GlobalStyleSheet.image2,{tintColor:COLORS.primary}]}
                                                source={IMAGES.timer}
                                            />
                                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>{data.title}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => removeItem2(index)}
                                        >
                                            <Image
                                                style={{ height: 19, width: 19, resizeMode: 'contain', opacity: 0.5, tintColor:COLORS.primary }}
                                                source={IMAGES.close}
                                            />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )	
                            })}
                        </View>
                    </View>
                }
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchCard:{
        height:45,
        width:45,
        borderRadius:45,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.background
    },
    searchTextinput:{
        ...FONTS.fontRegular,
        height:48,
        width:'100%',
        borderRadius:30,
        paddingHorizontal:20,
        color:COLORS.title,
        fontSize:14,
        backgroundColor:COLORS.background
    },
    resentData:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:15,
        borderBottomWidth:1,
        marginHorizontal:-15,
        paddingHorizontal:15
    },
    searchData:{
        backgroundColor:COLORS.card,
        paddingHorizontal:15
        ,paddingVertical:10,
        borderRadius:15,
        marginTop:5
        // borderTopLeftRadius:0,
        // borderTopRightRadius:0
    },
    searchDataTitle:{
        height:41,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        paddingHorizontal:15,
        borderColor:COLORS.borderColor,
        marginBottom:5,
        marginRight:5,
        borderRadius:8
    }
})

export default Search;