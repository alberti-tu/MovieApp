import * as React from "react"

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { movieDetailStyles } from "./movie.styles"
import { Movie } from "../../models/movies"
import { globalStyles } from "../../styles/global"
import { useAppDispatch } from "../../services/store"
import { updateWishItem } from "../../data/catalog"
import CastCard from "../cast-card/cast"
import Section from "../section/section"
import { colors } from "../../styles/theme"

type IProps = {
  data: Movie
  isFavorite?: boolean
}

const MovieDetail = ({ data, isFavorite }: IProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const updateWishItemHandler = React.useCallback(() => {
    if (data) {
      dispatch(updateWishItem(data.id))
    }
  }, [dispatch, data?.id])

  const category = React.useMemo(() => {
    if (data?.vote_average > 7) {
      return colors.good
    } else if (data?.vote_average >= 5 && data?.vote_average < 7) {
      return colors.regular
    } else  {
      return colors.bad
    }
  }, [data])

  if (!data) {
    return <></>
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
        alt={data.original_title}
        resizeMethod="resize"
        source={{ uri: data.backdrop_path }}
        style={movieDetailStyles.backdropImage}
      />
      <View style={movieDetailStyles.container}>
        <View style={movieDetailStyles.body}>
          <View style={movieDetailStyles.leftColumn}>
            <Image
              alt={data.original_title}
              resizeMethod="resize"
              source={{ uri: data.poster_path }}
              style={movieDetailStyles.posterImage}
            />
            <Text style={movieDetailStyles.releaseDate}>{data.release_date}</Text>
            <Text style={movieDetailStyles.info}>Vote average:</Text>
            <Text style={[movieDetailStyles.voteAverage, { color: category }]}>{data.vote_average}</Text>
          </View>
          <View style={movieDetailStyles.rightColumn}>
            <TouchableOpacity style={[globalStyles.button, movieDetailStyles.button, { backgroundColor: category }]} onPress={updateWishItemHandler}>
              <Text style={movieDetailStyles.buttonText}>{isFavorite ? 'Remove from wish list': 'Add to wish list'}</Text>
            </TouchableOpacity>
            <Text style={movieDetailStyles.overview}>{data.overview}</Text>
          </View>
        </View>
        <Section title="Cast">
          <View style={globalStyles.cardContainer}>
            {data.casts.map(item => <CastCard key={item.id} data={item}/>)}
          </View>
        </Section>
      </View>
    </ScrollView>
  )
}

export default MovieDetail 