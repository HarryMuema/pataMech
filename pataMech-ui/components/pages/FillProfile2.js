import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { useLocation, useNavigate } from 'react-router-native'
import PataButton from '../common/PataButton'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import { Formik } from 'formik'

const FillProfile2 = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const [id,setId]=useState('')
    
    useEffect(() => {
        const state=location.state
        const {id}=state
        setId(id)
    },[]);
    const [message,setMessage]=useState('')
    
    
    const handleSignUpDetails=async (credentials,setSubmitting)=>{
        const url='http://10.0.2.2:9000/api/v1/signup/details/driver'
        await axios.post(url,credentials).then((response)=>{
            const result=response.data
            const {message,data,error,errored}=result
            
            if(message!=="Driver details added"){
                handleMessage(errored)
                ToastAndroid.show(errored,ToastAndroid.SHORT)
            }else{
                handleMessage(message)
                ToastAndroid.show(message,ToastAndroid.SHORT)
                navigate('/congrats/newuser',{state:{data}})
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
                Fill your profile.
            </Text>
        </View>
        <Formik initialValues={{address1:'',address2:'',carmodel:'',carmake:'',carmodelyear:'',carplatenumber:''}}
                onSubmit={(values,{setSubmitting})=>{
                        setTimeout(()=>{
                            if(values.address1==''||values.address2==''||values.carmodel==''||values.carmake==''||values.carmodelyear==''||values.carplatenumber==''){
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
                    <View style={{flex:0.8,justifyContent:'space-evenly'}}>
                        <PataInput withIcon={false}
                                placeholder={'Address 1'}
                                onChangeText={handleChange('address1')}
                                onBlur={handleBlur('address1')}
                                value={values.address1}
                        />
                        <PataInput withIcon={false}
                                placeholder={'Address 2'}
                                onChangeText={handleChange('address2')}
                                onBlur={handleBlur('address2')}
                                value={values.address2}
                        />
                        <PataInput withIcon={false}
                                placeholder={'Car make'}
                                onChangeText={handleChange('carmake')}
                                onBlur={handleBlur('carmake')}
                                value={values.carmake}
                        />
                        <PataInput withIcon={false}
                                placeholder={'Car model'}
                                onChangeText={handleChange('carmodel')}
                                onBlur={handleBlur('carmodel')}
                                value={values.carmodel}
                        />
                        <PataInput withIcon={false}
                                placeholder={'Car plate number'}
                                onChangeText={handleChange('carplatenumber')}
                                onBlur={handleBlur('carplatenumber')}
                                value={values.carplatenumber}
                        />
                        <PataInput withIcon={false}
                                placeholder={'Car model year'}
                                onChangeText={handleChange('carmodelyear')}
                                onBlur={handleBlur('carmodelyear')}
                                value={values.carmodelyear}
                        />
                    </View>
                    <View style={{flex:0.2,justifyContent:'space-evenly',alignItems:'center'}}>
                        <PataButton buttonText={'Continue'}
                                    onPress={()=>handleSubmit()}
                        />
                    </View>
                </View>
            )}
        </Formik>
    </View>
  )
}

export default FillProfile2