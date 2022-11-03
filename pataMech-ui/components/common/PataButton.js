import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Link } from 'react-router-native'

const PataButton = ({to,width,paddingHorizontal,iconName,iconColor,paddingVertical,fontSize,fontWeight,onPress,withIcon,buttonText,backgroundColor,elevation,height}) => {
  return (
    withIcon==false?
    <Link to={to} style={{
              paddingHorizontal:paddingHorizontal?paddingHorizontal:15,
              paddingVertical:paddingVertical?paddingVertical:15,
              justifyContent:'center',
              alignItems:"center",
              underlayColor:colors.black,
              activeOpacity:1,
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
    </Link>:
    <Link to={to} style={{
              paddingHorizontal:paddingHorizontal?paddingHorizontal:15,
              paddingVertical:paddingVertical?paddingVertical:15,
              justifyContent:'center',
              alignItems:"center",
              underlayColor:colors.black,
              activeOpacity:1,
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
    </Link>
  )
}

export default PataButton