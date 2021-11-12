import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { Image } from "react-native";
import { styles } from "./styles";


export function GildIcon() {
  const uri = 'https://static.wikia.nocookie.net/as-aventuras-de-superban-e-super-erro/images/d/dd/Discord.png/revision/latest?cb=20190313184331&path-prefix=pt-br'
  return (
          <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"/>

    
  )
}