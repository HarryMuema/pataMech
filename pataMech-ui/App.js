import React, {useState,useEffect} from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View,StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from './components/config/colors'
import LoginPage from './components/pages/LoginPage';
import OnBoardingPages from './components/pages/OnBoardingPages';

const Loading=()=>{
  return(
      <View>
        <ActivityIndicator size="large"/>
      </View>
  )
}

export default function App() {
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
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,marginHorizontal:20}}>
        {loading?<Loading/>:viewedOnboarding?<LoginPage/>:<OnBoardingPages/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.bgcolor,
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight:10,
  },
});
