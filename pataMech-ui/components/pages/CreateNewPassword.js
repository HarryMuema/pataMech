import React from 'react'
import { Image, Text, View } from 'react-native'
import PataIcon from '../common/PataIcon'
import colors from '../config/colors'
import fonts from '../config/fonts'
import newpassword from '../../assets/Images/newpassword.png'
import PataButton from '../common/PataButton'
import PataInput from '../common/PataInput'
import { useNavigate } from 'react-router-native'

const CreateNewPassword = () => {
    const navigate=useNavigate()
  return (
    <View style={{flex:1,marginTop:20}}>
        <View style={{flex:0.05,flexDirection:'row',alignItems:'center'}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
                        onPress={()=>navigate(-1)}
            />
            <Text style={{fontSize:24,fontWeight:fonts.bold,color:colors.black,marginLeft:20}}>
                Create new password.
            </Text>
        </View>
        <View style={{flex:0.35,alignItems:'center',justifyContent:'space-around',marginTop:20}}>
            <Image source={newpassword} resizeMode={'cover'} style={{height:'100%',width:"90%"}}/>
        </View>
        <View style={{flex:0.15,justifyContent:'space-evenly',alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:fonts.semibold,textAlign:'center',color:colors.black,justifyContent:'space-evenly',textAlign:'center'}}>
                Create your new password
            </Text>
        </View>
        <View style={{flex:0.25,justifyContent:'space-evenly'}}>
            <PataInput placeholder={'New password'}
            />
            <PataInput placeholder={'Confirm new password'}
            />
        </View>
        <View style={{flex:0.15,alignItems:'center',justifyContent:'space-evenly'}}>
            <PataButton buttonText={"Continue"}
                        to={'/congrats/password'}
            />
        </View>
    </View>
  )
}

export default CreateNewPassword