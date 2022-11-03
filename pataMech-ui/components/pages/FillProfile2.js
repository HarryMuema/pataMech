import React from 'react'
import { Text, View } from 'react-native'
import PataButton from '../common/PataButton'
import PataIcon from '../common/PataIcon'
import PataInput from '../common/PataInput'
import colors from '../config/colors'
import fonts from '../config/fonts'

const FillProfile2 = () => {
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
        <View style={{flex:0.8,justifyContent:'space-evenly'}}>
            <PataInput withIcon={false}
                    placeholder={'Address 1'}
            />
            <PataInput withIcon={false}
                    placeholder={'Address 2'}
            />
            <PataInput withIcon={false}
                    placeholder={'Car make'}
            />
            <PataInput withIcon={false}
                    placeholder={'Car model'}
            />
            <PataInput withIcon={false}
                    placeholder={'Car plate number'}
            />
            <PataInput withIcon={false}
                    placeholder={'Car model year'}
            />
        </View>
        <View style={{flex:0.2,justifyContent:'space-evenly',alignItems:'center'}}>
            <PataButton buttonText={'Continue'}
                        to={'/congrats/newuser'}
            />
        </View>
    </View>
  )
}

export default FillProfile2