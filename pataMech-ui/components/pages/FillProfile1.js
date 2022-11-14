import React, { useEffect, useState } from 'react'
import { Image, Text,TouchableOpacity,View, ToastAndroid } from 'react-native'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import profile from '../../assets/Images/profile.png'
import PataButton from '../common/PataButton'
import { useLocation, useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import axios from 'axios'

const FillProfile1 = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const [id,setId]=useState('')
    const [role,setRole]=useState('')

    useEffect(() => {
        const state=location.state.payload
        const {role,userId}=state
        setId(userId)
        setRole(role)
    },[]);
    const [message,setMessage]=useState('')
    
    
    const handleSignUpDetails=async (credentials,setSubmitting)=>{
        const url='http://10.0.2.2:9000/api/v1/signup/details'
        await axios.post(url,credentials).then((response)=>{
            const result=response.data
            const {message,id,error,errored}=result
            
            if(message!=="Names added"){
                handleMessage(errored)
                ToastAndroid.show(errored,ToastAndroid.SHORT)
            }else{
                handleMessage(message)
                ToastAndroid.show(message,ToastAndroid.SHORT)
                if(role==1){
                    navigate('/fillprofile/driver',{state:{id}})
                }else{
                    navigate('/fillprofile/centers',{state:{id}})
                }
                
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
                        onPress={()=>navigate(-2)}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Fill your profile.
            </Text>
        </View>
        <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:80,borderRadius:40,backgroundColor:colors.graylight}}>
                <Image source={profile} resizeMode={'contain'} style={{position:'absolute',bottom:0,right:0}}/>
            </View>
        </View>
        <Formik initialValues={{firstname:'',lastname:'',username:'',phonenumber:'',altphonenumber:''}}
                onSubmit={(values,{setSubmitting})=>{
                        setTimeout(()=>{
                            if(values.firstname==''||values.lastname==''||values.username==''||values.phonenumber==''||values.altphonenumber==''){
                                ToastAndroid.show('Please fill all the fields',ToastAndroid.SHORT)
                                setSubmitting(false)
                            }else{
                                const role={"userId":id}
                                const credentials={...role,...values}
                                handleSignUpDetails(credentials,setSubmitting)
                            }
                        },1000)
                    }
                }   
        >
            {({handleChange,handleBlur,handleSubmit,values,isSubmitting})=>(
                <View style={{flex:0.8}}>
                    <View style={{flex:0.7,justifyContent:'space-evenly'}}>
                        <PataInput placeholder={"First name"}
                                    iconName={"account"}
                                    onChangeText={handleChange('firstname')}
                                    onBlur={handleBlur('firstname')}
                                    value={values.firstname}
                        />
                        <PataInput placeholder={"Last name"}
                                    iconName={"account"}
                                    onChangeText={handleChange('lastname')}
                                    onBlur={handleBlur('lastname')}
                                    value={values.lastname}
                        />
                        <PataInput placeholder={"Username"}
                                    iconName={"account"}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                        />
                        <PataInput placeholder={"Phone Number"}
                                    iconName={"phone"}
                                    onChangeText={handleChange('phonenumber')}
                                    onBlur={handleBlur('phonenumber')}
                                    value={values.phonenumber}
                        />
                        <PataInput placeholder={"Alternative Phone Number"}
                                    iconName={"phone"}
                                    onChangeText={handleChange('altphonenumber')}
                                    onBlur={handleBlur('altphonenumber')}
                                    value={values.altphonenumber}
                        />
                    </View>
                    <View style={{flex:0.12,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:12,fontWeight:fonts.light,color:colors.black,textAlign:'center',alignItems:'center',justifyContent:'center'}}>
                        By signing up you are agreeing to our
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                                <Text style={{fontSize:12,fontWeight:fonts.medium,color:colors.yellow,textAlign:'center',textAlign:'center'}}>Terms & Conditions</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:10,fontWeight:fonts.light,color:colors.black,textAlign:'center'}}>and </Text>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                                <Text style={{fontSize:12,fontWeight:fonts.medium,color:colors.yellow,textAlign:'center',textAlign:'center'}}> Privacy Policy.</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={{flex:0.15,alignItems:'center',justifyContent:'space-evenly'}}>
                        <PataButton buttonText={"Continue"}
                                    onPress={()=>handleSubmit()}
                        />
                    </View>
                </View>
            )}
        </Formik>
    </View>
  )
}

export default FillProfile1