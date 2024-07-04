import { ScrollView, Text, View } from "react-native"

import { globalStyles } from "../styles/global"

type IProps = {
  navigation: any
  route: any
}

const DetailPage = ({ navigation, route }: IProps): JSX.Element => {
  return (
    <View style={globalStyles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>This is {route.params.name}'s profile</Text>
      </ScrollView>
    </View>
  )
}

export default DetailPage