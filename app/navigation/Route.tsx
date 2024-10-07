import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
//import StackNavigator from "./StackNavigator";
import themeContext from "../constants/themeContext";
import { COLORS } from "../constants/theme";
import StackNavigator from "./StackNavigator";

	const Route = () => {

		const [isDarkTheme, setIsDarkTheme] = useState(false);
  const authContext = React.useMemo(() => ({
    setDarkTheme: () => {
      setIsDarkTheme(true);
    },
    setLightTheme: () => {
      setIsDarkTheme(false);
    }
  }), []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: COLORS.background,
      title: COLORS.title,
      card: COLORS.card,
      text: COLORS.text,
      //textLight: COLORS.textLight,
      input: COLORS.input,
      border: COLORS.borderColor,
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: COLORS.darkBackground,
      title: COLORS.darkTitle,
      card: COLORS.darkCard,
      text: COLORS.darkText,
      //textLight: COLORS.darkTextLight,
      input: COLORS.darkInput,
      border: COLORS.darkBorder,
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <SafeAreaProvider>
      <themeContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <StackNavigator />
        </NavigationContainer>
      </themeContext.Provider>
    </SafeAreaProvider>
  );
  
}

	export default Route;