import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { Fontisto } from "@expo/vector-icons";
import { styles } from "./styles";
import { Member } from "../../components/Menber";
import { ListDivider } from "../../components/ListDivider/Index";

export function AppointmentsDetails() {
  const members = [
    {
      id: '1',
      username: 'Cassio',
      avatar_url: 'https://avatars.githubusercontent.com/u/87983174?v=4',
      status: 'online'
    },
    {
      id: '2',
      username: 'Cassio',
      avatar_url: 'https://avatars.githubusercontent.com/u/87983174?v=4',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <Header title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar a clallenger sem perder uma partida md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total: 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />)}

        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
            <View style={styles.footer}>
            <ButtonIcon title="Entrar na partida"/>
            </View>
  
   
    </Background>
  )
}