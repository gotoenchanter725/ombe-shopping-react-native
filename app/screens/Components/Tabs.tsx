import React, { useRef } from 'react';
import { Animated,  ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import TabButtonStyle1 from '../../components/Tabs/TabButtonStyle1';
import TabButtonStyle2 from '../../components/Tabs/TabButtonStyle2';

const Tabs = () => {

    const theme = useTheme();
    const {colors}:{colors : any} = theme;

    const scrollViewHome = useRef<any>();

    const scrollViewHome2 = useRef<any>();

    const buttons = ['First', 'Second', 'Third'];

    const scrollX = useRef(new Animated.Value(0)).current;
    const onCLick = (i:any) => scrollViewHome.current.scrollTo({ x: i * SIZES.width - 60 });
    const scrollX2 = useRef(new Animated.Value(0)).current;
    const onCLick2 = (i:any) => scrollViewHome2.current.scrollTo({ x: i * SIZES.width - 60 });

    return (
        <View
            style={{
                flex:1,
                backgroundColor:colors.background,
            }}
        >
            <View style={{flex:1}}>
                <Header title={'Tabs'} leftIcon={'back'} titleRight/>
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.h6,color:colors.title}}>Default Tab</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{paddingBottom:15}}>
                                    <TabButtonStyle1 
                                        buttons={buttons} 
                                        onClick={onCLick} 
                                        scrollX={scrollX} 
                                    />
                                </View>
                                <ScrollView
                                    ref={scrollViewHome}
                                    //ref={(e:any) => {console.log(e)}}
                                    horizontal
                                    pagingEnabled
                                    scrollEventThrottle={16}
                                    scrollEnabled={false}
                                    decelerationRate="fast"
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                        { useNativeDriver: false },
                                    )}
                                    >
                                 
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                 
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                   
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>

                                </ScrollView>
                            </View>
                        </View>

                        <View style={[GlobalStyleSheet.card,{backgroundColor:colors.card}]}>
                            <View style={[GlobalStyleSheet.cardHeader,{borderBottomColor:COLORS.inputborder}]}>
                                <Text style={{...FONTS.h6,color:colors.title}}>Primary Tab</Text>
                            </View>
                            <View style={GlobalStyleSheet.cardBody}>
                                <View style={{paddingBottom:15}}>
                                    <TabButtonStyle2
                                        buttons={buttons} 
                                        onClick={onCLick2} 
                                        scrollX={scrollX2} 
                                    />
                                </View>
                                <ScrollView
                                    ref={scrollViewHome2}
                                    horizontal
                                    pagingEnabled
                                    scrollEventThrottle={16}
                                    scrollEnabled={false}
                                    decelerationRate="fast"
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
                                        { useNativeDriver: false },
                                    )}>
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                         
                                    <View style={[styles.tabBody]} >
                                        <Text style={{...FONTS.font,color:colors.text}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    tabBody: {
        width: SIZES.width - 60,
    },
})

export default Tabs;