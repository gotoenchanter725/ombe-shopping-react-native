import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, SIZES,FONTS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

const Demo = () => {
  const [value, setValue] = useState(50);
  const SLIDER_WIDTH = SIZES.width - 40;
  const THUMB_SIZE = 25;

  const calculateThumbPosition = (value :any ) => {
    return (value / 3) * (SLIDER_WIDTH - THUMB_SIZE);
  };

  const theme = useTheme();
    const { colors }: { colors: any; } = theme;

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View style={[styles.circleContainer, { left: calculateThumbPosition(value) }]}>
          <View style={[styles.circleContainer2]}/>
        </View>
        <View
          style={styles.gradientTrack}
        />
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={3}
          step={1}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor={COLORS.primary}
        />
        <View
          style={{
            flexDirection:"row",
            justifyContent:'space-between',
            marginTop:90
          }}
        >
          <Text 
            style={[styles.title,{color:colors.title, opacity :.5},value === 0 && {...FONTS.fontSemiBold,opacity:1}]}
          >
            Small
          </Text>
          <Text 
           style={[styles.title,{color:colors.title, opacity :.5},value === 1 && {...FONTS.fontSemiBold,opacity:1}]}
          >
            Medium
          </Text>
          <Text 
            style={[styles.title,{color:colors.title, opacity :.5},value === 2 && {...FONTS.fontSemiBold,opacity:1}]}
          >
            Large
          </Text>
          <Text 
            style={[styles.title,{color:colors.title, opacity :.5},value === 3 && {...FONTS.fontSemiBold,opacity:1}]}
          >
            Xtra Large
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff",
  },
  sliderContainer: {
    width: SIZES.width - 40,
    position: 'relative',
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
    position: 'absolute',
    top:53,
    opacity:0,
  },
  circleContainer: {
    position: 'absolute',
    top: 38,
    width: 47,
    height: 47,
    backgroundColor:'rgba(4,118,78,.10)',
    borderRadius:25,
    zIndex:1,
    pointerEvents:'none',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:-7
  },
  circleContainer2: {
    width: 25,
    height: 25,
    backgroundColor:COLORS.primary,
    borderRadius:25,
    zIndex:2,
  },
  valueText: {
    fontSize: 16,
    color: '#000',
  },
  gradientTrack: {
    left:0,
    right:0,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    top: '50%',
    backgroundColor:"#ECECEC",
    transform: [{ translateY: -2.5 }],
  },
  title:{
    ...FONTS.fontRegular , 
    color:COLORS.title,
    fontSize:16,
  }
});

export default Demo;
