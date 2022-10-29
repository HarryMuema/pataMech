import React, { useState } from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import {RadioButton} from 'react-native-paper'
import PataButton from '../common/PataButton'

const SignUpPage = () => {
    const [value,setValue]=useState('mechanic')
  return (
    <View style={{flex:1,marginTop:20}}>
        <View style={{flex:0.05}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Create your account.
            </Text>
        </View>
        <View style={{flex:0.3,justifyContent:'space-evenly'}}>
            <PataInput iconName={"at"}
                        placeholder={"Email"}
            />
            <PataInput iconName={"lock"}
                    placeholder={"Password"}
            />
        </View>
        <View style={{flexDirection:'row',flex:0.2,justifyContent:'space-between',alignItems:'center'}}>
            <RadioButton.Group onValueChange={newValue=>setValue(newValue)} value={value} style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                    <RadioButton 
                            value='Mechanic'
                            onValueChange={()=>setValue('mechanic')}
                            color={colors.yellow}
                            style={{width:"50%"}}
                            />
                    <Text>As a mechanic</Text>
                    <RadioButton 
                        value='Driver'
                        onValueChange={()=>setValue('Driver')}
                        color={colors.yellow}
                        style={{width:"50%"}}
                        />
                    <Text>As a driver</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                    <RadioButton 
                        value='Service center'
                        // status={checked==='mechanic'?'checked':'unchecked'}
                        onValueChange={()=>setValue('Service center')}
                        color={colors.yellow}
                        style={{width:"50%"}}
                        />
                    <Text>As a service center</Text>
                        <RadioButton 
                            value='Part dealers'
                            // status={checked==='mechanic'?'checked':'unchecked'}
                            onValueChange={()=>setValue('Part dealer')}
                            color={colors.yellow}
                            style={{width:"50%"}}
                            />
                            <Text>As a part dealer</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:"center"}}>
                        <RadioButton 
                            value='Tow service'
                            onValueChange={()=>setValue('tow service')}
                            color={colors.yellow}
                            style={{width:"50%"}}
                        />
                        <Text>As a tow service</Text>
                </View>
            </RadioButton.Group>
        </View>
        <View style={{flex:0.3,width:"100%",justifyContent:'space-evenly',alignItems:'center'}}>
            <PataButton height={60}
                    buttonText={"Sign up"}
                    withIcon={false}
            />
            <Text style={{fontSize:10,fontWeight:fonts.regular,color:colors.black,}}>
                Already have an account?
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                <Text style={{fontSize:12,fontWeight:fonts.bold,color:colors.yellow,textAlign:'center',}}>Sign in</Text>
            </TouchableOpacity>
            </Text>
      </View>

    </View>
  )
}

export default SignUpPage