import { StyleSheet } from "react-native"

import { colors } from "./theme"

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
  },
  button: {
    width: '100%',
    padding: 4,
  },
  text: {
    color: colors.text,
  }
})