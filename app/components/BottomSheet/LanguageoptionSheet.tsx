import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
//import { Ionicons } from '@expo/vector-icons';


const LanguageData = [
    {
        id: "1",
        text: "Indian",
    },
    {
        id: "2",
        text: "English",
    },
    {
        id: "3",
        text: "German",
    },
    {
        id: "4",
        text: "Italian",
    },
    {
        id: "5",
        text: "Spanish"
    },
]

type Props = {
    moresheet ?: any;
    setLanguage? :any;
    sheetRef :any
}

const LanguageoptionSheet = ({moresheet,setLanguage,sheetRef} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={[GlobalStyleSheet.container, { marginTop: 10,backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card }]}>
            {LanguageData.map((data:any, index) => {
                return (
                    <View key={index} style={{ marginHorizontal: -15 }}>
                        <TouchableOpacity
                            onPress={() => { setLanguage(data.text); {sheetRef.current.close()} }}
                            style={[GlobalStyleSheet.flex,{ height: 48, borderBottomWidth: 1, borderBottomColor: colors.border, marginHorizontal: 15 }]}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ ...FONTS.fontSm, ...FONTS.fontMedium, color: colors.title, fontSize: 15, marginLeft: 10, }}>{data.text}</Text>
                            </View>
                            {/* <Ionicons  color={colors.title} name='chevron-forward' size={16}/> */}
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
  )
}

export default LanguageoptionSheet