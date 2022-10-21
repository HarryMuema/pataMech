import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors'

const PataTile = ({imageName}) => {
  return (
    <TouchableOpacity style={{backgroundColor:colors    .white,
                        width:60,
                        height:60,      
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center',
                        shadowColor:"#171717",
                        shadowOffset:{width:4,height:4},
                        shadowOpacity:0.25,
                        shadowRadius:1.5,
                        elevation:20,              
                    }}
    >
        <Image source={imageName} resizeMode={'contain'} style={{width:30,height:30}}/>
    </TouchableOpacity>
  )
}

export default PataTile