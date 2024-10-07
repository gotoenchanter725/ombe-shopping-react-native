import React, { useState } from 'react';
import { View, Image, useWindowDimensions,TouchableOpacity, Text } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { COLORS, FONTS } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const ImageSwiper = ({ data } : any) => {
  const [newData] = useState([
    //{ key: 'space-left' },
    ...data,
    //{ key: 'space-right' },
  ]);

  const { width } = useWindowDimensions();
  const SIZE = width * 0.50;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);

  const onScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
      x.value = event.nativeEvent.contentOffset.x;
  };

  const navigation = useNavigation<any>();
  
  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
      onScroll={onScroll}
      contentContainerStyle={{
        paddingTop:80,
        paddingBottom:50
      }}
    >
      {newData.map((item, index) => {
        
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 1) * SIZE, (index - 2) * SIZE, index * SIZE],
            [0.8, 0.7, 0.9]
            );
            return {
              transform: [
                { scale },
              ],
            };
          });
          
          if (!item.image) {
            return <View style={{ width: SPACER}} key={index} />;
          }

        return (
          <View key={index} style={{ width: SIZE,}}>
            <Animated.View style={[style]}>
              <TouchableOpacity
                activeOpacity={.9}
                onPress={() => navigation.navigate('ProductsDetails')}
                style={{ 
                  height: 222, 
                  width: 206, 
                  backgroundColor: COLORS.primary, 
                  borderRadius: 31,
                  shadowColor: "#025135",
                  shadowOffset: {
                      width: 0,
                      height: 15,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 31.27,
                  elevation: 8, 
                }}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{ height:210,width:210,resizeMode:'contain',marginTop:-80}}
                    source={item.image}
                  />
                </View>
                <View style={{paddingHorizontal:25}}>
                  <Text style={{...FONTS.fontSemiBold,fontSize:16,color:COLORS.card,}}>{item.title}</Text>
                  <View style={{flexDirection:'row',alignItems:'flex-start',gap:5,marginTop:10}}>
                      <Text style={{...FONTS.fontSemiBold,fontSize:14,color:COLORS.card,}}>$</Text>
                      <Text style={{...FONTS.fontSemiBold,fontSize:24,color:COLORS.card,lineHeight:32}}>{item.price}</Text>
                      <Text style={{...FONTS.fontMedium,fontSize:16,color:'#6CAE97',textDecorationLine:'line-through'}}>{item.discount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default ImageSwiper;
