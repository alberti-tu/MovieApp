import * as React from "react"

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { movieDetailStyles } from "./movie.styles"
import { Movie } from "../../models/movies"
import { globalStyles } from "../../styles/global"
import { useAppDispatch, useAppSelector } from "../../services/store"
import { selectCatalogWishListById, updateWishItem } from "../../data/catalog"
import CastCard from "../cast-card/cast"
import Section from "../section/section"

type IProps = {
  data: Movie
}

const MovieDetail = ({ data }: IProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector(state => selectCatalogWishListById(state, data?.id))

  const updateWishItemHandler = React.useCallback(() => {
    dispatch(updateWishItem(data.id))
  }, [dispatch, data.id])

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
            <Text style={movieDetailStyles.voteAverage}>{data.vote_average}</Text>
          </View>
          <View style={movieDetailStyles.rightColumn}>
            <TouchableOpacity style={[globalStyles.button, movieDetailStyles.button]} onPress={updateWishItemHandler}>
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