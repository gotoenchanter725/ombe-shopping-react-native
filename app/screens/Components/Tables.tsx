import React from 'react';
import {  ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import ClassicTable from '../../components/Tables/ClassicTable';
import TableOddEven from '../../components/Tables/TableOddEven';

const Tables = () => {

    const {colors} = useTheme();

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View style={{flex:1}}>
                <Header title={'Tables'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={{...GlobalStyleSheet.container}}>
                        <ClassicTable/>
                        <TableOddEven/>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


export default Tables;