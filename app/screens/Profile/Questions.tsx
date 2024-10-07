import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import QuestionsAccordion from '../../components/Accordion/QuestionsAccordion';

const Questions = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{backgroundColor:colors.background,flex:1}}>
            <Header
                title='Questions'
                leftIcon='back'
                titleRight
            />
            <View style={GlobalStyleSheet.container}>
                <QuestionsAccordion/>
            </View>
        </View>
    )
}

export default Questions