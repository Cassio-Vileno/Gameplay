import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native"
import illustration from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles"
import { Background } from '../../components/Background';


export function SignIn() {

  const navigation = useNavigation();

  function hendonSigIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image source={illustration} style={styles.Image} resizeMode="stretch" />

        <View style={styles.content}>

          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize {'\n'}
            Suas Jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={hendonSigIn}
          />
        </View>
      </View>
    </Background>
  )
}