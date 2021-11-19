import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider/Index";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { useNavigation } from "@react-navigation/native";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { View, FlatList, } from "react-native"
import React, { useState } from "react";
import { styles } from "./styles";


export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '11/11 as 17:23h',
      description: 'É hoje que vamos chegar a meste sem preder uma partida'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '2',
      date: '11/11 as 17:23h',
      description: 'É hoje que vamos chegar a meste sem preder uma partida'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }
  function handleAppointmentsCriate() {
    navigation.navigate('AppointmentsCriate')
  }
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentsCriate} />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect} />
      </View>

        <ListHeader 
        title="Partidas agendadas"
          subtitle="Total: 6"
           />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
            data={item}
            onPress={() => handleAppointmentDetails(item)}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          contentContainerStyle={{ paddingBottom: 69 }}
          showsVerticalScrollIndicator={false} />
    </Background>
  )
}