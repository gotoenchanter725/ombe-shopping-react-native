import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Select from '../Input/Select';
import Input from '../Input/Input';
import { IMAGES } from '../../constants/Images';
import CoinSheet from './CoinSheet';
import Button from '../Button/Button';

const TransferSheet = () => {

    const {colors} : {colors : any} = useTheme();
    const [coinData, setCoinData] = useState<any>('');
    const [modalShow, setModal] = useState<boolean>(false);

    return (
        <>
            <View style={[GlobalStyleSheet.container]}>
                <Text style={[FONTS.h5,{color:colors.title,marginBottom:18}]}>Wallet Transfer</Text>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Text style={[FONTS.font,{color:COLORS.primary,marginBottom:4}]}>From</Text>
                    <Input
                        defaultValue='Spot Wallet'
                    />
                </View>
                <View
                    style={{
                        alignItems:'center',
                        marginTop:5,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height:45,
                            width:45,
                            borderRadius:SIZES.radius_sm,
                            backgroundColor:COLORS.primary,
                            transform:[{rotate:'45deg'}],
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Image
                            style={{
                                tintColor:COLORS.title,
                                height:22,
                                width:22,
                                transform:[{rotate:'45deg'}],
                            }}
                            source={IMAGES.transfer}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Text style={[FONTS.font,{color:COLORS.primary,marginBottom:4}]}>To</Text>
                    <Input
                        defaultValue='Future Wallet'
                    />
                </View>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Select
                        modal={setModal}
                        defaultText={'Select Coin'}
                        value={coinData.name}
                    />
                </View>
                <View style={GlobalStyleSheet.inputGroup}>
                    <Text style={[FONTS.fontSm,{color:colors.text,marginBottom:6}]}>Available: <Text style={{color:colors.title}}>56154.4854871BTC</Text></Text>
                    <Input
                        placeholder='Amount'
                    />
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
                        title={'Transfer'}
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

export default TransferSheet;