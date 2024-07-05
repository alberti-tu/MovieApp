import * as React from "react"

import { Image, TouchableOpacity } from "react-native"

import { movieCardStyles } from "./movie.styles"
import { Movie } from "../../models/movies"

type IProps = {
  data: Movie
  onPress?: () => void
}

const MovieCard = ({ data, onPress }: IProps): JSX.Element => {
  return (
    <TouchableOpacity style={movieCardStyles.container} onPress={() => onPress?.()}>
      <Image
        alt={data.original_title}
        source={{ uri: data.poster_path }}
        style={movieCardStyles.posterImage}
      />
    </TouchableOpacity>
  )
}

export default MovieCard