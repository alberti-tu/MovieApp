import React from 'react'

import { SafeAreaView, StatusBar, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import HomePage from './pages/home'
import DetailPage from './pages/detail'

import { persistor, store } from './services/store'
import { globalStyles } from './styles/global'
import { colors } from './styles/theme'
import { navigationHeaderOptions } from './constants/navigation'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <SafeAreaView style={globalStyles.container}>
          <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ ...navigationHeaderOptions, title: 'Movie App' }}
              />
              <Stack.Screen
                name="Profile"
                component={DetailPage}
                options={{ ...navigationHeaderOptions, title: 'Detail' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </PersistGate>
  )
}

export default App
