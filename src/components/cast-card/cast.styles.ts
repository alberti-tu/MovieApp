import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window')

export const castCardStyles = StyleSheet.create({
  container: {
    margin: 4,
    width: 0.25 * width,
  },
  posterImage: {
    borderRadius: 12,
    aspectRatio: 2/3,
    width: '100%'
  }
})