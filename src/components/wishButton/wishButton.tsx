import * as React from "react"

import { Text, TouchableOpacity } from "react-native"

import { wishButtonStyles } from "./wishButton.styles"

type IProps = {
  onPress?: () => void
}

const WishButton = ({ onPress }: IProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={() => onPress?.()} style={wishButtonStyles.container}>
      <Text style={wishButtonStyles.button}>Wish list</Text>
    </TouchableOpacity>
  )
}

export default WishButton