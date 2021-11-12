import React from "react";
import { styles } from "./styles"
import { View, Text, Image } from "react-native"
import DiscordImg from "../../assets/discord.png"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"

type props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.IconWrapper}>
        <Image source={DiscordImg} style={styles.Icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>

  )
}