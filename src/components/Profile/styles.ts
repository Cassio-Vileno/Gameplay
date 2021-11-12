import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems:  'center'
  },
  user:{
    flexDirection: 'row',
    fontSize:24,
  },
  username:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize:24,
   },
  geeting:{
    fontFamily: theme.fonts.title500,
    fontSize:24,
    color: theme.colors.heading,
    marginRight: 5
  },
  message:{
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  
  }
})