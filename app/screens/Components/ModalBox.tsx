import React, { useState } from 'react';
import { Modal,  ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LoginModal from '../../components/Modal/LoginModal';
import OptionModal from '../../components/Modal/OptionModal';
import RegisterModal from '../../components/Modal/RegisterModal';
import SuccessModal from '../../components/Modal/SuccessModal';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';


const ModalBox = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [activeSheet , setActiveSheet] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const ActionData = [
        {
            icon : "info",
            title : "Confirm modal",
            sheet : 'option',
        },
        {
            icon : "check-circle",
            title : "Success Bar",
            sheet : 'success',
        },
        {
            icon : "log-out",
            title : "Login",
            sheet : 'login',
        },
        {
            icon : "file-text",
            title : "Register",
            sheet : 'register',
        },
    ]

    return (
        <>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    flex:1,
                    position:'relative',
                }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalVisible(false)}
                        style={{
                            position:'absolute',
                            height:'100%',
                            width:'100%',
                            backgroundColor:'rgba(0,0,0,.3)',
                        }}
                    />
                    {activeSheet === "option" ?
                        <OptionModal close={setModalVisible}/> :
                        activeSheet === "success" ?
                        <SuccessModal/> :
                        activeSheet === "login" ?
                        <LoginModal close={setModalVisible}/> :
                        activeSheet === "register" ?
                        <RegisterModal close={setModalVisible}/>
                        :
                        <SuccessModal/>
                    }
                </View>
            </Modal>

            <View style={{flex:1,backgroundColor:colors.background}}>
                <View
                    style={{
                        flex:1,
                        backgroundColor:colors.background,
                    }}
                >
                    <Header 
                        title={'Modal Box'}
                        leftIcon={'back'}
                        titleRight
                    />
                    <ScrollView>
                        <View style={[GlobalStyleSheet.container,{padding:0,paddingTop:10}]}>
                            <View style={{}}>
                                <View style={{}}>
                                    {ActionData.map((data:any,index) => {
                                        return(
                                            <Ripple
                                                onPress={() => {setActiveSheet(data.sheet);setModalVisible(true)}}
                                                key={index}
                                                style={[{
                                                    flexDirection: 'row',
                                                    marginHorizontal: 15,
                                                    height: 48,
                                                    alignItems: 'center',
                                                    padding: 10,
                                                    borderRadius: SIZES.radius_lg,
                                                    backgroundColor:colors.card,
                                                    marginBottom:10
                                                },
                                                index === ActionData.length - 1 && {
                                                    borderBottomWidth:0,
                                                }
                                                ]}
                                            >
                                                <View
                                                    style={{
                                                        height: 30,
                                                        width: 30,
                                                        borderRadius: 6,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    {/* <FeatherIcon size={16} color={colors.title} name={data.icon}/> */}
                                                    <FeatherIcon size={16} color={COLORS.primary} name={data.icon}/>
                                                </View>
                                                <Text style={{...FONTS.fontRegular,fontSize:14,flex:1,color:colors.title}}>{data.title}</Text>
                                                {/* <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/> */}
                                                <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/>
                                            </Ripple>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default ModalBox;