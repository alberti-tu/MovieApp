import { StyleSheet } from "react-native"

import { colors } from "../../styles/theme"

export const wishButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  button: {
    color: colors.text
  }
})