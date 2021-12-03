/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {
  const {data, navigation} = props;
  //console.log(props);

  var dataRecent = data.filter((item) => item.category === 'RECENT');

  return (
    <Carousel
      layout="default"
      data={dataRecent}
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {id, name, ruta, ingredients, category, portions} = data.item;

  const onNavigation = () => {
    navigation.navigate('detail', {
      id,
      name,
      ruta,
      ingredients,
      portions,
      category,
    });
  };
  //console.log(props);
  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={ruta} />
        <Text style={{color: '#fff'}}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 20,
  },
});
