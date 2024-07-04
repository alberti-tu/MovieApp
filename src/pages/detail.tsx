import { ScrollView, Text, View } from "react-native"

import { globalStyles } from "../styles/global"
import { useAppSelector } from "../services/store"
import { selectCatalogMoviesById } from "../data/catalog"

type IProps = {
  navigation: any
  route: any
}

const DetailPage = ({ navigation, route }: IProps): JSX.Element => {
  const data = useAppSelector(state => selectCatalogMoviesById(state, route.params.id))
  return (
    <View style={globalStyles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{data?.original_title}</Text>
      </ScrollView>
    </View>
  )
}

export default DetailPage