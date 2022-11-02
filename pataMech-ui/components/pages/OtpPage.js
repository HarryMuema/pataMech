import React, {useEffect, useRef, useState} from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import otp from '../../assets/Images/otp.png'
import PataButton from '../common/PataButton'
import PataIcon from '../common/PataIcon'
import colors from '../config/colors'
import fonts from '../config/fonts'

const OtpPage = () => {
  const [{text1,text2,text3,text4},onChangeText] = useState("");
  const pin1=useRef()
  const pin2=useRef()
  const pin3=useRef()
  const pin4=useRef()
  useEffect(()=>{
    pin1.current.focus()
  })
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
        <View style={{flex:0.3,alignItems:'center',justifyContent:'space-around',marginTop:20}}>
            <Image source={otp} resizeMode={'cover'} style={{height:'80%',width:"80%"}}/>
        </View>
        <View style={{flex:0.15,justifyContent:'space-evenly',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:fonts.black,color:"#002D8B",flex:0.4,justifyContent:'center',textAlign:'center'}}>
                Enter OTP
            </Text>
            <View style={{alignItems:'center',justifyContent:'space-evenly',flex:0.6}}>
                <Text style={{fontSize:12,fontWeight:fonts.light,color:colors.black}}>
                    A 4 digit code has been send to 
                </Text>
                <Text style={{fontSize:12,fontWeight:fonts.medium,color:colors.orange}}>
                    +2547-92-***-*98
                </Text>
            </View>
        </View>
        <View style={{width:"70%",flex:0.2,alignSelf:'center',justifyContent:'center'}}>
            <View style={{justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',width:"100%"}}>
                <TextInput style={{backgroundColor:colors.lightyellow,borderWidth:1,justifyContent:"center",textAlign:'center',alignItems:'center',borderColor:colors.yellow,color:colors.orange,height:50,width:50,borderRadius:10}}
                            maxLength={1}
                            onChangeText={()=>{
                                        onChangeText
                                        if(text1!=''){
                                           pin2.current.focus()
                                        }
                                    }
                                }
                            value={text1}
                            ref={pin1}               
                />
                <TextInput style={{backgroundColor:colors.lightyellow,borderWidth:1,justifyContent:"center",textAlign:'center',alignItems:'center',borderColor:colors.yellow,color:colors.orange,height:50,width:50,borderRadius:10}}
                            maxLength={1}
                            onChangeText={()=>{
                                    onChangeText
                                    if(text2!=''){
                                        pin3.current.focus()
                                    }
                                }
                            }
                            value={text2}
                            ref={pin2}               
                />
                <TextInput style={{backgroundColor:colors.lightyellow,borderWidth:1,justifyContent:"center",textAlign:'center',alignItems:'center',borderColor:colors.yellow,color:colors.orange,height:50,width:50,borderRadius:10}}
                            maxLength={1}
                            onChangeText={()=>{
                                    onChangeText
                                    if(text3!=''){
                                        pin4.current.focus()
                                    }
                                }
                            }
                            value={text3}           
                            ref={pin3}               
                />
                <TextInput style={{backgroundColor:colors.lightyellow,borderWidth:1,justifyContent:"center",textAlign:'center',alignItems:'center',borderColor:colors.yellow,color:colors.orange,height:50,width:50,borderRadius:10}}
                            maxLength={1}
                            onChangeText={()=>{
                                    onChangeText
                                    if(text4!=''){
                                        // pin2.current.focus()
                                    }
                                }
                            }
                            value={text4}            
                            ref={pin4}               
                />
            </View>
        </View>
        <View style={{flex:0.05,justifyContent:'space-evenly',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:fonts.light,color:colors.black}}>
                Resend code in  
                <Text style={{fontSize:13,fontWeight:fonts.medium,color:colors.orange,paddingHorizontal:20}}>
                    52s
                </Text>
            </Text>
        </View>
        <View style={{flex:0.2,alignItems:'center',justifyContent:'space-evenly'}}>
            <PataButton buttonText={"Continue"}
            />
        </View>
    </View>
  )
}

export default OtpPage