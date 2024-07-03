import { Text, View } from "react-native"

import { headerStyles } from './header.styles'

const Header = (): JSX.Element => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Movie App</Text>
    </View>
  )
}

export default Header