import { StyleSheet } from "react-native"

import { colors } from "../../styles/theme"

export const sectionStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 4,
    borderColor: colors.secondary,
    fontSize: 18,
    margin: 12,
  },
  header: {
    color: colors.text,
    fontSize: 18,
    marginHorizontal: 16,
    marginVertical: 4,
  },
})