import React from 'react'
import { useFonts } from 'expo-font'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout
