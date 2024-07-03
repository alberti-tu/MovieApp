import { StyleSheet } from "react-native"

import { colors } from "../../styles/theme"

export const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.text,
    fontSize: 32,
    margin: 16,
  }
})