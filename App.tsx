import React from 'react'

import { SafeAreaView, ScrollView, StatusBar } from 'react-native'

import { globalStyles } from './styles/global'
import { colors } from './styles/theme'

import Header from './components/header/header'

function App(): JSX.Element {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar
        backgroundColor={colors.statusBar}
        barStyle="light-content"
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
