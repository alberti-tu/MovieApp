import { StyleSheet } from "react-native"

import { colors } from "./theme"

export const globalStyles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.background,
    height: '100%',
  },
  button: {
    width: '100%',
    padding: 4,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  text: {
    color: colors.text,
  },
  textCentered: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingTop: 120,
    textAlign: 'center'
  }
})