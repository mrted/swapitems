import { View, Text, FlatList, Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'


const {width, height} = Dimensions.get('window')
const COLORS ={primary: '#BFEFC6', secondary: '#F8F8F8'}



const slides = [
  {
    id: '1',
    title: 'Discover used items nearby',
    description: 'Find  the things you are looking in your nearby locations or your community',
    image: require('../../assets/onboarding/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Swap used items nearby',
    description: 'Swap things that are no longer needed with things you need the most',
    image: require('../../assets/onboarding/onboarding2.png'),
  },
  {
    id: '3',
    title: 'Giveaway used items',
    description: 'Giveaway things that no longer using to help your nearby communities ',
    image: require('../../assets/onboarding/onboarding3.png'),
  },
];


const Slide = ({item}) => {
  return (
    <View style={styles.container}>
      <View><Image source={item.image} style={styles.image}/></View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}


const OnboardingScreens = (navigation) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View>
      <FlatList data={slides}
      pagingEnabled
      bounces={false} 
      contentContainerStyle={{height: height}} 
      horizontal 
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Slide item={item}/>}
      />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width:width,
  },
  image: {
    marginTop: 50,
    resizeMode: 'contain',
  },
  title: {
    marginHorizontal: 10,
    fontWeight:'600',
    fontSize: 24,
    maxWidth:'100%',
    lineHeight:34,
    textAlign: 'center',
  },
  description: {
    maxWidth:'75%',
    marginHorizontal:10,
    // marginVertical:3,
    lineHeight:25,
    textAlign: 'center',
  }
});

export default OnboardingScreens