import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, CodeScanner, useCameraDevice } from 'react-native-vision-camera';
import { COLORS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';


const QrCodeScanner = () => {

  const theme = useTheme();
  const { colors }: { colors : any} = theme;

  const device = useCameraDevice('back')

  useEffect(() => {
    checkpermission();
  },[]);

  const checkpermission = async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission = await Camera.requestMicrophonePermission();

      //console.log(newCameraPermission)
  };

  if (device == null) return <ActivityIndicator />

  const codeScanner: CodeScanner = {
    codeTypes: ['qr', 'ean-8'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
    }
  }

  return (
    <View style={{backgroundColor:colors.title,flex:1,alignItems:'center',justifyContent:'center'}}>
        <Camera
          style={[StyleSheet.absoluteFill,{}]}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
          
        />
        <View
          style={{borderWidth:2,height:250,width:250,borderColor:COLORS.success,}}
        />
    </View>
   
  )
}

export default QrCodeScanner