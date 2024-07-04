import * as React from "react"

import { Button, ScrollView, Text, View } from "react-native"

import { fetchMovies, selectCatalogMovies, selectCatalogMoviesIsLoading } from "../data/catalog"
import { useAppDispatch, useAppSelector } from "../services/store"
import { globalStyles } from "../styles/global"

type IProps = {
  navigation: any
}

const HomePage = ({ navigation }: IProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const movies = useAppSelector(selectCatalogMovies)
  const isLoading = useAppSelector(selectCatalogMoviesIsLoading)

  React.useEffect(() => {
    dispatch(fetchMovies({ page: 1, reset: true}))
      .unwrap()
        .then(() => {
          dispatch(fetchMovies({ page: 2}))
          dispatch(fetchMovies({ page: 3}))
      })
  }, [dispatch])

  return (
    <View style={globalStyles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>- Masterpieces</Text>
        {movies?.filter(item => item.vote_average >= 7)?.map(item => <Text key={item.id}>{item.original_title} - {item.vote_average}</Text>)}
        <Text>- To spend the time</Text>
        {movies?.filter(item => item.vote_average >= 5 && item.vote_average < 7)?.map(item => <Text key={item.id}>{item.original_title} - {item.vote_average}</Text>)}
        <Text>- Background for a good nap</Text>
        {movies?.filter(item => item.vote_average < 5)?.map(item => <Text key={item.id}>{item.original_title} - {item.vote_average}</Text>)}
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
      </ScrollView>
    </View>
  )
}

export default HomePage