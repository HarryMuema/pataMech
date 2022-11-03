import React from 'react'
import { Image, Text, View } from 'react-native'
import colors from '../config/colors'
import enableLocation from '../../assets/Images/enableLocation.png'
import fonts from '../config/fonts'
import PataButton from '../common/PataButton'

const EnableLocationPage = () => {
  return (
    <View style={{flex:1,marginHorizontal:-20,justifyContent: 'center',alignItems:'center',backgroundColor:"rgba(25, 26, 31, 0.3)",}}>
        <View style={{backgroundColor:colors.white,height:"65%",padding:20,width:"90%",borderRadius:20,alignItems:'center',justifyContent:'space-evenly'}}>
            <Image source={enableLocation} resizeMode={'contain'} style={{}}/>
            <View style={{justifyContent:'center',alignItems:'center',width:"100%"}}>
                <Text style={{fontSize:24,fontWeight:fonts.bold,color:colors.black}}>Enable location</Text>
                <Text style={{fontSize:13,fontWeight:fonts.regular,color:colors.black,textAlign:'center',width:"80%",marginTop:40}}>We need access to your location to be able to use this service.</Text>
            </View>
            <PataButton buttonText={"Enable Location"}
                        backgroundColor={colors.yellow}
                        to={'/home'}
                        
            />
            <PataButton buttonText={"Not now"}
                        backgroundColor={colors.lightyellow}
                        to={'/home'}
            />
        </View>

    </View>
  )
}

export default EnableLocationPage