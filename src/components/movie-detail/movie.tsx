import * as React from "react"

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { movieDetailStyles } from "./movie.styles"
import { Movie } from "../../models/movies"
import { globalStyles } from "../../styles/global"

type IProps = {
  data: Movie
}

const MovieDetail = ({ data }: IProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false)

  if (!data) {
    return <></>
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={movieDetailStyles.container}>
      <Text style={movieDetailStyles.header}>{data.original_title}</Text>
      <Text>{data.release_date}</Text>
      <View style={movieDetailStyles.body}>
        <View style={movieDetailStyles.leftColumn}>
          <Image
            alt={data.original_title}
            source={{ uri: data.poster_path }}
            style={movieDetailStyles.posterImage}
          />
          <Text>Vote average: {data.vote_average}</Text>
        </View>
        <View style={movieDetailStyles.rightColumn}>
          <TouchableOpacity style={[globalStyles.button, movieDetailStyles.button]} onPress={() => setIsFavorite(state => !state)}>
            <Text style={movieDetailStyles.buttonText}>{isFavorite ? 'Remove from wish list': 'Add to wish list'}</Text>
          </TouchableOpacity>
          <Text style={movieDetailStyles.overview}>{data.overview}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default MovieDetail 