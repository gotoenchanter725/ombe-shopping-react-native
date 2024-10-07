import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { COLORS,FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { IMAGES } from '../../constants/Images';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type CallScreenProps = StackScreenProps<RootStackParamList, 'Call'>;

const Call = ({navigation} : CallScreenProps) => {

    const [show, setshow] = React.useState(true);

    const [show1, setshow1] = React.useState(true);

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
       <View style={{backgroundColor:'#80909C',flex:1,}}>
            <View style={GlobalStyleSheet.container}>
                <View style={{}}>
                    <View style={{ position:'absolute' }}>
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            style={{padding:10,marginRight:5}}
                        >
                                {/* <Ionicons size={20} color={colors.title} name='chevron-back'/> */}
                                 <FeatherIcon size={24} color={colors.title} name={'arrow-left'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center',marginTop:150 }}>
                        <Image
                            style={{ width: 180, height: 180, borderRadius: 100 }}
                            source={IMAGES.small6}
                        />
                    </View>
                </View>
                <View style={{ paddingTop: 30, alignItems: 'center',position:'absolute',left:0,right:0,top:50 }}>
                    <Text style={{ ...FONTS.fontSemiBold, ...FONTS.h4, color: COLORS.title }}>Emily Johnson</Text>
                    <Text style={{ ...FONTS.h6, ...FONTS.fontMedium, color:COLORS.card, opacity:.9, marginTop: 10 }}>15:30</Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 30, left: 0, right: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 20 }}>
                    <TouchableOpacity
                         onPress={() => {
                            setshow1(!show1)
                        }}
                    >
                        <View style={[GlobalStyleSheet.background, { height: 50, width: 50,backgroundColor:show1 ? "rgba(0,0, 0, 0.20)" : COLORS.card}]}>
                            <Image
                                style={[GlobalStyleSheet.image, { tintColor:show1 ? COLORS.white : COLORS.title }]}
                                source={IMAGES.volume}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <View style={[GlobalStyleSheet.background, { backgroundColor: 'red', height: 60, width: 60 }]}>
                            <Image
                                style={{ tintColor: COLORS.white, width: 25, height: 25, resizeMode: 'contain' }}
                                source={IMAGES.phone}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setshow(!show)
                        }}
                    >
                        <View style={[GlobalStyleSheet.background, { height: 50, width: 50 }]}>
                            <Image
                                style={[GlobalStyleSheet.image, { tintColor: COLORS.white }]}
                                source={
                                    show
                                        ?
                                        IMAGES.audio
                                        :
                                        IMAGES.audiomute
                                }
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
    )
}

export default Call