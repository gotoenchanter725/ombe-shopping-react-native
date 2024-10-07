import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constants/theme';
import Select from '../Input/Select';
import Input from '../Input/Input';
import { IMAGES } from '../../constants/Images';
import CoinSheet from './CoinSheet';
import Button from '../Button/Button';

const WithdrawSheet = () => {

    const {colors} : {colors : any} = useTheme();
    const [coinData, setCoinData] = useState<any>('');
    const [modalShow, setModal] = useState<boolean>(false);

    return (
        <>
            <View style={[GlobalStyleSheet.container]}>
                <Text style={[FONTS.h5,{color:colors.title,marginBottom:18}]}>Withdraw Crypto</Text>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Select
                        modal={setModal}
                        defaultText={'Select Coin'}
                        value={coinData.name}
                    />
                </View>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Input
                        defaultValue='0454547154648467871787156558'
                    />
                    <TouchableOpacity
                        style={{
                            height:48,
                            width:48,
                            position:'absolute',
                            right:0,
                            top:0,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Image
                            style={{
                                height:20,
                                width:20,
                                tintColor:COLORS.primary,
                            }}
                            source={IMAGES.copy}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Text style={[FONTS.fontSm,{color:colors.text,marginBottom:6}]}>Available: <Text style={{color:colors.title}}>56154.4854871BTC</Text></Text>
                    <Input
                        placeholder='Amount'
                    />
                </View>
                <View
                    style={{
                        alignItems:'center',
                        paddingBottom:20,
                        paddingTop:15,
                    }}
                >
                    <Text style={[FONTS.h2,FONTS.fontBaseSemiBold,{color:colors.title,lineHeight:32}]}>0.00BTC</Text>
                    <Text style={[FONTS.font,{color:COLORS.primaryText}]}>Amount Received</Text>
                </View>
                <View
                    style={{
                        paddingHorizontal:15,
                        paddingBottom:30,
                        paddingTop:10,
                    }}
                >
                    <Button
                        onPress={() => {}}
                        title={'Withdraw'}
                    />
                </View>
            </View>

            <CoinSheet
                modal={modalShow}
                setModal={setModal}
                setCoinData={setCoinData}
            />
        </>
    )
}

export default WithdrawSheet;