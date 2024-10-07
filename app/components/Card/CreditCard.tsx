import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { COLORS,FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';

type Props = {
    debitcard ?: any,
    creditCard ?: any,
    creditcard ?: any,
}

const CreditCard = ({debitcard ,creditCard,creditcard} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 5,
            }}
        >
            {debitcard ? 
                <Image
                    style={{  height: creditCard ? 180 : 150, width: creditCard ? '100%' : 277, borderRadius: 18, }}
                    source={IMAGES.cardbackground2}
                />
            :
                <Image
                    style={{  height: creditCard ? 180 : 150, width: creditCard ? '100%' : 277, borderRadius: 18, }}
                    source={IMAGES.cardbackground1}
                />
            }
            <View 
                style={{  height: creditCard ? 180 : 150, width: creditCard ? '100%' : 277, borderRadius: 18, padding:creditCard ? 20 :15,position:'absolute' }}
            >
                <View style={{flex:1}}>
                    <Image
                        style={{ height: debitcard ? 24 : 17, width: 50, resizeMode: 'contain' }}
                        source={debitcard ? IMAGES.card1 : IMAGES.card}
                    />
                </View>
                <View style={[GlobalStyleSheet.flex]}>
                    <View>

                        <Text style={styles.CardTitle}>ROOPA SMITH</Text>
                        <Text style={{ ...FONTS.fontMedium, fontSize: creditCard ? 20 : 14, color: COLORS.white, }}>**** **** **** 4532</Text>
                    </View>
                    <View style={{flexDirection:'row',gap:10}}>
                        <View>
                            <Text style={styles.CardTitle2}>EXP</Text>
                            <Text style={styles.CardTitle}>10/28</Text>
                        </View>
                        {creditCard ?
                            <View>
                                <Text style={styles.CardTitle2}>CVV</Text>
                                <Text style={styles.CardTitle}>666</Text>
                            </View>
                        :
                            null
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CardTitle:{
        ...FONTS.fontMedium,
         fontSize: 14,
          color: COLORS.white
    },
    CardTitle2:{
        ...FONTS.fontRegular,
         fontSize: 12,
          color: COLORS.white,
    }
})

export default CreditCard