import * as React from "react"

import { View } from "react-native"

import { globalStyles } from "../styles/global"
import { useAppSelector } from "../services/store"
import { selectCatalogMoviesById } from "../data/catalog"

import MovieDetail from "../components/movie-detail/movie"
import WishButton from "../components/wishButton/wishButton"

type IProps = {
  navigation: any
  route: any
}

const DetailPage = ({ navigation, route }: IProps): JSX.Element => {
  const data = useAppSelector(state => selectCatalogMoviesById(state, route.params.id))

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <WishButton onPress={() => navigation.navigate('Wish')} />,
    })
  }, [navigation])

  React.useEffect(() => {
    if (data.original_title) {
      navigation.setOptions({ title: data.original_title })
    }
  }, [data?.original_title])

  return (
    <View style={globalStyles.container}>
      <MovieDetail data={data} />
    </View>
  )
}

export default DetailPage