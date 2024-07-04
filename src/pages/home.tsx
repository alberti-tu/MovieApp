import * as React from "react"

import { RefreshControl, ScrollView } from "react-native"

import { fetchMovies, selectCatalogMovies, selectCatalogMoviesIsLoading } from "../data/catalog"
import { useAppDispatch, useAppSelector } from "../services/store"
import { globalStyles } from "../styles/global"

import Section from "../components/section/section"
import MovieCard from "../components/movie-card/movie"

type IProps = {
  navigation: any
}

const HomePage = ({ navigation }: IProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const movies = useAppSelector(selectCatalogMovies)
  const isLoading = useAppSelector(selectCatalogMoviesIsLoading)

  const getData = React.useCallback(() => {
    dispatch(fetchMovies({ page: 1, reset: true}))
      .unwrap()
        .then(() => {
          dispatch(fetchMovies({ page: 2}))
          dispatch(fetchMovies({ page: 3}))
      })
  }, [])

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getData} />}
      style={globalStyles.container}
    >
      <Section key={0} title="Masterpieces">
        <ScrollView horizontal>
          {
            movies
              ?.filter(item => item.vote_average > 7)
              ?.map(item => (
                <MovieCard
                  key={item.id}
                  data={item}
                  onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
                />
              ))
          }
        </ScrollView>
      </Section>

      <Section key={1} title="To spend the time">
        <ScrollView horizontal>
          {
            movies
              ?.filter(item => item.vote_average >= 5 && item.vote_average < 7)
              ?.map(item => (
                <MovieCard
                  key={item.id}
                  data={item}
                  onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
                />
              ))
          }
        </ScrollView>
      </Section>

      <Section key={2} title="Background for a good nap">
        <ScrollView horizontal>
          {
            movies
              ?.filter(item => item.vote_average < 5)
              ?.map(item => (
                <MovieCard
                  key={item.id}
                  data={item}
                  onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
                />
              ))
          }
        </ScrollView>
      </Section>
    </ScrollView>
  )
}

export default HomePage