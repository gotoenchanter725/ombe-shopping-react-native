import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ListStyle1 = (props : any) => {
    
    const {colors}:{colors : any} = useTheme();

    return (
        <>
            <TouchableOpacity 
                onPress={() => props.onPress && props.onPress()}
                style={[styles.listStyle,{backgroundColor:colors.card}]}>
                {props.icon &&
                    <View
                        style={{
                            height:30,
                            width:30,
                            //backgroundColor:COLORS.primary,
                            borderRadius:30,
                            marginRight:10,
                            alignItems:'center',
                            justifyContent:'center',
                        }} 
                    >
                        { props.icon}
                    </View>
                }
                {props.image && 
                    <Image
                        style={{
                            height:30,
                            width:30,
                            borderRadius:30,
                            marginRight:10,
                        }}
                        source={props.image}
                    />
                }
                <Text style={{...FONTS.fontRegular,fontSize:14,color:colors.title,flex:1}}>{props.title}</Text>
                {props.arrowDown && 
                    <FontAwesome name={'angle-down'} color={colors.title} size={18}/>
                }
                {props.arrowRight && 
                    <FontAwesome name={'angle-right'} color={colors.title} size={20}/>
                }
            </TouchableOpacity>
        </>
    );
};


const styles = StyleSheet.create({
    listStyle:{
        //borderBottomWidth:1,
        flexDirection:'row',
        height: 48,
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: SIZES.radius_lg,
        backgroundColor:COLORS.card,
        marginBottom:10
    }
})


export default ListStyle1;