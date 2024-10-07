import React, { useCallback, useMemo, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import WalletList from '../List/WalletList';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Modal,  ScrollView, TouchableOpacity, View } from 'react-native';
import Input from '../Input/Input';

const coinData = [
    {
        image : IMAGES.bitcoin,
        name : 'Bitcoin',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.2',
    },
    {
        image : IMAGES.ethereum,
        name : 'Ethereum',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+1.5',
    },
    {
        image : IMAGES.ripple,
        name : 'Ripple',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.1',
    },
    {
        image : IMAGES.bitcoin,
        name : 'Bitcoin',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.2',
    },
    {
        image : IMAGES.ethereum,
        name : 'Ethereum',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+1.5',
    },
    {
        image : IMAGES.ripple,
        name : 'Ripple',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.1',
    },
    {
        image : IMAGES.bitcoin,
        name : 'Bitcoin',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.2',
    },
    {
        image : IMAGES.ethereum,
        name : 'Ethereum',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+1.5',
    },
    {
        image : IMAGES.ripple,
        name : 'Ripple',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.1',
    },
    {
        image : IMAGES.bitcoin,
        name : 'Bitcoin',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.2',
    },
    {
        image : IMAGES.ethereum,
        name : 'Ethereum',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+1.5',
    },
    {
        image : IMAGES.ripple,
        name : 'Ripple',
        tag : 'BTC',
        balance : '$8,456.87',
        amount : '0.154836',
        rate : '+4.1',
    },
]

type Props = {
    modal : any;
    setModal : any;
    setCoinData : any;
}

const CoinSheet = ({modal,setModal,setCoinData} : Props) => {

    const {colors} : {colors : any} = useTheme();

    return (
        <Modal
            visible={modal}
            transparent={true}
            animationType={'slide'}
        >
            <View
                style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}
            >
                <View style={[GlobalStyleSheet.container,{paddingLeft:5}]}>
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setModal(false)}
                            style={{
                                width:48,
                                height:48,
                                alignItems:'center',
                                justifyContent:'center',
                                marginRight:5,
                            }}
                        >
                            <FeatherIcon
                                color={colors.title}
                                size={24}
                                name='arrow-left'
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flex:1,
                            }}
                        >
                            <Input
                                placeholder='Search coin'
                            />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={[GlobalStyleSheet.container,{paddingTop:0}]}>
                        {coinData.map((data , index) => {
                            return(
                                <TouchableOpacity
                                    onPress={() => {setCoinData(data);setModal(false)}}
                                    key={index}
                                >
                                    <WalletList
                                        image={data.image}
                                        name={data.name}
                                        tag={data.tag}
                                        balance={data.balance}
                                        amount={data.amount}
                                        rate={data.rate}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default CoinSheet;