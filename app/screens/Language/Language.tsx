import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import { View, Text,  ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { COLORS, FONTS } from '../../constants/theme';
import BottomSheet2 from '../Components/BottomSheet2';

const Language = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const moresheet = useRef<any>();

    const navigation = useNavigation<any>();

    const [Language, setLanguage] = useState<any>('English');

    return (
        <View style={{backgroundColor:colors.card,flex:1}}>
            <Header
                title='Language'
                leftIcon='back'
                titleLeft
            />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={[GlobalStyleSheet.container, { marginTop: 15 }]}>
                    <View>
                        <View
                            style={[
                                GlobalStyleSheet.inputBox, {
                                    borderColor: colors.border,
                                    borderWidth: 1,
                                    paddingLeft: 20
                                },
                            ]}
                        >
                            <Image
                                style={[GlobalStyleSheet.inputimage, { tintColor: colors.title, left: 'auto', right: 15, }]}
                                source={IMAGES.downaeeowsmall}
                            />

                            <TextInput
                                editable={false}
                                style={[FONTS.fontMedium,{ color: colors.title,fontSize:14 }]}
                                value={Language}
                                placeholderTextColor={colors.border}
                            />
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
                             onPress={() => moresheet.current.openSheet('Language')}
                        ></TouchableOpacity>
                    </View>
                    <Button
                        title="Save"
                        color={COLORS.primary}
                        text={COLORS.title}
                        onPress={() => navigation.navigate('Profile')}
                    />
                </View>
            </ScrollView>
            <BottomSheet2
                ref={moresheet}
                setLanguage={setLanguage}
            />
        </View>
    )
}

export default Language