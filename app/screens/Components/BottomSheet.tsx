import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {  ScrollView, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ripple from 'react-native-material-ripple';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LoginSheet from '../../components/BottomSheet/LoginSheet';
import RegisterSheet from '../../components/BottomSheet/RegisterSheet';
import SuccessSheet from '../../components/BottomSheet/SuccessSheet';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

type Props = {
    height ?: string,
 }
 

const BottomSheet = forwardRef((props, ref) => {

    const {colors} : {colors : any} = useTheme();

    const refRBSheet = useRef<any>(null);
    
    const [activeSheet , setActiveSheet] = useState<any>('');
    const [isSheet , setIsSheet] = useState(false); 
 
    useImperativeHandle(ref, () => ({

        openSheet : async (value:string) => {
            await setActiveSheet(value);
            await refRBSheet.current.open();
        },
        closeSheet() {
            refRBSheet.current.close();
        }
    
    }));

    const ActionData = [
        {
            icon : 'check-circle',
            title : "Success Sheet",
            sheet : 'success',
        },
        {
            icon : 'log-out',
            title : "Login Sheet",
            sheet : 'login',
        },
        {
            icon : 'file-text',
            title : "Register Sheet",
            sheet : 'register',
        },
    ]

    const handleSheet = async (value:string) => {
        await setActiveSheet(value);
        await refRBSheet.current.open();
    }
    
    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={activeSheet === "success" ? 210 :
                        activeSheet === "login" ? 345 :
                        activeSheet === "register" ? 440 : 230}
                openDuration={100}
                customStyles={{
                    
                    container:{
                        backgroundColor: colors.cardBg,
                    },
                    draggableIcon: {
                        marginTop:10,
                        marginBottom:5,
                        height:5,
                        width:80,
                        backgroundColor: colors.border,
                    }
                }}
            >
                {activeSheet === "success" ?
                    <SuccessSheet />:
                activeSheet === "login" ?
                    <LoginSheet sheetRef={refRBSheet}/>:
                activeSheet === "register" ?
                    <RegisterSheet sheetRef={refRBSheet}/>
                    :
                    <SuccessSheet />
                }

            </RBSheet>

            <View style={{flex:1,backgroundColor:colors.background}}>
                <View style={{}}>
                    <Header 
                        title={'Bottom Sheets'}
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
                                                // onPress={async () => {await setActiveSheet(data.sheet);refRBSheet.current.open()}}
                                                onPress={() => handleSheet(data.sheet)}
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
                                                <View style={{
                                                    height: 30,
                                                    width: 30,
                                                    borderRadius: 6,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: 10,
                                                }}>
                                                    <FeatherIcon size={16} color={COLORS.primary} name={data.icon}/>
                                                </View>
                                                <Text style={{...FONTS.fontRegular,fontSize:14,color:colors.title,flex:1}}>{data.title}</Text>
                                                {/* <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/> */}
                                                <FeatherIcon size={20} color={colors.title} name={'chevron-right'} />
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
});

export default BottomSheet;