import React, { useEffect, useState } from 'react'
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { View, Dimensions} from 'react-native';
import * as Location from 'expo-location';


const {width,height}=Dimensions.get('window')

const ASPECT_RATIO=width/height
const LATITUDE_DELTA=0.005
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO
const INITIAL_POSITION={
    latitude:-1.320971,
    longitude:36.798542,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta:LONGITUDE_DELTA
}



const MapsView = ({coordinate}) => {
    const [pin,setPin]=useState(INITIAL_POSITION) 
    const [errorMsg, setErrorMsg] = useState(null);
    const [Destination,setDestination]=useState(coordinate)

    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setPin(
          {
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
          }
        )
      })();
    }, []);
  return (
    <View style={{flex: 1,backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
         <MapView style={{width:width,height:height-20,}}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}
                mapType={'standard'}
                showsUserLocation={true}
                onUserLocationChange={(e)=>{
                  setPin(
                    {
                      latitude:e.nativeEvent.coordinate.latitude,
                      longitude:e.nativeEvent.coordinate.longitude
                    }
                  )
                }}
        >
          <Marker coordinate={pin} 
                  draggable={true}
                  onDragEnd={(e)=>{
                        setPin(
                          {
                            latitude:e.nativeEvent.coordinate.latitude,
                            longitude:e.nativeEvent.coordinate.longitude
                          }
                        )
                      }
                  }
          />
          {coordinate?<Marker coordinate={coordinate} 
                  draggable={true}
                  onDragEnd={(e)=>{
                        setPin(
                          {
                            latitude:e.nativeEvent.coordinate.latitude,
                            longitude:e.nativeEvent.coordinate.longitude
                          }
                        )
                      }
                  }
          />:""}
        </MapView>
    </View>

  )
}

export default MapsView