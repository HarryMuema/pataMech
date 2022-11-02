import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import PataIcon from '../common/PataIcon'
import colors from '../config/colors'
import fonts from '../config/fonts'
import forgotPassword from '../../assets/Images/forgotPassword.png'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PataButton from '../common/PataButton'

const ForgotPassword = () => {
  return (
    <View style={{flex:1,marginTop:20}}>
        <View style={{flex:0.05,flexDirection:'row',alignItems:'center'}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
            />
            <Text style={{fontSize:24,fontWeight:fonts.bold,color:colors.black,marginLeft:20}}>
                Forgot Password.
            </Text>
        </View>
        <View style={{flex:0.3,alignItems:'center',marginTop:20}}>
            <Image source={forgotPassword} resizeMode={'cover'} style={{width:'60%',height:'100%'}}/>
        </View>
        <View style={{flex:0.15,justifyContent:'space-evenly',alignItems:'center'}}>
            <Text style={{fontSize:11,fontWeight:fonts.regular,color:colors.black}}>
                Select which contact to use to reset your password your password
            </Text>
        </View>
        <View style={{flex:0.25,justifyContent:'space-evenly',alignItems:'center'}}>
            <TouchableOpacity style={{width:'100%',height:60,borderWidth:1,borderColor:colors.yellow,borderRadius:10,flexDirection:'row',backgroundColor:colors.white,alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:50,height:50,backgroundColor:colors.lightyellow,borderRadius:30,marginLeft:20,alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name='at' color={colors.yellow} size={30}/>
                </View>
                <View style={{width:'75%',justifyContent:'space-evenly'}}>
                    <Text style={{color:colors.graylight,fontSize:10,fontWeight:fonts.medium}}>
                        Via email
                    </Text>
                    <Text style={{color:colors.black,fontSize:14,fontWeight:fonts.regular}}>
                        jo*******oe@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%',height:60,borderWidth:1,borderColor:colors.yellow,borderRadius:10,flexDirection:'row',backgroundColor:colors.white,alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:50,height:50,backgroundColor:colors.lightyellow,borderRadius:30,marginLeft:20,alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name='email-newsletter' color={colors.yellow} size={30}/>
                </View>
                <View style={{width:'75%',justifyContent:'space-evenly'}}>
                    <Text style={{color:colors.graylight,fontSize:10,fontWeight:fonts.medium}}>
                        Via sms
                    </Text>
                    <Text style={{color:colors.black,fontSize:14,fontWeight:fonts.regular}}>
                        +2547-92-***-*98
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{flex:0.2,alignItems:'center',justifyContent:'space-evenly'}}>
            <PataButton buttonText={"Continue"}
            />
        </View>
    </View>
  )
}

export default ForgotPassword