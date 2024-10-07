import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../layout/Header'
import { useTheme } from '@react-navigation/native'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { COLORS,FONTS } from '../../constants/theme'
import { IMAGES } from '../../constants/Images'
import FeatherIcon from 'react-native-vector-icons/Feather';


const rewardData = [
    {   
        id:"0",
        title:"Extra Deluxe Gayo Coffee\nPackages",
        date:"June 18, 2020",
        time:"4:00 AM",
        itemcount:"+250"
    },
    {   
        id:"0",
        title:"Buy 10 Brewed Coffee\nPackages",
        date:"June 18, 2020",
        time:"4:00 AM",
        itemcount:"+100"
    },
    {   
        id:"0",
        title:"Ice Coffee Morning",
        date:"June 18, 2020",
        time:"4:00 AM",
        itemcount:"+50"
    },
    {   
        id:"0",
        title:"Hot Blend Coffee with\nMorning Cakes",
        date:"June 18, 2020",
        time:"4:00 AM",
        itemcount:"+150"
    },
]

const dropdownData = [
    {
        id:"1",
        lable:"Newest"
    },
    {
        id:"2",
        lable:"Oldest"
    },
    {
        id:"3",
        lable:"Remark"
    },
]


const Rewards = () => {

    const theme = useTheme();
    const {colors} : {colors : any} = theme;

    const [show, setshow] = useState(false)

    const [select, setselect] = React.useState(0)

    return (
         <View style={{backgroundColor:colors.card,flex:1}}>
            <Header
                title='Rewards'
                leftIcon='back'
                titleRight
            />
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <View style={[GlobalStyleSheet.container,{padding:0,paddingHorizontal:20,marginTop:20}]}>
                    <View
                        style={[styles.rewoardcard]}
                    >
                        <View style={[GlobalStyleSheet.col60]}>
                            <View
                                style={[styles.cardCricle]}
                            />
                            <View>
                                <Text style={{...FONTS.fontMedium, fontSize:18,color:COLORS.card}}>My Points</Text>
                                <Text style={{...FONTS.fontSemiBold, fontSize:34,color:COLORS.card,marginTop:5}}>87,550</Text>
                                <View
                                    style={[styles.cardbutton]}
                                >
                                    <Text style={{...FONTS.fontMedium, fontSize:14,color:COLORS.card,lineHeight:20}}>Redeem Gift</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[GlobalStyleSheet.col40]}>
                            <View style={{alignItems:'flex-end'}}>
                                <Image
                                    style={[GlobalStyleSheet.image3,{tintColor:'rgba(255,255,255,.5)'}]}
                                    source={IMAGES.information}
                                />
                                <View
                                    style={{position:'absolute',top:90,right:-60}}
                                >
                                    <Image
                                        style={{resizeMode:'contain',height:110,width:156}}
                                        source={IMAGES.Vector}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[GlobalStyleSheet.flex,{paddingVertical:30,paddingBottom:10}]}>
                        <Text style={{...FONTS.fontMedium,fontSize:18,color:colors.title}}>History Reward</Text>
                        <TouchableOpacity
                            onPress={() => setshow(!show)}
                            activeOpacity={0.8} 
                            style={{flexDirection:'row',alignItems:'center',gap:5}}
                        >
                            <Text style={{...FONTS.fontMedium,fontSize:16,color:COLORS.primary}}>{dropdownData[select].lable}</Text>
                            <FeatherIcon size={20} color={COLORS.primary} name={show ? "chevron-up": "chevron-down"} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[{
                            position:'absolute',
                            bottom:-110,
                            right:20,
                            padding:10,
                            backgroundColor:theme.dark ? colors.background :colors.card,
                            borderRadius:12,
                            borderWidth:1,
                            borderColor:colors.border,
                            zIndex:1,
                            opacity:show ? 1 : 0
                        }]}
                    >
                        <View>
                            {dropdownData.map((data:any,index) => {
                                return(
                                    <TouchableOpacity
                                        onPress={() => {setselect(index) ; setshow(!show)}}
                                        key={index}
                                        style={{
                                            paddingVertical:2,
                                            paddingHorizontal:10
                                        }}
                                    >
                                        <Text style={[{...FONTS.fontMedium,fontSize:16,color:colors.title},select === index && {color:COLORS.primary}]}>{data.lable}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{paddingHorizontal:20}]}>
                    {rewardData.map((data:any,index) => {
                        return(
                            <View
                                key={index}
                                style={[styles.card,{
                                    borderBottomColor:colors.border,
                                }]}
                            >
                                <View style={[GlobalStyleSheet.flex]}>
                                    <View>
                                        <Text style={{...FONTS.fontRegular,fontSize:16,color:colors.title,}}>{data.title}</Text>
                                        <View style={{flexDirection:'row',alignItems:'center',gap:8,marginTop:10}}>
                                            <Text style={{...FONTS.fontRegular,fontSize:12,color:theme.dark ? 'rgba(255,255,255,.7)':'#595959',lineHeight:18}}>{data.date}</Text>
                                            <View style={{width:2,height:10,backgroundColor:theme.dark ? 'rgba(255,255,255,.7)':'#595959'}}/>
                                            <Text style={{...FONTS.fontRegular,fontSize:12,color:theme.dark ? 'rgba(255,255,255,.7)':'#595959',lineHeight:18}}>{data.time}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{...FONTS.fontSemiBold,fontSize:20,color:COLORS.primary}}>{data.itemcount}</Text>
                                        <Text style={{...FONTS.fontRegular,fontSize:14,color:'#727272',textAlign:'right'}}>Pts</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    selectedValue: {
        marginTop: 16,
        fontSize: 16,
    },
    rewoardcard:{
        padding:30,
        backgroundColor:COLORS.primary,
        borderRadius:20,
        width:'100%',
        flexDirection:'row',
        overflow:'hidden'
    },
    cardCricle:{
        width:272,
        height:272,
        borderRadius:250,
        backgroundColor:'#036442',
        position:'absolute',
        left:-160,
        bottom:-160
    },
    cardbutton:{
        padding:10,
        backgroundColor:'rgba(255,255,255,.17)',
        borderRadius:7,
        width:'75%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    card:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:COLORS.borderColor,
        marginHorizontal:-20,
        paddingHorizontal:20,
        paddingBottom:20,
        marginBottom:10
    }
})

export default Rewards