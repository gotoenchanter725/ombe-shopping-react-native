import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text ,ScrollView, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Header from '../../layout/Header';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS,FONTS } from '../../constants/theme';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


const checkoutData = [
    {
        image: IMAGES.map,
        title: "Delivery address",
        text: "123 Main Street, Anytown, USA 12345",
        navigate: "DeliveryAddress"
    },
    {
        image: IMAGES.card2,
        title: "Payment",
        text: "XXXX XXXX XXXX 3456",
        navigate: "Payment"
    },
]

type CheckoutScreenProps = StackScreenProps<RootStackParamList, 'Checkout'>;

const Checkout =  ({navigation} : CheckoutScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Checkout'
                leftIcon='back'
                titleRight
                //titleLeft
            />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container, {paddingTop:5,marginTop:10,flex:1  }]}>
                    {checkoutData.map((data:any, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(data.navigate)}
                                style={[styles.AddressCard,{
                                    backgroundColor:colors.card
                                }]}
                                key={index}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 ,flex:1}}>
                                    <View style={[styles.AddressCardimage,{ backgroundColor:COLORS.primaryLight,}]}>
                                        <Image
                                            style={[GlobalStyleSheet.image2,{ tintColor:COLORS.title }]}
                                            source={data.image}
                                        />
                                    </View>
                                    <View style={{flex:1}}> 
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontLight, fontSize: 11, color: colors.text }}>{data.text}</Text>
                                    </View>
                                </View>
                                <FeatherIcon size={24} color={colors.title} name={'arrow-right'} />
                                {/* <Ionicons color={colors.title} name='chevron-forward' size={20}/> */}
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={[GlobalStyleSheet.container, { paddingBottom:0}]}>
                    <View style={[styles.bottomCard,{backgroundColor:colors.card}]}>
                        <View style={{paddingVertical:5}}>
                            <Text style={[styles.title1,{color:colors.title}]}>Price Details</Text>
                        </View>
                        <View style={styles.card}>
                            <View style={GlobalStyleSheet.flex}>
                                <Text style={[styles.title2,{color:colors.title}]}>Price (5 Items)</Text>
                                <Text style={[styles.title2,{color:colors.title}]}>$21299</Text>
                            </View>
                            <View style={[GlobalStyleSheet.flex,{paddingVertical:10}]}>
                                <Text style={[styles.title2,{color:colors.title}]}>Discount</Text>
                                <Text style={[styles.title2,{color:colors.title}]}>$4000</Text>
                            </View>
                            <View style={GlobalStyleSheet.flex}>
                                <Text style={[styles.title2,{color:colors.title}]}>Delivery Charges</Text>
                                <Text style={{...FONTS.fontRegular,fontSize:12,color:'#8ABE12'}}>Free Delivery</Text>
                            </View>
                        </View>
                        <View style={[GlobalStyleSheet.flex,{paddingVertical:5,}]}>
                            <Text style={[styles.title1,{color:colors.title}]}>Total Amount</Text>
                            <Text style={[styles.title1,{color:'#8ABE12'}]}>$17299</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container]}>
              
                    <Button
                        title='Submit Order'
                        color={COLORS.primary}
                        text={COLORS.card}
                        onPress={() => navigation.navigate('Myorder')}
                        style={{borderRadius:48}}
                    />
               
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    AddressCard:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10,
        height:70,
        borderRadius:15,
        marginBottom:10
        //paddingBottom: 15,
        //marginTop: 15
    },
    AddressCardimage:{
        height: 50,
         width: 50,
         backgroundColor:COLORS.background,
         borderRadius:10,
          alignItems: 'center',
           justifyContent: 'center' 
    },
    TextInput:{
        ...FONTS.fontRegular,
        fontSize: 15,
        color: COLORS.title,
        borderRadius:8,
        paddingHorizontal: 15,
        borderWidth:1,
        borderColor:COLORS.inputborder,
        paddingBottom:50,
    },
    BottomCard:{
        borderBottomWidth:1,
        borderBottomColor:COLORS.background,
        marginHorizontal:-15,
        paddingHorizontal:15,
        paddingBottom:15,
        marginTop:5
    },
    CardTitle:{
        ...FONTS.fontMedium,
        fontSize:16,
        color:COLORS.title
    },
    CardTitle2:{
        ...FONTS.fontRegular,
         fontSize: 14, 
         color: COLORS.title
    },
    BottomTitle:{
        borderTopWidth:1,
        borderTopColor:COLORS.background,
        marginHorizontal:-15,
        paddingHorizontal:15,
        paddingTop:15,
        paddingBottom:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
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
    },
    title1:{
        ...FONTS.fontRegular,
        fontSize:16,
        color:COLORS.title
    },
    title2:{
        ...FONTS.fontRegular,
        fontSize:12,
        color:COLORS.title
    },
    bottomCard:{
        paddingHorizontal:25,
        backgroundColor:COLORS.card,
        borderRadius:15,
        padding:10, 
    },
    card:{
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:COLORS.borderColor,
        padding:10,
        marginHorizontal:-25,
        paddingHorizontal:25,
        borderRightWidth:0,
        borderLeftWidth:0,
        marginVertical:5,
        paddingVertical:15
    },
})

export default Checkout