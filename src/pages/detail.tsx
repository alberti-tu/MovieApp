import { View } from "react-native"

import { globalStyles } from "../styles/global"
import { useAppSelector } from "../services/store"
import { selectCatalogMoviesById } from "../data/catalog"
import MovieDetail from "../components/movie-detail/movie"

type IProps = {
  navigation: any
  route: any
}

const DetailPage = ({ navigation, route }: IProps): JSX.Element => {
  const data = useAppSelector(state => selectCatalogMoviesById(state, route.params.id))
  return (
    <View style={globalStyles.container}>
      <MovieDetail data={data} />
    </View>
  )
}

export default DetailPage