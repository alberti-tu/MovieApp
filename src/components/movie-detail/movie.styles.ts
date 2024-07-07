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
    marginTop: 6,
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
    color: colors.primaryText,
    fontSize: 14,
  },
  info: {
    color: colors.primaryText,
    fontSize: 16,
    marginTop: 8,
  },
  voteAverage: {
    color: colors.primaryText,
    fontSize: 24,
    fontWeight: '800',
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: colors.secondaryText,
    fontSize: 16,
    textAlign: 'center'
  },
  overview: {
    color: colors.primaryText,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  },
})