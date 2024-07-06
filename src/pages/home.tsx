import * as React from "react"

import { RefreshControl, ScrollView } from "react-native"

import { fetchMovies, selectCatalogMovies, selectCatalogMoviesIsLoading } from "../data/catalog"
import { useAppDispatch, useAppSelector } from "../services/store"
import { globalStyles } from "../styles/global"

import Section from "../components/section/section"
import MovieCard from "../components/movie-card/movie"
import WishButton from "../components/wishButton/wishButton"

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

  const sections = React.useMemo(() => {
    return [
      {
        title: 'Masterpieces',
        data: movies?.filter(item => item.vote_average > 7)
      },
      {
        title: 'To a good movie night',
        data: movies?.filter(item => item.vote_average >= 5 && item.vote_average < 7)
      },
      {
        title: 'Give them a change',
        data: movies?.filter(item => item.vote_average < 5)
      },
    ]
  }, [movies])

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <WishButton onPress={() => navigation.navigate('Wish')} />,
    })
  }, [navigation])

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getData} />}
      style={globalStyles.container}
    >
      {
        Object.values(sections)
          .filter(item => item.data?.length > 0)
          .map((item, index) =>
            <Section key={index} title={item.title}>
              <ScrollView horizontal>
                {item.data.map(item => (
                  <MovieCard
                    key={item.id}
                    data={item}
                    onPress={() => navigation.navigate('MovieDetail', { id: item?.id })}
                    width={128}
                  />
                ))}
              </ScrollView>
            </Section>
          )
      }
    </ScrollView>
  )
}

export default HomePage