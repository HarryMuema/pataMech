import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View,StatusBar } from 'react-native';
import { NativeRouter, Routes, Route, useLocation } from 'react-router-native'
import colors from './components/config/colors'
import LoginPage from './components/pages/LoginPage';
import LoginWithEmail from './components/pages/LoginWithEmail';
import EnableLocationPage from './components/pages/EnableLocationPage';
import SignUpPage from './components/pages/SignUpPage';
import FillProfile1 from './components/pages/FillProfile1';
import FillProfile2 from './components/pages/FillProfile2';
import FillProfile2Centers from './components/pages/FillProfile2Centers';
import CongratsPage from './components/pages/CongratsPage';
import ForgotPassword from './components/pages/ForgotPassword';
import OtpPage from './components/pages/OtpPage';
import CreateNewPassword from './components/pages/CreateNewPassword';
import OneTimeOnboarding from './components/OneTimeOnboarding';
import Home from './components/pages/Home';
import MapsView from './components/common/MapsView';



export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <View style={{flex:1,marginHorizontal:20}}>
          {/* <Routes>
              <Route path="/" element={<OneTimeOnboarding/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/loginwithemail" element={<LoginWithEmail/>}/>
              <Route path="/enablelocation" element={<EnableLocationPage/>}/>
              <Route path="/forgotpassword" element={<ForgotPassword/>}/>
              <Route path="/otp" element={<OtpPage/>}/>
              <Route path="/newpassword" element={<CreateNewPassword/>}/>
              <Route path="/congrats/password" element={<CongratsPage forgotPassword={true}/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/fillprofile" element={<FillProfile1/>}/>
              <Route path='/fillprofile/driver' element={<FillProfile2/>}/>
              <Route path="/fillprofile/centers" element={<FillProfile2Centers/>}/>
              <Route path="/congrats/newuser" element={<CongratsPage forgotPassword={false}/>}/>
              <Route path="/home" element={<Home/>}/>
          </Routes> */}
          <MapsView/>
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.bgcolor,
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight:10,
  },
});
