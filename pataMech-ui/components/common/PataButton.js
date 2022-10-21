import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const PataButton = ({width,paddingHorizontal,iconName,iconColor,paddingVertical,fontSize,fontWeight,onPress,withIcon,buttonText,backgroundColor,elevation,height}) => {
  return (
    withIcon==false?
    <TouchableOpacity style={{
              paddingHorizontal:paddingHorizontal?paddingHorizontal:15,
              paddingVertical:paddingVertical?paddingVertical:15,
              justifyContent:'center',
              alignItems:"center",
              backgroundColor:backgroundColor?backgroundColor:colors.orange,
              borderRadius:20,
              width:width?width:"80%",
              height:height?height:50,
              shadowColor:"#171717",
              shadowOffset:{width:4,height:4},
              shadowOpacity:0.25,
              shadowRadius:1,
              elevation:elevation?elevation:0,
              }}
              onPress={onPress}
    >
        <Text style={{
              fontWeight:fontWeight?fontWeight:fonts.bold,
              fontSize:fontSize?fontSize:16,
              }}
        >
          {buttonText}
        </Text>
    </TouchableOpacity>:
    <TouchableOpacity style={{
              paddingHorizontal:paddingHorizontal?paddingHorizontal:15,
              paddingVertical:paddingVertical?paddingVertical:15,
              justifyContent:'center',
              alignItems:"center",
              backgroundColor:backgroundColor?backgroundColor:colors.orange,
              borderRadius:20,
              width:width?width:"80%",
              height:height?height:50,
              shadowColor:"#171717",
              shadowOffset:{width:4,height:4},
              shadowOpacity:0.25,
              shadowRadius:1,
              elevation:elevation?elevation:0,
              }}
              onPress={onPress}
    >
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
          <MaterialCommunityIcons name={iconName} size={30} color={iconColor} style={{height:40,marginTop:8,justifyContent:"center",alignItems:'center'}}/>
          <Text style={{fontWeight:fontWeight?fontWeight:fonts.bold,fontSize:fontSize?fontSize:16,paddingHorizontal:20,marginTop:18,justifyContent:"center",textAlign:'center',alignItems:'center',height:40}}>
            {buttonText}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default PataButton