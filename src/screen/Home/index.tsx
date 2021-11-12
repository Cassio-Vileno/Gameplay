import React, { useState } from "react";
import { View, FlatList } from "react-native"
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader"
import { Appointments } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider/Index";

export function Home() {
  const [category, setCategory] = useState('');
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
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect} />
      </View>

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas"
          subtitle="Total: 6" />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointments data={item} />
          )} 
          ItemSeparatorComponent={() => <ListDivider/>}
          style={styles.matches}
          showsVerticalScrollIndicator={false}/>
      </View>
    </View>
  )
}