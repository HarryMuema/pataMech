import React from 'react'
import { Image, Text, View } from 'react-native'
import colors from '../config/colors'
import congrats from '../../assets/Images/congrats.png'
import fonts from '../config/fonts'
import PataButton from '../common/PataButton'
import { ActivityIndicator } from 'react-native-paper'

const CongratsPage = () => {
  return (
    <View style={{flex:1,marginHorizontal:-20,justifyContent: 'center',alignItems:'center',backgroundColor:"rgba(25, 26, 31, 0.3)",}}>
        <View style={{backgroundColor:colors.white,height:"65%",padding:20,width:"90%",borderRadius:20,alignItems:'center',justifyContent:'space-evenly'}}>
            <Image source={congrats} resizeMode={'contain'} style={{}}/>
            <View style={{justifyContent:'center',alignItems:'center',width:"100%"}}>
                <Text style={{fontSize:24,fontWeight:fonts.bold,color:colors.black}}>Congratulations</Text>
                <Text style={{fontSize:13,fontWeight:fonts.regular,color:colors.black,textAlign:'center',width:"80%",marginTop:40}}>
                    Your account is ready to use. You will be redirected to the home page in a few seconds
                </Text>
            </View>
            <View style={{flex:0.2,justifyContent:'space-evenly',alignItems:'center'}}>
                <ActivityIndicator size={'large'} color={colors.yellow}/>
            </View>
        </View>

    </View>
  )
}

export default CongratsPage