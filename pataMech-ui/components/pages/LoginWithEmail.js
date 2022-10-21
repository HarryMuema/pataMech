import React from 'react'
import { Text, View,TouchableOpacity, Image } from 'react-native'
import PataButton from '../common/PataButton'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import facebook from '../../assets/Images/facebook.png'
import google from '../../assets/Images/google.png'
import PataTile from '../common/PataTile'

const LoginWithEmail = () => {
  return (
    <View style={{marginTop:20,flex:1}}>
        <View style={{flex:0.05}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Login into your account.
            </Text>
        </View>
        <View style={{flex:0.3,justifyContent:'space-evenly'}}>
            <PataInput placeholder={"Email"}
                        iconName={"at"}
            />
            <PataInput placeholder={"Password"}
                        iconName={"lock"}
            />
        </View>
        <View style={{flex:0.2,width:"100%",justifyContent:'space-evenly',alignItems:'center'}}>
            <PataButton height={50}
                        buttonText={"Sign in"}
                        withIcon={false}
            />
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                <Text style={{fontSize:12,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Forgot password ?</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flex:0.02,justifyContent:'space-between',alignItems:'center',marginTop:10}}>
          <View style={{height:1.2,backgroundColor:colors.grayoutline,width:"35%"}}/>
          <Text style={{color:"#54575D",fontSize:12,fontWeight:fonts.regular,width:"30%",alignItems:'center',textAlign:'center'}}>or continue with</Text>
          <View style={{height:1.2,backgroundColor:colors.grayoutline,width:"35%"}}/>
        </View>
        <View style={{flex:0.18,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <PataTile imageName={facebook}/>
            <PataTile imageName={google}/>
        </View>
        <View style={{flex:0.05,justifyContent:'center',alignItems:"center"}}>
            <Text style={{fontSize:10,fontWeight:fonts.regular,color:colors.black,}}>
                Don't have an account?
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                    <Text style={{fontSize:10,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Sign up</Text>
                </TouchableOpacity>
            </Text>
        </View>
    </View>
  )
}

export default LoginWithEmail