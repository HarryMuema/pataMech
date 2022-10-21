import React from 'react'
import {TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
const PataIcon = ({iconColor,iconName,iconSize,iconType}) => {
  return (
    <TouchableOpacity style={{width:iconType==="circle"?30:35,
                  height:iconType==="circle"?30:35,
                  borderRadius:iconType==="circle"?30:5,
                  backgroundColor:colors.white,
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:10,
                  alignItems:"center",
                  justifyContent:"center"
                }}>
        <MaterialCommunityIcons name={iconName} size={iconSize?iconSize:25} color={iconColor}/>
      </TouchableOpacity>
  )
}

export default PataIcon