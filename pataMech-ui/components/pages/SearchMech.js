import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapsView from '../common/MapsView'
import colors from '../config/colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from '../../env'




const SearchMech = () => {
    const [coordinates,setCoordinates]=useState()

    const InputAutoComplete=({placeholder,onPlaceSelected,})=>{
        return(
          <>
            <GooglePlacesAutocomplete styles={{textInput:styles.input}}
                            placeholder={placeholder || ""}
                            fetchDetails
                            onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    // onPlaceSelected(details)
                                    const coordinate={
                                        latitude:details.geometry.location.lat,
                                        longitude:details.geometry.location.lng
                                    }
                                    setCoordinates(coordinate)
                                    // console.log(coordinate)
    
                            }}
                            query={{
                                key:GOOGLE_API_KEY,
                                language: 'en',
                            }}
                />
          </>
        )
      }
  return (
    <View style={{flex:1}}>
        <View style={{flex:0.8}}>
            <MapsView coordinate={coordinates}/>
        </View>
        <View style={{flex:0.5,marginHorizontal:-20}}>
            <View style={{flex:0.3}}>

            </View>
            <View style={{flex:0.7,backgroundColor:colors.white,borderTopEndRadius:20,borderTopStartRadius:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{width:'15%',height:10,position:'absolute',top:10,backgroundColor:colors.orange,borderRadius:5}}/>
                <View style={{margin:-20,
                    position:'absolute',
                    top:45,
                    width:"100%",
                    backgroundColor:colors.white,
                    padding:10
                }}>
                    <InputAutoComplete placeholder={"Search for a dealer or service center"} onPlaceSelected={()=>{}}/>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
      backgroundColor:"#FFE4A4",
      borderRadius:15,
      color:"#8D7E5D",
      paddingHorizontal:20,
      shadowColor:"#171717",
      shadowOffset:{width:4,height:4},
      shadowOpacity:0.25,
      shadowRadius:1,
      elevation:0.5
    }
  })

export default SearchMech