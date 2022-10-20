import React from 'react'
import { View, useWindowDimensions, Image, Text } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'


const PagerView = ({item}) => {
    const {width,height}=useWindowDimensions()
  return (
    <View style={{width:width-40,height:"80%",justifyContent:"center"}}>
        <View style={{width:"100%",height:"95%",borderRadius:20}}>
            <Image source={item.image} resizeMode={'cover'} style={{width:"100%",height:"105%",borderRadius:20}}/>
            <Text style={{fontWeight:fonts.semibold,fontSize:20,textAlign:'center',color:colors.black,width:"100%",marginTop:40}}>
                {item.text}
            </Text>
        </View>
    </View>
  )
}

export default PagerView