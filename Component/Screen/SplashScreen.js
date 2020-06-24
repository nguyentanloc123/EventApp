
import React from 'react';
import {
  TouchableOpacity,

  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
export const { width, height } = Dimensions.get('window');
import SwiperFlatList from 'react-native-swiper-flatlist';
import { SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bg1 from '../../asses/bg1.svg'
import Bg2 from '../../asses/bg2.svg'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
  <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
        >
        <View>
        <View>
<Text style={{textAlign: 'center', color: '#24206D',fontWeight: "bold", fontSize: 21, fontFamily: "Arial"}}>Khám phá</Text>
</View> 
        <Bg1 ></Bg1>

        <View style={{width:113, height: 50, backgroundColor: "#50BFA5", borderRadius: 38, alignItems: 'center', alignContent: "center"}}>
        <TouchableOpacity style={{alignContent: "center", marginVertical: 15}}>
            <View>
              <Text style={{textAlign: "center", justifyContent: "center" ,color:"white"}}>Next</Text>
            </View>

        </TouchableOpacity> 

        </View>
        </View>


        <View>
        <View>
<Text style={{textAlign: 'center', color: '#24206D',fontWeight: "bold", fontSize: 21, fontFamily: "Arial"}}>Khám phá</Text>
</View> 
        <Bg2 ></Bg2>

        <View style={{width:113, height: 50, backgroundColor: "#50BFA5", borderRadius: 38, alignItems: 'center', alignContent: "center"}}>
        <TouchableOpacity style={{alignContent: "center", marginVertical: 15}}>
            <View>
              <Text style={{textAlign: "center", justifyContent: "center" ,color:"white"}}>Next</Text>
            </View>

        </TouchableOpacity> 

        </View>
        </View>
        


        </SwiperFlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    height: height,
    width: width,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  },

});
export default SplashScreen