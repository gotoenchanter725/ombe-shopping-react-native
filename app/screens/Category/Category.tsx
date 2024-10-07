import { View, Text,  ScrollView, Image, TouchableOpacity, StyleSheet   } from 'react-native'
import React, { useState } from 'react'
import Header from '../../layout/Header'
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { COLORS,FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
//import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


type CategoryScreenProps = StackScreenProps<RootStackParamList, 'Category'>;

const Category = ({navigation} : CategoryScreenProps) => {

  const theme = useTheme();
  const { colors } : {colors : any} = theme;

    const [currentindex , setcurrentindex] = useState(0);
    

  return (
    <View style={{backgroundColor:colors.background,flex:1}}>
        <Header
          title='Categories'
          leftIcon='back'
          rightIcon1={'search'}
        />
        <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:90}}>
            <View style={[GlobalStyleSheet.container]}>
               <View style={GlobalStyleSheet.flex}>
                    <TouchableOpacity
                        activeOpacity={0.8} 
                        style={[GlobalStyleSheet.col50]}
                        onPress={() => navigation.navigate('Products')}
                    >
                        <View>
                            <Image
                                style={[styles.image,{aspectRatio:1/1.3}]}
                                source={IMAGES.item5}
                            />
                            <View
                                style={[styles.imageoverlay,{aspectRatio:1/1.3}]}
                            >
                                <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Mountain</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={[GlobalStyleSheet.col50]}>
                        <View style={{flexDirection:'row',flexWrap:'wrap',height:undefined,width:'100%',aspectRatio:1/1.3,justifyContent:'center',alignItems:'center',gap:10}}>
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                onPress={() => navigation.navigate('Products')}
                            >
                                <Image
                                    style={[styles.image,{aspectRatio:1/.62}]}
                                    source={IMAGES.item6}
                                />
                                <View
                                   style={[styles.imageoverlay,{aspectRatio:1/.62}]}
                                >
                                    <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Men</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                onPress={() => navigation.navigate('Products')}
                            >
                                <Image
                                    style={[styles.image,{aspectRatio:1/.62}]}
                                    source={IMAGES.item7}
                                />
                                <View
                                   style={[styles.imageoverlay,{aspectRatio:1/.62}]}
                                >
                                    <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Sports</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
               </View>
               <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:5}}>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={{width:'100%',marginVertical:10}}
                        onPress={() => navigation.navigate('Products')}
                    >
                        <Image
                            style={[styles.image,{aspectRatio:1/.3}]}
                            source={IMAGES.item8}
                        />
                        <View
                           style={[styles.imageoverlay,{aspectRatio:1/1.3}]}
                        >
                            <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Women</Text>
                        </View>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={[GlobalStyleSheet.col50]}
                        onPress={() => navigation.navigate('Products')}
                    >
                        <View>
                            <Image
                                style={[styles.image,{aspectRatio:1/1}]}
                                source={IMAGES.item9}
                            />
                            <View
                               style={[styles.imageoverlay,{aspectRatio:1/1}]}
                            >
                                <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Kids-Bicycles</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={[GlobalStyleSheet.col50]}
                        onPress={() => navigation.navigate('Products')}
                    >
                        <View>
                            <Image
                                style={[styles.image,{aspectRatio:1/1,borderRadius:250}]}
                                source={IMAGES.item4}
                            />
                            <View
                                style={[styles.imageoverlay,{borderRadius:250}]}
                            >
                                <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Classic</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
               </View>
               <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:5}}>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={{width:'100%',marginVertical:10}}
                        onPress={() => navigation.navigate('Products')}
                    >
                        <Image
                            style={[styles.image,{aspectRatio:1/.5}]}
                            source={IMAGES.item10}
                        />
                        <View
                            style={[styles.imageoverlay,{aspectRatio:1/.5}]}
                        >
                            <Text style={[styles.imageTitle2,{color:COLORS.card}]}>Geared Cycles</Text>
                        </View>
                    </TouchableOpacity>
               </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    sideData:{
        padding:20,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:COLORS.card,
    },
    sideTitle:{
        ...FONTS.fontRegular,
        fontSize:13,
        color:COLORS.title,
        marginTop:5,
        textAlign:'center'
    },
    maincardData:{
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderBottomColor:COLORS.background,
        paddingBottom:15
    },
    cardData:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    imagecard:{
        height:70,
        width:70,
        borderRadius:50,
        backgroundColor:COLORS.background,
        alignItems:'center',
        justifyContent:'center'
    },
    imageTitle:{
        ...FONTS.fontRegular,
        fontSize:13,
        color:COLORS.title,
        marginTop:10
    },
    imageTitle2:{
        ...FONTS.fontSemiBold,
        fontSize:16,
        color:COLORS.card,
    },
    image:{
        height:undefined,
        width:'100%',
        borderRadius:15
    },
    imageoverlay:{
        height:undefined,
        width:'100%',
        aspectRatio:1/1,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Category