import React, {useState, useRef} from 'react'
import { Image, Text, View, Animated, FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import mech from '../../assets/Images/mech.png'
import mech1 from '../../assets/Images/mech1.png'
import tire from '../../assets/Images/tire.png'
import towtruck from '../../assets/Images/towtruck.png'
import PagerView from '../common/PagerView'
import Paginator from '../common/Paginator'
import PataButton from '../common/PataButton'
import colors from '../config/colors'
import fonts from '../config/fonts'

const slides=[
  {
    id:"1",
    image:mech,
    text:"We provide profession auto services for you at a place near you."
  },
  {
    id:"2",
    image:towtruck,
    text:"Get tow services to come to you "
  },
  {
    id:"3",
    image:tire,
    text:"Get genuine parts  from trusted and accredited part dealers near you."
  },
  {
    id:"4",
    image:mech1,
    text:"Lets make your day great again with pataMech right now."
  }
]

const OnBoardingPages = ({history}) => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const scrollX=useRef(new Animated.Value(0)).current
    const slidesRef=useRef(null)
    const viewableItemsChanged=useRef(({viewableItems})=>{setCurrentIndex(viewableItems[0].index)}).current
    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current

    const scrollTo=async()=>{
      if (currentIndex<slides.length-1){
        slidesRef.current.scrollToIndex({index:currentIndex+1})
      }else{
        try {
            await AsyncStorage.setItem('@viewedOnboarding','true')
        } catch (error) {
            console.log('Error @setItem: ',error)
        }
      }
    }
  return (
    <View style={{width:"100%",height:"100%"}}>
        <FlatList
          style={{height:"100%"}}
          data={slides}
          renderItem={({item})=><PagerView item={item}/>}
          horizontal 
          showsHorizontalScrollIndicator 
          pagingEnabled 
          bounces={false}
          keyExtractor={(item)=>item.id}
          onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX} } } ],{useNativeDriver:false,})}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <View style={{height:"20%"}}>
            <View style={{width:"100%",alignItems:'center'}}>
                <Paginator data={slides} scrollX={scrollX}/>
              <View style={{width:"100%",marginTop:20,justifyContent:"center",alignItems:"center"}}>
                <PataButton onPress={scrollTo} to={currentIndex==slides.length-1?"/login":''} buttonText={currentIndex==slides.length-1?"Get started":"Next"}/>  
              </View>
            </View>
        </View>
    </View>

  )
}

export default OnBoardingPages