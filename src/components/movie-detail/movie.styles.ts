import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/theme"

const { height, width } = Dimensions.get('window')

export const movieDetailStyles = StyleSheet.create({
  container: {
    padding: 12,
  },
  backdropImage: {
    height: 192,
    width: width
  },
  header: {
    fontSize: 24,
    color: colors.light,
    fontWeight: '800'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
    padingHorizontal: 8
  },
  leftColumn: {
    width: 0.4 * width - 12,
  },
  rightColumn: {
    width: 0.6 * width - 12,
    paddingHorizontal: 12,
  },
  posterImage: {
    borderRadius: 12,
    aspectRatio: 2/3,
    width: '100%',
  },
  info: {
    color: colors.text,
    marginTop: 12,
    fontSize: 16,
    lineHeight: 20,
  },
  voteAverage: {
    fontSize: 26,
    lineHeight: 48,
    fontWeight: '800',
  },
  button: {
    backgroundColor: colors.secondary,
    marginBottom: 12,
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
    textAlign: 'center'
  },
  overview: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  }
})