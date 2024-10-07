import React from 'react';
import { Image, Text, View } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../Button/Button';

const ThumbUp =  require('../../assets/images/icons/thumbs-up.png');

const PricingStyle2 = () => {
    
    
    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const Data = [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20 GB individual data each user',
        'Basic chat and emails support',
    ]

    return (
        <>
            <View
                style={{
                    padding:30,
                    paddingTop:60,
                    position:'relative',
                    marginTop:50,
                    borderRadius:SIZES.radius,
                    backgroundColor:colors.card,
                    borderWidth:1,
                    borderColor:colors.borderColor,
                    maxWidth:320,
                    width:'100%',
                    shadowColor: "rgba(0,0,0,.6)",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                    elevation: 8,
                }}
            >
                <View style={{
                    alignItems:'center',
                }}>
                    <View
                        style={{
                            height:80,
                            width:80,
                            borderRadius:40,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:colors.card,
                            position:'absolute',
                            top:-100,
                            
                            shadowColor: "rgba(0,0,0,.6)",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,
                        }}
                    >
                        <Image
                            style={{
                                height:44,
                                width:44,
                            }}
                            source={ThumbUp}
                        />
                    </View>
                </View>
                <View style={{alignItems:'center',marginBottom:25}}>
                    <Text style={{...FONTS.h4,color:colors.title,marginBottom:5}}>Free</Text>
                    <View style={{flexDirection:'row',alignItems:'flex-end',marginBottom:5}}>
                        <Text style={{...FONTS.h2,lineHeight:35,color:colors.title}}>$0</Text>
                        <Text style={{...FONTS.font,...FONTS.fontSemiBold,fontSize:16,color:colors.title,marginBottom:5,marginLeft:3}}>/month</Text>
                    </View>
                    <Text style={{...FONTS.font,textAlign:'center',color:colors.text,marginBottom:20}}>All the basics for bussinesses that are just getting started</Text>
                    <Button 
                        title={'Get started'}
                        text={theme.dark ? COLORS.title : COLORS.white}
                        color={colors.title}
                    />
                </View>
                <View style={{borderTopWidth:1,borderColor:colors.border,paddingTop:20}}>
                    {Data.map((data,index) => {
                        return(
                            <View
                                key={index}
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    paddingVertical:5,
                                }}
                            >
                                <FeatherIcon 
                                    style={{marginRight:8}}
                                    color={colors.title}
                                    name="check"
                                    size={18}
                                />
                                <Text style={{...FONTS.font,color:colors.text}}>{data}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </>
    );
};



export default PricingStyle2;