import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const {width,height}=Dimensions.get('window')

const ASPECT_RATIO=width/height
const LATITUDE_DELTA=0.02
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO
const INITIAL_POSITION={
    latitude:-1.320971,
    longitude:36.798542,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta:LONGITUDE_DELTA
}

const MapsView = () => {
  return (
    <View style={{flex: 1,backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
         <MapView style={{width:width,height:height-20,}}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}
        />
        <GooglePlacesAutocomplete placeholder='Search'
                    onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                    }}
                    query={{
                        key: 'YOUR API KEY',
                        language: 'en',
                    }}
        />
    </View>

  )
}

export default MapsView