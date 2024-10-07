import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react' 
import { View, Text ,ScrollView,Image,TouchableOpacity, StyleSheet} from 'react-native'
import { IMAGES } from '../../constants/Images';
import Header from '../../layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
//import { FontAwesome, Ionicons } from '@expo/vector-icons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


const saveData = [
    {
        image: IMAGES.Home4,
        title: "Home Address",
        text: "123 Main Street, Anytown, USA 12345",
    },
    {
        image: IMAGES.map,
        title: "Office Address",
        text: "456 Elm Avenue, Smallville, CA 98765",
    },
    {
        image: IMAGES.Home4,
        title: "Home Address",
        text: "789 Maple Lane, Suburbia, NY 54321",
    },
    {
        image: IMAGES.shop,
        title: "Shop Address",
        text: "654 Pine Road, Countryside, FL 34567",
    },
]


type DeliveryAddressScreenProps = StackScreenProps<RootStackParamList, 'DeliveryAddress'>;

const DeliveryAddress = ({navigation} : DeliveryAddressScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isChecked, setIsChecked] = useState(saveData[0]);

    return (
        <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Delivery Address'
                leftIcon='back'
                // titleLeft
                titleRight
            />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container, { paddingTop:5,marginTop:10 }]}>
                    {saveData.map((data, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => setIsChecked(data)}
                                style={[styles.addresscard,{
                                    backgroundColor:colors.card
                                    //borderBottomColor:colors.card,
                                }]}
                                key={index}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 ,flex:1}}>
                                    <View style={[styles.addressimage,{backgroundColor:COLORS.primaryLight}]}>
                                        <Image
                                            style={[GlobalStyleSheet.image2,{tintColor:COLORS.title}]}
                                            source={data.image}
                                        />
                                    </View>
                                    <View style={{flex:1}}> 
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontLight, fontSize: 11, color:colors.text}}>{data.text}</Text>
                                    </View>
                                </View>
                                <View
                                    style={[{
                                        backgroundColor:COLORS.primaryLight,
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },isChecked === data && {
                                        backgroundColor:COLORS.primary
                                    }]}
                                >
                                    <View style={[{
                                        width: 14,
                                        height: 14,
                                        backgroundColor:colors.card,
                                        borderRadius: 50
                                    }, isChecked === data && {
                                        backgroundColor:colors.card
                                    }]}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.addAddress,{
                            backgroundColor:COLORS.secondary,
                        }]}
                        onPress={() => navigation.navigate('AddDeliveryAddress')}
                    >
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Image
                                style={[GlobalStyleSheet.image2,{ tintColor:COLORS.title }]}
                                source={IMAGES.plus}
                            />
                            <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: COLORS.title}}>Add Address</Text>
                        </View>
                        <FeatherIcon size={22} color={COLORS.title} name={'arrow-right'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{}]}>
               
                    <Button
                        title='Continue'
                        color={COLORS.primary}
                        text={ COLORS.card}
                        onPress={() => navigation.navigate('Payment')}
                        style={{borderRadius:48}}
                    />
               
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    tracktitle:{
        ...FONTS.fontMedium,
        fontSize:10,
        color:COLORS.title
    },
    tracktitle2:{
        ...FONTS.fontMedium,
        fontSize:13,
        color:COLORS.card
    },
    addresscard:{
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
    addressimage:{
        height: 50,
        width: 50,
        backgroundColor:COLORS.background,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    addAddress:{
        height: 55,
        width: '100%',
        backgroundColor:COLORS.background,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 5
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

export default DeliveryAddress