import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS,FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';

type Props = {
    shortRef ?: any;
}

const ShortSheet2 = ({shortRef} : Props)  => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    const SortData = ["Relevance", "Popularity", "Price -- Low to High","Price -- High to Low","Newest First"];

    const [activeSize, setActiveSize] = useState(SortData[0]);

    return (
        <View style={[GlobalStyleSheet.container, { paddingTop: 0,backgroundColor:theme.dark ? colors.background :colors.card,borderRadius:15,paddingBottom:10 }]}>
                <View
                    style={[styles.filterBackground,{
                        borderBottomColor: COLORS.inputborder,
                        borderStyle:'dashed'
                    }]}
                >
                    <Text style={[FONTS.fontRegular, { color: colors.title, fontSize: 14 }]}>SORT BY</Text>
                    <TouchableOpacity
                        style={[styles.Closebackgrond,{backgroundColor: colors.card }]}
                        onPress={() => shortRef.current.close()}
                    >
                        <Image
                            style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: colors.title }}
                            source={IMAGES.close}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                    {SortData.map((data, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setActiveSize(data)}
                                key={index}
                                style={[{
                                    height: 40,
                                    width:'100%',
                                    alignItems: 'center',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    paddingVertical: 5,
                                    marginBottom:5
    
                                }]}
                            >
                                <Text style={[{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }]}>{data}</Text>
                                <View
                                    style={[{
                                        //borderWidth: 1,
                                        backgroundColor:theme.dark ? colors.card :colors.background,
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                        //borderColor: theme.dark ? COLORS.white : colors.borderColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        // flex:1
                                    },activeSize === data && {
                                        backgroundColor:COLORS.primary
                                    }]}
                                >
                                    <View style={[{
                                        width: 14,
                                        height: 14,
                                        backgroundColor: colors.card,
                                        borderRadius: 50
                                    }, activeSize === data && {
                                        backgroundColor: colors.card
                                    }]}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterBackground:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.background,
        paddingBottom: 10,
        paddingTop:10,
        marginHorizontal: -15,
        paddingHorizontal: 15
      },
      Closebackgrond:{
          height: 38, 
          width: 38, 
          backgroundColor: COLORS.card, 
          borderRadius: 38, 
          alignItems: 'center', 
          justifyContent: 'center'
      },
})

export default ShortSheet2