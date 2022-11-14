import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import favicon from '../../assets/favicon.png'
import mechanic from '../../assets/Images/mechanic.png'
import autoshop from '../../assets/Images/autoshop.png'
import service from '../../assets/Images/service.png'
import fonts from '../config/fonts'
import { useLocation, useNavigate, useParams,  } from 'react-router-native'

const Home = ({route}) => {
  const navigate=useNavigate()
  const location=useLocation()
  const {User_Id,email,role_Id,username}=location.state

  return (
    <View style={{flex:1}}>
      <View style={{flex:0.2,backgroundColor:colors.orange,justifyContent:"flex-start",marginHorizontal:-20}}>
        <View style={{flexDirection:'row',flex:0.2,marginTop:40,justifyContent:'space-evenly',paddingHorizontal:20,alignItems:"center"}}>
          <View style={{width:50,height:50,backgroundColor:colors.yellow,borderRadius:25,padding:10,
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:10,
                  alignItems:"center",
                  justifyContent:"center"}}>
            <Image source={favicon} resizeMode={'contain'}/>
          </View>
          <View style={{}}>
            <Text style={{color:colors.white,textAlign:'center',fontSize:18,fontWeight:fonts.semibold}}>
              Hi {username}
            </Text>
            <Text style={{color:colors.white,textAlign:'center',fontSize:12,fontWeight:fonts.semibold}}>
              Pata specials
            </Text>
          </View>
          <View style={{width:"20%"}}/>
        </View>
      </View>
      <View style={{backgroundColor:colors.white,borderRadius:10,flex:0.18,marginTop:-100,justifyContent:'space-evenly'}}>
            <View style={{margin:20,flex:0.2}}>
               <Text style={{fontSize:14,fontWeight:fonts.bold,textAlign:'left'}}>
                Favourites
               </Text>
            </View>
            <View style={{flex:0.8,justifyContent:'space-evenly',flexDirection:'row',paddingHorizontal:10}}>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                  alignItems:'center',
                  flex:0.8,
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:10,width:100,height:80}}>
                  <Image source={mechanic} resizeMode={'contain'}/>
                </View>
                <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                  Get a mechanic
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                  alignItems:'center',
                  flex:0.8,
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:10,width:100,height:80}}>
                  <Image source={service} resizeMode={'contain'}/>
                </View>
                <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                  Service center
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                  alignItems:'center',
                  flex:0.8,
                  shadowColor:"#171717",
                  shadowOffset:{width:4,height:4},
                  shadowOpacity:0.25,
                  shadowRadius:1,
                  elevation:10,width:100,height:80}}>
                  <Image source={autoshop} resizeMode={'contain'}/>
                </View>
                <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                  Part dealer
                </Text>
              </TouchableOpacity>
            </View>
      </View>
      <View style={{flex:0.3}}>

      </View>
      <View style={{backgroundColor:colors.white,borderRadius:10,flex:0.32,marginTop:-100,justifyContent:'space-evenly'}}>
            <View style={{margin:20,flex:0.2}}>
               <Text style={{fontSize:14,fontWeight:fonts.bold,textAlign:'left'}}>
                Services
               </Text>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly'}}>
              <View style={{flex:0.8,justifyContent:'space-evenly',flexDirection:'row',paddingHorizontal:10}}>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={mechanic} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Get a mechanic
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={service} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Service center
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={autoshop} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Part dealer
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:0.8,justifyContent:'space-evenly',flexDirection:'row',paddingHorizontal:10}}>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={mechanic} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Get a mechanic
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={service} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Service center
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{backgroundColor:colors.lightyellow,borderRadius:10,justifyContent:'center',
                    alignItems:'center',
                    flex:0.8,
                    shadowColor:"#171717",
                    shadowOffset:{width:4,height:4},
                    shadowOpacity:0.25,
                    shadowRadius:1,
                    elevation:10,width:100,height:80}}>
                    <Image source={autoshop} resizeMode={'contain'}/>
                  </View>
                  <Text style={{fontSize:13,flex:0.2,fontWeight:fonts.regular,color:colors.orange,alignItems:'center'}}>
                    Part dealer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
      </View>
    </View>
  )
}

export default Home