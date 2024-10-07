import React, {  useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import Button from '../Button/Button';
import { useNavigation, useTheme } from '@react-navigation/native';
import ButtonOutline from '../Button/ButtonOutline';
import MultiSlider from '@ptomasroos/react-native-multi-slider';



type Props = {
    sheetRef ?: any;
}

const FilterSheet2 = ({sheetRef} : Props) => {

  const theme = useTheme();
  const { colors } : {colors : any} = theme;

  const navigation = useNavigation();

  const categoriesData = ["Mountain", "Men", "Sports", "Women", "Classic","Geared Cycles",];

  const [active1Size, setActive1Size] = useState(categoriesData[0]);

  const sizeData = ["27.5", "29T", "26T", "24T"];

  const [active2Size, setActive2Size] = useState(sizeData[0]);

  const brandData = ["Hero", "Svitch" ,"Hercules" ,"Avon", "BSA"]

  const [active3Size, setActive3Size] = useState(brandData[0]);

  const [multiSliderValue, setMultiSliderValue] = useState([200, 270])

  const multiSliderValuesChange = (values:any) => setMultiSliderValue(values)


  const [values, setValues] = useState<any>([0, 50]); // Initial values for the range

  const handleValuesChange = (newValues:any) => {
    setValues(newValues);
  };

  return (
      <View style={[GlobalStyleSheet.container, { paddingTop: 0,backgroundColor:theme.dark ? colors.background :colors.card ,borderRadius:15,paddingBottom:10}]}>
          <View
            style={[styles.filterBackground,{
              borderBottomColor: COLORS.inputborder,
              borderStyle:'dashed'
            }]}
          >
            <Text style={[FONTS.fontRegular, { color: colors.title, fontSize: 14 }]}>Filters</Text>
            <TouchableOpacity
              style={[styles.Closebackgrond,{backgroundColor: colors.card }]}
              onPress={() => sheetRef.current.close()}
            >
              <Image
                style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: colors.title }}
                source={IMAGES.close}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
              showsVerticalScrollIndicator={false}
          >
              <View style={[GlobalStyleSheet.flex,{ marginTop: 10 }]}>
                <Text style={[styles.MainTitle,{color:colors.title}]}>Brand</Text>
                <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
                  activeOpacity={0.9}
                >
                  <Text style={styles.SubTitle}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.selectcard}>
                {brandData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActive3Size(data)}
                      key={index}
                      style={[styles.subCard,{
                        backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)': '#FAFDFF',
                      }, active3Size === data && {
                        backgroundColor:COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[styles.subcardTitle,{color: colors.title }, active3Size === data && {  color:theme.dark ? COLORS.title : COLORS.title }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={[GlobalStyleSheet.flex,{ marginTop: 10 }]}>
                <Text style={[styles.MainTitle,{color:colors.title}]}>Categories:</Text>
                <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
                  activeOpacity={0.9}
                >
                  <Text style={styles.SubTitle}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.selectcard}>
                {categoriesData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActive1Size(data)}
                      key={index}
                      style={[styles.subCard,{
                        backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)': '#FAFDFF',
                      }, active1Size === data && {
                        backgroundColor:COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[styles.subcardTitle,{color: colors.title }, active1Size === data && {  color:theme.dark ? COLORS.title : COLORS.white }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={[GlobalStyleSheet.flex,{ marginTop: 10 }]}>
                <Text style={[styles.MainTitle,{color:colors.title}]}>Size:</Text>
                <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
                  activeOpacity={0.9}
                >
                  
                  <Text style={styles.SubTitle}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.selectcard}>
                {sizeData.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActive2Size(data)}
                      key={index}
                      style={[styles.subCard,{
                        backgroundColor:theme.dark ? 'rgba(255,255,255,0.10)': '#FAFDFF',
                      }, active2Size === data && {
                        backgroundColor:COLORS.primary,
                        borderColor: COLORS.primary,
                      }]}
                    >
                      <Text style={[styles.subcardTitle,{color: colors.title }, active2Size === data && { color:theme.dark ? COLORS.title : COLORS.white }]}>{data}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
              <View style={[GlobalStyleSheet.flex,{ marginTop: 10 }]}>
                <Text style={[styles.MainTitle,{color:colors.title}]}>Price:</Text>
              </View>
              <View style={{ marginTop: 5, }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 10 }}>
                    <Text style={{ ...FONTS.fontRegular, fontSize: 10, color: COLORS.title, backgroundColor:COLORS.primary, textAlign: 'center', paddingVertical: 5, paddingHorizontal: 5,borderRadius:8 }}>${multiSliderValue[0]}</Text>
                    <Text style={{ ...FONTS.fontRegular, fontSize: 10, color: COLORS.title, backgroundColor:COLORS.primary, textAlign: 'center', paddingVertical: 5, paddingHorizontal: 5,borderRadius:8 }}>${multiSliderValue[1]}</Text>
                  </View>
                  <MultiSlider
                    values={[multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={310}
                    selectedStyle={{ backgroundColor:COLORS.primary, }}
                    containerStyle={{ alignSelf: 'center', marginTop: -10 }}
                    onValuesChange={multiSliderValuesChange}
                    markerStyle={{
                      // ...Platform.select({
                      //   android: {
                          height: 24,
                          width: 24,
                          borderRadius: 50,
                          backgroundColor:theme.dark ? colors.background : colors.card,
                          borderWidth: 3,
                          borderColor: COLORS.primary
                      //   }
                      // })
                    }}
                    min={200}
                    max={270}
                    allowOverlap={false}
                    minMarkerOverlapDistance={10}
                  />
              </View>
              <View style={{ flexDirection: 'row', gap: 10, paddingRight: 10, marginTop: 10 }}>
                <View style={{ width: '50%' }}>
                  <ButtonOutline
                    title={"Reset"}
                    color={COLORS.primary}
                    text={colors.title}
                    style={{borderRadius:8,borderWidth:2,borderColor:COLORS.primary,}}
                    onPress={() => sheetRef.current.close()}
                  />
                </View>
                <View style={{ width: '50%' }}>
                  <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => sheetRef.current.close()}
                      style={{
                        height:48,
                        width:'100%',
                        paddingHorizontal:20,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:COLORS.secondary,
                        borderRadius:8
                      }}
                  >
                    <Text  style={{...FONTS.fontRegular,fontSize:12,color:COLORS.primary}}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    filterBackground:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.background,
        paddingBottom: 10,
        paddingTop:10,
        marginHorizontal: -15,
        paddingHorizontal: 15
      },
      Closebackgrond:{
          height: 38, 
          width: 38, 
          backgroundColor: COLORS.card, 
          borderRadius: 38, 
          alignItems: 'center', 
          justifyContent: 'center'
      },
      MainTitle:{
        ...FONTS.fontRegular,
        fontSize: 14, 
        color: COLORS.title
      },
      SubTitle:{
        ...FONTS.fontRegular,
         fontSize: 12,
          color:'#8ABE12' 
      },
      selectcard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 10
      },
      subcardTitle:{
        ...FONTS.fontMedium,
        fontSize: 13, 
        color: COLORS.title 
      },
      subCard:{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor:COLORS.inputborder,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 5
      }
})

export default FilterSheet2