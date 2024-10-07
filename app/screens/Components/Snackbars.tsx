import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
//import { FontAwesome } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import ListStyle1 from '../../components/List/ListStyle1';
import { Button, Snackbar } from 'react-native-paper';

const Snackbars = () => {

    const theme = useTheme();
    const {colors}:{colors : any} = theme;
	
	const [visible, setVisible] = React.useState<boolean>(false);
	const [snackText, setSnackText] = React.useState<string>("");
	const [snackType, setSnackType] = React.useState<string>("");
	
	const onDismissSnackBar = () => setVisible(false);

    const onToggleSnackBar = (type:string,text:string) => {
		setSnackText(text);
		setSnackType(type);
		setVisible(!visible);
	};

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <View style={{flex:1}}>
				<Header 
					title={'Snackbars'} 
					leftIcon={'back'}
					titleRight
				/>
                <ScrollView>
                    <View style={{...GlobalStyleSheet.container}}>
						<View style={[GlobalStyleSheet.card,{backgroundColor:theme.dark ? 'rgba(255,255,255,.1)':colors.card}]}>
							<View style={GlobalStyleSheet.cardBody}>
								<ListStyle1
									onPress={() => onToggleSnackBar('success',"Something's wrong!")}
									arrowRight
									icon={<FontAwesome size={14} color={colors.title} name={'check'}/>}
									title={'Confirmation Snackbar'}
									/>
								<ListStyle1
									onPress={() => onToggleSnackBar('warning',"Something's wrong!")}
									arrowRight
									icon={<FontAwesome size={14}  color={colors.title} name={'warning'}/>}
									title={'Warning Snackbar'}
									/>
								<ListStyle1
									onPress={() => onToggleSnackBar('info',"We're on it")}
									arrowRight
									icon={<FontAwesome size={14}  color={colors.title} name={'refresh'}/>} 
									title={'Loading Snackbar'}
									/>
								<ListStyle1
									onPress={() => onToggleSnackBar('error',"Error Occured")}
									arrowRight
									icon={<FontAwesome size={14}  color={colors.title} name={'close'}/>} 
									title={'Error Snackbar'}
								/>
							</View>
                        </View>
                    </View>
                </ScrollView>
            </View>
			<Snackbar
				visible={visible}
				onDismiss={onDismissSnackBar}
				//action={{
				//	label: 'Undo',
				//	onPress: () => {
				//		
				//	},
				//}}
				>
				{/* {snackType === "success" ?
					<Text>success</Text>
				:
				snackType === "warning" ?
					<Text>warning</Text>
				:
				snackType === "info" ?
					<Text>Info</Text>
				:
				snackType === "error" ?
					<Text>Error</Text>
				:
				null
				} */}
				{snackText}
			</Snackbar>
        </SafeAreaView>
    );
};


export default Snackbars;