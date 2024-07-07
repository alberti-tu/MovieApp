import * as React from "react"

import { ScrollView, Text, View } from "react-native"

import { globalStyles } from "../styles/global"
import { useAppSelector } from "../services/store"
import { selectCatalogMovies, selectCatalogWishList } from "../data/catalog"

import MovieCard from "../components/movie-card/movie"

type IProps = {
  navigation: any
  route: any
}

const WishPage = ({ navigation, route }: IProps): JSX.Element => {
  const movies = useAppSelector(selectCatalogMovies)
  const data = useAppSelector(selectCatalogWishList)

  const wishList = React.useMemo(() => {
    return Object
      .entries(data)
      .map(item => movies.find(x => x.id === item[0]))
      .filter(item => item !== undefined)
  }, [data, movies])

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={globalStyles.container}>
      {!wishList.length && (
        <Text style={[globalStyles.text, globalStyles.textCentered]}>
          You don't have any wished movie yet, you can add them from the detail movie page
        </Text>
      )}
      <View style={globalStyles.cardContainer}>
        {wishList.map(item => (
          <MovieCard
            key={item.id}
            data={item}
            onPress={() => navigation.navigate('MovieDetail', { id: item?.id })}
            width={100}
          />))}
      </View>
    </ScrollView>
  )
}

export default WishPage