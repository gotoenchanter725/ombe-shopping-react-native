import { View, Text,  Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { COLORS,FONTS} from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

const ChatData = [
    {
        id: '1',
        title: 'Good morning!',
        send: false,
    },
    {
        id: '2',
        title: " I'm looking for a new laptop",
        time: "4.40pm",
        send: false,
    },
    {
        id: '3',
        title: 'Good morning!',
        send: true,
    },
    {
        id: '4',
        title: 'Of course, we have a great selection of laptops.',
        time: "4.50pm",
        send: true,
    },
    {
        id: '5',
        title: "I'll mainly use it for work, so something with good processing power and a comfortable keyboard is essential.",
        time: "4.55pm",
        send: false,
    },
    {
        id: '6',
        title: 'Got it!',
        time: "4.56pm",
        send: true,
    },
    {
        id: '7',
        title: 'We have several options that would suit your needs. Let me show you a few models that match your criteria.',
        time: "4.57pm",
        send: true,
    },
    {
        id: '8',
        title: "I'm looking to spend around $800 to $1,000.",
        time: "4.58pm",
        send: false,
    },
    {
        id: '9',
        title: "That's a good budget.I'll show you a few options within that range. Are you interested in Windows or Mac laptops?",
        time: "4.40pm",
        send: true,
    },
    {
        id: '1',
        title: 'Good morning!',
        send: false,
    },
    {
        id: '2',
        title: " I'm looking for a new laptop",
        time: "4.40pm",
        send: false,
    },
    {
        id: '3',
        title: 'Good morning!',
        send: true,
    },
    {
        id: '4',
        title: 'Of course, we have a great selection of laptops.',
        time: "4.50pm",
        send: true,
    },
    {
        id: '5',
        title: "I'll mainly use it for work, so something with good processing power and a comfortable keyboard is essential.",
        time: "4.55pm",
        send: false,
    },
    {
        id: '6',
        title: 'Got it!',
        time: "4.56pm",
        send: true,
    },
    {
        id: '7',
        title: 'We have several options that would suit your needs. Let me show you a few models that match your criteria.',
        time: "4.57pm",
        send: true,
    },
    {
        id: '8',
        title: "I'm looking to spend around $800 to $1,000.",
        time: "4.58pm",
        send: false,
    },
    {
        id: '9',
        title: "That's a good budget.I'll show you a few options within that range. Are you interested in Windows or Mac laptops?",
        time: "4.40pm",
        send: true,
    },
]

type SinglechatScreenProps = StackScreenProps<RootStackParamList, 'Singlechat'>;

const Singlechat = ({navigation} : SinglechatScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const scrollViewRef = useRef(null);

    const [messageList, setMessageList] = useState(ChatData);
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if(message.length > 0){
            setMessageList([
                ...messageList,
                {
                    id: '0',
                    title: message,
                    time: "4.40pm",
                    send: true,
                },
            ])
            setMessage("");
        }
    }

    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
            <View style={[GlobalStyleSheet.container,{padding:0}]}>
                <View
                    style={[styles.header,{
                        backgroundColor: colors.card,
                        //borderBlockColor:colors.border
                    }]}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:5 }}>
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            style={{padding:10,marginRight:5}}
                            >
                                {/* <Ionicons size={20} color={colors.title} name='chevron-back'/> */}
                                <FeatherIcon size={24} color={colors.title} name={'arrow-left'} />
                        </TouchableOpacity>
                        <Image
                            style={{ height: 40, width: 40, borderRadius: 12, marginLeft: -5, marginRight: 10,resizeMode:'contain' }}
                            source={IMAGES.small6}
                        />
                        <View>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>Emily Johnson</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 12, backgroundColor: COLORS.primary }}></View>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 10, color:COLORS.primary }}>Online</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Call')}
                        style={{
                            height: 40,
                            width: 40, 
                            borderRadius: 12,
                            backgroundColor:COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 15
                        }}
                    >
                        <Image
                            style={{ height: 20, width: 20, resizeMode: 'contain',tintColor:COLORS.card }}
                            source={IMAGES.call}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1}}
                ref={scrollViewRef} onContentSizeChange={() => {scrollViewRef.current?.scrollToEnd()}}
            >
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{ paddingHorizontal:15,paddingTop:20 }}>
                        {messageList.map((data:any, index) => {
                            return (
                                <View key={index}>
                                    <View
                                        style={[{
                                            width: '75%',
                                            marginBottom: 10,
                                        },
                                        data.send == false
                                            ?
                                            {
                                                marginRight: 'auto',
                                                alignItems: 'flex-start',
                                            }
                                            :
                                            {
                                                marginLeft: 'auto',
                                                alignItems: 'flex-end',
                                            }
                                        ]}
                                    >
                                        <View
                                            style={[
                                                data.send == false
                                                    ?
                                                    {
                                                        backgroundColor: COLORS.primary,
                                                        borderTopLeftRadius: 15,
                                                        borderTopRightRadius: 15,
                                                        borderBottomRightRadius: 15,

                                                    }
                                                    :
                                                    {
                                                        backgroundColor: COLORS.white,
                                                        borderTopLeftRadius: 15,
                                                        borderTopRightRadius: 15,
                                                        borderBottomLeftRadius: 15,

                                                    }

                                            ]}
                                        >
                                            <Text style={{ ...FONTS.fontRegular, fontSize: 12, color: data.send ? COLORS.title : COLORS.white, paddingVertical: 10, paddingHorizontal: 10 }}>{data.title}</Text>
                                        </View>
                                        {data.time &&
                                            <Text style={{  ...FONTS.fontMedium,fontSize:10, color: COLORS.primary, marginTop: 5 }}>{data.time}</Text>
                                        }
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{paddingTop:0}]}>
                <View style={{ height: 66, backgroundColor:COLORS.secondary ,paddingHorizontal:0,borderRadius:60}}>
                    <View style={{ height: 65, width: '100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:20 }}>
                        <View style={{  }}>
                            <Image
                                style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.title, }}
                                source={IMAGES.happy}
                            />
                        </View>
                        <TextInput
                            placeholder='Type Something'
                            placeholderTextColor={COLORS.title}
                            onChangeText={(val) => setMessage(val)}
                            value={message}
                            style={{ 
                                ...FONTS.fontRegular,
                                fontSize: 14, 
                                paddingLeft: 15, 
                                color: COLORS.title,
                                flex:1,
                                paddingRight:40 
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => sendMessage()}
                            disabled={message.length == 0 ? true : false}
                            activeOpacity={0.9} 
                            style={{ 
                                height:65,
                                width:65,
                                borderRadius:50,
                                backgroundColor:COLORS.primary,
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                            // onFocus={false}
                        >
                            <View
                                style={{
                                    height:48,
                                    width:48,
                                    borderRadius:50,
                                    backgroundColor:COLORS.primaryLight,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Image
                                    style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.title }}
                                    source={IMAGES.send}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       </View>
    )
}


const styles = StyleSheet.create({
    header : {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.card,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    title : {
        fontSize:20,
        ...FONTS.fontMedium,
    },
    actionBtn : {
        height: 35,
        width: 35,
        borderRadius:8,
        alignItems:'center',
        justifyContent : 'center',
        backgroundColor:COLORS.background
    }
})

export default Singlechat