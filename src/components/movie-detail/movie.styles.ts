import { StyleSheet } from "react-native"
import { colors } from "../../styles/theme"

export const movieDetailStyles = StyleSheet.create({
  container: {
    padding: 12,
  },
  backdropImage: {
    height: 192,
    width: '100%'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
    padingHorizontal: 8
  },
  leftColumn: {
    width: '40%',
  },
  rightColumn: {
    width: '60%',
    paddingHorizontal: 12,
  },
  posterImage: {
    borderRadius: 12,
    aspectRatio: 2/3,
    width: '100%',
  },
  releaseDate: {
    marginTop: 4,
    color: colors.text,
    fontSize: 12,
  },
  info: {
    color: colors.text,
    fontSize: 16,
    marginTop: 8,
  },
  voteAverage: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  button: {
    backgroundColor: colors.secondary,
    marginBottom: 12,
  },
  buttonText: {
    color: colors.text,
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