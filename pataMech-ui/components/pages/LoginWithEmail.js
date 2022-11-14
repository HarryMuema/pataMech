import React, { useEffect, useState, useRef } from 'react'
import { Text, View,TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import PataButton from '../common/PataButton'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import facebook from '../../assets/Images/facebook.png'
import google from '../../assets/Images/google.png'
import PataTile from '../common/PataTile'
import { useLocation, useNavigate } from 'react-router-native'
import { Formik } from 'formik';

//Api client
import axios from 'axios'

const LoginWithEmail = () => {
    const navigate=useNavigate()
    const [message,setMessage]=useState()
    const [messageType,setMessageType]=useState()

    const handleLoginWithEmail=async (credentials,setSubmitting)=>{
        handleMessage(null)
        const url='http://10.0.2.2:9000/api/v1/signin'
    
        await axios.post(url,credentials).then((response)=>{
            const result=response.data
            const {message,payload,error,errored}=result

            if(message!=="Logged in successfully"){
                handleMessage(error,"failed")
                ToastAndroid.show(error,ToastAndroid.SHORT)
                }else{
                    handleMessage(message,"success")
                    ToastAndroid.show(message,ToastAndroid.SHORT)
                    navigate('/home',{state:{...payload}})
                }
                setSubmitting(false)
        }).catch(error=>{
            console.log(error)
            setSubmitting(false)
            handleMessage("An error occured. Check your network and try again")
            ToastAndroid.show(message,ToastAndroid.SHORT)
        })
    }

    const handleMessage=(message,type='failed')=>{
        setMessage(message)
        setMessageType(type)
    }

  return (
    <View style={{marginTop:20,flex:1}}>
        <View style={{flex:0.05}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
                        onPress={()=>navigate(-1)}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Login into your account.
            </Text>
        </View>
        <Formik initialValues={{email:'',password:''}}
                onSubmit={(values,{setSubmitting})=>{
                        setTimeout(()=>{
                            if(values.email==''||values.password==''){
                                handleMessage('Please fill all the fields')
                                ToastAndroid.show('Please fill all the fields',ToastAndroid.SHORT)
                                setSubmitting(false)
                            }else{
                                handleLoginWithEmail(values,setSubmitting)
                            }
                        },1000)
                    }
                }   
        >
            {({handleChange,handleBlur,handleSubmit,values,isSubmitting})=>(
            <View style={{flex:0.5,}}>
                <View style={{flex:0.8,justifyContent:'space-evenly'}}>
                    <PataInput placeholder={"Email"}
                                iconName={"at"}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                    />
                    <PataInput placeholder={"Password"}
                                iconName={"lock"}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                    />
                </View>
                <View style={{flex:0.3,width:"100%",justifyContent:'space-evenly',alignItems:'center'}}>
                    {!isSubmitting && <PataButton height={50}
                                buttonText={"Sign in"}
                                withIcon={false}
                                type={messageType}
                                onPress={()=>{
                                        handleSubmit()
                                    }
                                }
                    />}
                    {isSubmitting && 
                        <View style={{
                            paddingHorizontal:15,
                            paddingVertical:15,
                            justifyContent:'center',
                            alignItems:"center",
                            underlayColor:colors.black,
                            activeOpacity:1,
                            backgroundColor:colors.orange,
                            borderRadius:20,
                            width:"80%",
                            height:50,
                            shadowColor:"#171717",
                            shadowOffset:{width:4,height:4},
                            shadowOpacity:0.25,
                            shadowRadius:1,
                            elevation:0,
                            }}
                        >
                            <ActivityIndicator size={'large'} color={colors.black}/>
                        </View>
                    }
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}
                                        onPress={()=>navigate('/forgotpassword')}
                    >
                        <Text style={{fontSize:12,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Forgot password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )}
        </Formik>
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
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}
                                onPress={()=>navigate('/signup')}
                >
                    <Text style={{fontSize:10,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Sign up</Text>
                </TouchableOpacity>
            </Text>
        </View>
    </View>
  )
}

export default LoginWithEmail