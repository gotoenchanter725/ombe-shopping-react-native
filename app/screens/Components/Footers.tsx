import React from 'react';
import {  ScrollView, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import ListStyle1 from '../../components/List/ListStyle1';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type FooterScreenProps = StackScreenProps<RootStackParamList, 'Footers'>;

const Footers = ({navigation}:FooterScreenProps) => {

    const {colors} = useTheme();

    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View
                style={{
                    flex:1,
                    //backgroundColor:colors.card,
                }}
            >
                <Header title={'Footer styles'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View style={{}}>
                            <ListStyle1 onPress={() => navigation.navigate('TabStyle1')} arrowRight title={'Footer Style 1'}/>
                            <ListStyle1 onPress={() => navigation.navigate('TabStyle2')} arrowRight title={'Footer Style 2'}/>
                            <ListStyle1 onPress={() => navigation.navigate('TabStyle3')} arrowRight title={'Footer Style 3'}/>
                            <ListStyle1 onPress={() => navigation.navigate('TabStyle4')} arrowRight title={'Footer Style 4'}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};



export default Footers;