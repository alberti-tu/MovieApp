import * as React from "react"

import { Image, TouchableOpacity } from "react-native"

import { movieCardStyles } from "./movie.styles"
import { Movie } from "../../models/movies"

type IProps = {
  data: Movie
  onPress?: () => void
  width?: number
}

const MovieCard = ({ data, onPress, width = 0 }: IProps): JSX.Element => {
  return (
    <TouchableOpacity style={{ ...movieCardStyles.container, width }} onPress={() => onPress?.()}>
      <Image
        alt={data.original_title}
        resizeMethod="resize"
        source={{ uri: data.poster_path }}
        style={movieCardStyles.posterImage}
      />
    </TouchableOpacity>
  )
}

export default MovieCard