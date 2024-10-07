import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS,FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';

type Props = {
    genderRef ?: any;
}

const GenderSheet2 = ({genderRef} : Props)  => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    const SortData = ["Men", "Women",];

    const [activeSize, setActiveSize] = useState(SortData[0]);

    return (
        <View style={[GlobalStyleSheet.container, { paddingTop: 0,backgroundColor:theme.dark ?COLORS.title:COLORS.white }]}>
             <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        paddingBottom: 15,
                        marginHorizontal: -15,
                        paddingHorizontal: 15
                    }}
                >
                    <Text style={[FONTS.fontMedium, { color: colors.title, fontSize: 20 }]}>Gender</Text>
                    <TouchableOpacity
                        style={{ height: 38, width: 38, backgroundColor: colors.card, borderRadius: 38, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => genderRef.current.close()}
                    >
                        <Image
                            style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: colors.title }}
                            source={IMAGES.close}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 20 }}>
                    {SortData.map((data, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setActiveSize(data)}
                                key={index}
                                style={[{
                                    backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)': colors.background,
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 8,
                                    // borderWidth: 1,
                                    // borderColor: theme.dark ? COLORS.white : colors.borderColor,
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    marginBottom: 5,
    
                                }, activeSize === data && {
                                    backgroundColor: colors.title,
                                    borderColor: COLORS.primary,
                                }]}
                            >
                                <Text style={[{ ...FONTS.fontMedium, fontSize: 13, color: colors.title }, activeSize === data && {  color:theme.dark ? COLORS.primary : COLORS.white }]}>{data}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
        </View>
    )
}

export default GenderSheet2