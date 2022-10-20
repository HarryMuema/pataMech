import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginPage = () => {
    const clearOnboarding=async()=>{
        try {
            await AsyncStorage.removeItem('@viewedOnboarding')
        } catch (error) {
            console.log('Error @clearOnboarding: ',error)
        }
    }
  return (
    <TouchableOpacity onPress={clearOnboarding}>
        <Text>clear onboarding</Text>
    </TouchableOpacity>
  )
}

export default LoginPage