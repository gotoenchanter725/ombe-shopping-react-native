import React from 'react';
import { useTheme } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import { BarChart } from 'react-native-chart-kit';

const BasicBarChart = () => {
    
    const theme = useTheme();
    const { colors } : {colors : any} = theme;


    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
    };

    return (
        <>
            <BarChart
                data={data}
                width={SIZES.width - 60}
                height={220}
                yAxisLabel="$"
                fromZero={true}
                chartConfig={{
                    backgroundColor: colors.card,
                    backgroundGradientFrom: colors.background,
                    backgroundGradientTo: colors.background,
                    fillShadowGradientFrom: '#5384d7',
                    fillShadowGradientFromOpacity:.35,
                    fillShadowGradientTo: '#5384d7',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: () =>  '#5384d7',
                    labelColor: () => colors.text,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#fff"
                    },
                    propsForBackgroundLines: {
                        stroke: colors.text,
                        strokeOpacity: .3,
                    }
                }}
                verticalLabelRotation={0}
            />
        </>
    );
};


export default BasicBarChart;