import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'

const PataButton = ({width,paddingHorizontal,paddingVertical,fontSize,fontWeight,onPress,buttonText}) => {
  return (
    <TouchableOpacity style={{
              paddingHorizontal:paddingHorizontal?paddingHorizontal:15,
              paddingVertical:paddingVertical?paddingVertical:15,
              justifyContent:'center',
              alignItems:"center",
              backgroundColor:colors.orange,
              borderRadius:20,
              width:width?width:"80%",
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
    </TouchableOpacity>
  )
}

export default PataButton