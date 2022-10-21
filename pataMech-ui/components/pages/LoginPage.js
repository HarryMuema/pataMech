import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import login1 from "../../assets/Images/login1.png";
import fonts from '../config/fonts'
import colors from '../config/colors'
import PataButton from "../common/PataButton";

const LoginPage = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding: ", error);
    }
  };
  return (
    <View style={{ flex: 1,alignItems:"center", }}>
      <View style={{flex:0.4,width:"100%",alignItems:"center"}}>
        <Image source={login1} resizeMode={"cover"} style={{width:"100%",height:"80%",borderRadius:20}} />
        <Text style={{fontWeight:fonts.semibold,fontSize:24,color:colors.black,marginTop:20}}>Lets get you in</Text>
      </View>
      <View style={{flex:0.28,width:"100%",marginTop:20,justifyContent:'space-evenly'}}>
        <View>
          <PataButton width={"100%"} 
                      backgroundColor={colors.white}
                      elevation={10}
                      height={60}
                      buttonText={"Continue with facebook"}
                      iconColor={colors.blue}
                      iconName={"facebook"}
                      fontSize={14}
                      fontWeight={fonts.regular}
          />
        </View>
        <View style={{}}>
          <PataButton width={"100%"} 
                      backgroundColor={colors.white}
                      elevation={10}
                      height={60}
                      buttonText={"Continue with google"}
                      iconColor={"#e74d46"}
                      iconName={"google"}
                      fontSize={14}
                      fontWeight={fonts.regular}
          />
        </View>
      </View>
      <View style={{flexDirection:'row',flex:0.02,justifyContent:'space-between',alignItems:'center',marginTop:10}}>
          <View style={{height:1.2,backgroundColor:colors.grayoutline,width:"45%"}}/>
          <Text style={{color:"#54575D",fontSize:12,fontWeight:fonts.regular,width:"10%",alignItems:'center',textAlign:'center'}}>or</Text>
          <View style={{height:1.2,backgroundColor:colors.grayoutline,width:"45%"}}/>
      </View>
      <View style={{flex:0.3,width:"100%",justifyContent:'space-evenly',alignItems:'center'}}>
        <PataButton height={60}
                    buttonText={"Sign in with password "}
                    withIcon={false}
        />
        <Text style={{fontSize:10,fontWeight:fonts.regular,color:colors.black,}}>
          Don't have an account?
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
            <Text style={{fontSize:12,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;


      //  <TouchableOpacity onPress={clearOnboarding}>
      //    <Text>clear onboarding</Text>
      //  </TouchableOpacity>