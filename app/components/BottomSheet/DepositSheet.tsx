import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { FONTS } from '../../constants/theme';
import Select from '../Input/Select';
import { useTheme } from '@react-navigation/native';
import CoinSheet from './CoinSheet';
import Input from '../Input/Input';
import Button from '../Button/Button';

const DepositSheet = () => {

    const {colors} : {colors : any} = useTheme();
    const [coinData, setCoinData] = useState<any>('');
    const [modalShow, setModal] = useState<boolean>(false);

    return (
        <>
           <View style={[GlobalStyleSheet.container]}>
                <Text style={[FONTS.h5,{color:colors.title,marginBottom:18}]}>Deposit Crypto</Text>
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
                        title={'Deposit'}
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

export default DepositSheet;