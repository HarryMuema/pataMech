import React, { useState } from 'react'
import {Text, TouchableOpacity, View, ToastAndroid} from 'react-native'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import {RadioButton} from 'react-native-paper'
import PataButton from '../common/PataButton'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import axios  from 'axios'

const SignUpPage = () => {
    const [value,setValue]=useState('')
    const [message,setMessage]=useState('')
    const navigate=useNavigate()

    const handleSignUp=async (credentials,setSubmitting)=>{
        const url='http://10.0.2.2:9000/api/v1/signup'
        await axios.post(url,credentials).then((response)=>{
            const result=response.data
            const {message,payload,error,errored}=result
            
            if(payload==""){
                handleMessage(errored)
                ToastAndroid.show(errored,ToastAndroid.SHORT)
            }else{
                handleMessage(message)
                ToastAndroid.show(message,ToastAndroid.SHORT)
                navigate('/fillprofile',{state:{payload}})
            }
        }).catch(error=>{
            console.log(error)
            setSubmitting(false)
            handleMessage("An error occured. Check your network and try again")
            ToastAndroid.show(message,ToastAndroid.SHORT)
        })
    }

    const handleMessage=(message)=>{
        setMessage(message)
    }
  return (
    <View style={{flex:1,marginTop:20}}>
        <View style={{flex:0.05}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
                        onPress={()=>navigate(-1)}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Create your account.
            </Text>
        </View>
        <Formik initialValues={{email:'',password:''}}
                onSubmit={(values,{setSubmitting})=>{
                        setTimeout(()=>{
                            if(values.email==''||values.password==''){
                                ToastAndroid.show('Please fill all the fields',ToastAndroid.SHORT)
                                setSubmitting(false)
                            }else{
                                const role={"role":value}
                                const credentials={...role,...values}
                                handleSignUp(credentials,setSubmitting)
                            }
                        },1000)
                    }
                }   
        >
            {({handleChange,handleBlur,handleSubmit,values,isSubmitting})=>(
                <View style={{flex:0.8}}>
                    <View style={{flex:0.3,justifyContent:'space-evenly'}}>
                        <PataInput iconName={"at"}
                                    placeholder={"Email"}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                        />
                        <PataInput iconName={"lock"}
                                placeholder={"Password"}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                        />
                    </View>
                    <View style={{flexDirection:'row',flex:0.3,justifyContent:'space-between',alignItems:'center'}}>
                        <RadioButton.Group onValueChange={newValue=>setValue(newValue)} value={value} style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                                <RadioButton 
                                        value='mechanic'
                                        onValueChange={()=>setValue('mechanic')}
                                        color={colors.yellow}
                                        style={{width:"50%"}}
                                        />
                                <Text>As a mechanic</Text>
                                <RadioButton 
                                    value='driver'
                                    onValueChange={()=>setValue('driver')}
                                    color={colors.yellow}
                                    style={{width:"50%"}}
                                    />
                                <Text>As a driver</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                                <RadioButton 
                                    value='service center'
                                    // status={checked==='mechanic'?'checked':'unchecked'}
                                    onValueChange={()=>setValue('service center')}
                                    color={colors.yellow}
                                    style={{width:"50%"}}
                                    />
                                <Text>As a service center</Text>
                                    <RadioButton 
                                        value='parts dealer'
                                        // status={checked==='mechanic'?'checked':'unchecked'}
                                        onValueChange={()=>setValue('parts dealer')}
                                        color={colors.yellow}
                                        style={{width:"50%"}}
                                        />
                                        <Text>As a part dealer</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:"center"}}>
                                    <RadioButton 
                                        value='tow service'
                                        onValueChange={()=>setValue('tow service')}
                                        color={colors.yellow}
                                        style={{width:"50%"}}
                                    />
                                    <Text>As a tow service</Text>
                                    <RadioButton 
                                        value='agent'
                                        onValueChange={()=>setValue('agent')}
                                        color={colors.yellow}
                                        style={{width:"50%"}}
                                    />
                                    <Text>As an insurance agent</Text>
                            </View>
                        </RadioButton.Group>
                    </View>
                    <View style={{flex:0.3,width:"100%",justifyContent:'space-evenly',alignItems:'center'}}>
                        <PataButton height={60}
                                buttonText={"Sign up"}
                                withIcon={false}
                                onPress={()=>handleSubmit()}
                        />
                        <Text style={{fontSize:10,fontWeight:fonts.regular,color:colors.black,}}>
                            Already have an account?
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}
                                            onPress={()=>navigate('/login')}
                        >
                            <Text style={{fontSize:12,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Sign in</Text>
                        </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            )}
        </Formik>

    </View>
  )
}

export default SignUpPage