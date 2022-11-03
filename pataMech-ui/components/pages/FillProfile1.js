import React from 'react'
import { Image, Text,TouchableOpacity,View } from 'react-native'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'
import profile from '../../assets/Images/profile.png'
import PataButton from '../common/PataButton'
import { useNavigate } from 'react-router-native'

const FillProfile1 = ({driver}) => {
    const navigate=useNavigate()
  return (
    <View style={{flex:1,marginTop:20}}>
        <View style={{flex:0.05}}>
            <PataIcon iconName={"chevron-left"}
                        iconColor={colors.yellow}
                        iconSize={30}
                        onPress={()=>navigate(-1)}
            />
        </View>
        <View style={{flex:0.15,justifyContent:"center"}}>
            <Text style={{fontSize:30,fontWeight:fonts.bold,color:colors.black}}>
                Fill your profile.
            </Text>
        </View>
        <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:80,height:80,borderRadius:40,backgroundColor:colors.graylight}}>
                <Image source={profile} resizeMode={'contain'} style={{position:'absolute',bottom:0,right:0}}/>
            </View>
        </View>
        <View style={{flex:0.5,justifyContent:'space-evenly'}}>
            <PataInput placeholder={"Username"}
                        iconName={"account"}
            />
            <PataInput placeholder={"Phone Number"}
                        iconName={"phone"}
            />
            <PataInput placeholder={"Alternative Phone Number"}
                        iconName={"phone"}
            />
        </View>
        <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:fonts.light,color:colors.black,textAlign:'center',alignItems:'center',justifyContent:'center'}}>
            By signing up you are agreeing to our
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                    <Text style={{fontSize:12,fontWeight:fonts.medium,color:colors.yellow,textAlign:'center',textAlign:'center'}}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,fontWeight:fonts.light,color:colors.black,textAlign:'center'}}>and </Text>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                    <Text style={{fontSize:12,fontWeight:fonts.medium,color:colors.yellow,textAlign:'center',textAlign:'center'}}> Privacy Policy.</Text>
                </TouchableOpacity>
            </Text>
        </View>
        <View style={{flex:0.2,alignItems:'center',justifyContent:'space-evenly'}}>
            <PataButton buttonText={"Continue"}
                        to={driver?'/fillprofile2':'/fillprofile/centers'}
            />
        </View>
    </View>
  )
}

export default FillProfile1