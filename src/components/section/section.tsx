import * as React from "react"

import { Text, View } from "react-native"

import { sectionStyles } from "./section.styles"

type IProps = {
  children?: React.ReactNode
  title?: string
}

const Section = ({ children, title }: IProps): JSX.Element => {
  return (
    <>
      <View style={sectionStyles.container}>
        <Text style={sectionStyles.header}>{title}</Text>
      </View>
      {children}
    </>
  )
}

export default Section