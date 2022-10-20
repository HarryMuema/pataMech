import React from 'react'
import { View,useWindowDimensions,Animated } from 'react-native'
import colors from '../config/colors'

const Paginator = ({data,scrollX}) => {
    const {width}=useWindowDimensions()
  return (
    <View style={{flexDirection:"row",height:60,alignItems:"center"}}>
        {data.map((_,i)=>{
            const inputRange=[(i-1)*width,i*width,(i+1)*width]
            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange:[7,20,7],
                extrapolate:'clamp',
            })
            const opacity=scrollX.interpolate({
                inputRange,
                outputRange:[0.3,1,0.3],
                extrapolate:"clamp",
            })
            return <Animated.View style={{height:7,width:dotWidth,borderRadius:5,backgroundColor:colors.yellow,opacity,marginRight:5}} key={i.toString()}/>
        })} 
    </View>
  )
}

export default Paginator