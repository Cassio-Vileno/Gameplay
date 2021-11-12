import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar"

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/cassio-vileno.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.geeting}>
            Olá
          </Text>

          <Text style={styles.username}>
            Cassio
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é teu dia de vitoria
        </Text>
      </View>
    </View>
  )
}