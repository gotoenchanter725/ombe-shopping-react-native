import React from 'react';
import {  Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import Input from '../../components/Input/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IMAGES } from '../../constants/Images';
// import { FontAwesome } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
//import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Inputs = () => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <View
                style={{
                    flex:1,
                    //backgroundColor:colors.background,
                }}
            >
                <Header 
                    title={'Inputs'}  
                    leftIcon={'back'}
                    // titleLeft
                    titleRight
                />
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                    <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>

                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Classic Input</Text>
                            </View>

                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        //value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        //value={''}  
                                        type={'password'}
                                        placeholder="Enter Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Input with Icon</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.title}/> }
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        icon={<MaterialIcon style={{opacity:.6}} name={'email'} size={20} color={colors.title}/>}
                                        //value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        type={'password'}
                                        icon={<FontAwesome style={{opacity:.6}} name={'lock'} size={20} color={colors.title}/> }
                                        //value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card, { backgroundColor: colors.card }]}>
                            <View style={[GlobalStyleSheet.cardHeader, { borderBottomColor:COLORS.inputborder }]}>
                                <Text style={{ ...FONTS.h6, color: colors.title }}>Border Input</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{ marginBottom: 10 }}>
                                    <Input
                                        inputBorder
                                        placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                        style={{borderColor:COLORS.primaryLight, paddingLeft:0}}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Input
                                        inputBorder
                                        defaultValue="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                        style={{borderColor:COLORS.primary, paddingLeft:0}}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Input
                                        inputBorder
                                        icon={<FontAwesome style={{}} name={'user'} size={20} color={COLORS.primary} />}
                                        // placeholder="Enter Username"
                                        onChangeText={(value) => console.log(value)}
                                        style={{borderColor:COLORS.primary, paddingLeft:30}}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Input
                                        inputBorder
                                        icon={<MaterialIcon style={{}} name={'email'} size={20} color={COLORS.primary} />}
                                        //placeholder="Enter Email"
                                        onChangeText={(value) => console.log(value)}
                                        style={{borderColor:COLORS.primary, paddingLeft:30}}
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Input
                                        inputBorder
                                        type={'password'}
                                        icon={<FontAwesome style={{}} name={'lock'} size={20} color={COLORS.primary} />}
                                        // placeholder="Password"
                                        onChangeText={(value) => console.log(value)}
                                        style={{borderColor:COLORS.primary, paddingLeft:30}}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Input with different sizes</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        inputLg
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        inputSm
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Input with different sizes and icon</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        backround
                                        inputLg
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.title}/> }
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        backround
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.title}/> }
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        backround
                                        inputSm
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.title}/> }
                                    />
                                </View>
                            </View>
                        </View>
                        
                        
                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Rounded Input</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        inputRounded
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.text}/> }
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        inputRounded
                                        icon={<MaterialIcon style={{opacity:.6}} name={'email'} size={20} color={colors.text}/>}
                                        //value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        inputRounded
                                        type={'password'}
                                        icon={<FontAwesome style={{opacity:.6}} name={'lock'} size={20} color={colors.text}/> }
                                        //value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.fontMedium,fontSize:14,color:colors.title}}>Border Input</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        icon={<FontAwesome style={{opacity:.6}} name={'user'} size={20} color={colors.text}/> }
                                        //value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        icon={<MaterialIcon style={{opacity:.6}} name={'email'} size={20} color={colors.text}/>}
                                        //value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Input
                                        type={'password'}
                                        icon={<FontAwesome style={{opacity:.6}} name={'lock'} size={20} color={colors.text}/> }
                                        //value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


export default Inputs;