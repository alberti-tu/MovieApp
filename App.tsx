import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { navigationHeaderOptions } from './src/constants/navigation'
import HomePage from './src/pages/home'
import DetailPage from './src/pages/detail'
import { persistor, store } from './src/services/store'
import { globalStyles } from './src/styles/global'
import { colors } from './src/styles/theme'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <SafeAreaView style={globalStyles.container}>
          <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={navigationHeaderOptions}>
              <Stack.Screen name="Home" component={HomePage} options={{ title: 'Movie App' }} />
              <Stack.Screen name="MovieDetail" component={DetailPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </PersistGate>
  )
}

export default App
