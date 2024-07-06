import * as React from "react"

import { Image, Text, View } from "react-native"

import { castCardStyles } from "./cast.styles"
import { Cast } from "../../models/movies"

type IProps = {
  data: Cast
}

const CastCard = ({ data }: IProps): JSX.Element => {
  return (
    <View style={castCardStyles.container}>
      <Image
        alt={data.name}
        resizeMethod="resize"
        source={{ uri: data.profile_path }}
        style={castCardStyles.posterImage}
      />
      <Text>{data.name}</Text>
    </View>
  )
}

export default CastCard