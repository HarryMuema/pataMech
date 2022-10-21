import React from 'react'
import { TextInput, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import fonts from '../config/fonts'

const PataInput = ({placeholder,iconName,height}) => {
  return (
    <View style={{flexDirection:'row',
                  alignItems:"center",
                  borderWidth:0.5,
                  borderColor:"#FBFBFB",
                  paddingHorizontal:10, 
                  width:"100%",
                  height:height?height:60,
                  borderRadius:10,
                  backgroundColor:"#DFE4EE",
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:1,
    }}>
        <MaterialCommunityIcons name={iconName} size={25} color={colors.graylight} style={{paddingHorizontal:20,}}/>
        <TextInput style={{fontSize:14,fontWeight:fonts.medium,height:40}}
                    placeholder={placeholder?placeholder:"enter a placeholder"}
        />
    </View>
  )
}

export default PataInput