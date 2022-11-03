import React, {useState,useEffect} from 'react';
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from './pages/LoginPage';
import OnBoardingPages from './pages/OnBoardingPages';


const Loading=()=>{
    return(
        <View>
          <ActivityIndicator size="large"/>
        </View>
    )
  }

const OneTimeOnboarding = () => {
    const [loading,setLoading]=useState(true)
    const [viewedOnboarding,setViewedOnboarding]=useState(false)

    const checkOnboarding=async()=>{
        try {
            const value=await AsyncStorage.getItem('@viewedOnboarding')
            if(value!==null){
                setViewedOnboarding(true)
            }
        } catch (error) {
            console.log('Error @checkOnboarding: ',error)
        }finally{
            setLoading(false)
        } 
    }

    useEffect(()=>{
        checkOnboarding()
    },[])
  return (
    <View style={{flex:1}}>
        {loading?<Loading/>:viewedOnboarding?<LoginPage/>:<OnBoardingPages/>}
    </View>
    
  )
}

export default OneTimeOnboarding