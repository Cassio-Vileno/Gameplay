import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors

  const navegation = useNavigation();

  function hendleGoBack(){
    navegation.goBack();
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}>

      <BorderlessButton onPress={hendleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={heading} 
          style={[{paddingLeft:10}]}/>
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>
      {
        action &&
        <View>
          {action}
        </View>
      }

    </LinearGradient>
  )
}