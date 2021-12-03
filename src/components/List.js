import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function List(props) {
  const {data, navigation} = props;
  //console.log(data);

  var dataTrending = data.filter((item) => item.category == 'TRENDING');
  //  console.log(item);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        horizontal={true}
        data={dataTrending}
        renderItem={(item) => (
          <RenderItem data={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {id, name, ruta, category, ingredients, portions, like} = data.item;
  //console.log(props);
  const onNavigation = () => {
    navigation.navigate('detail', {
      id,
      name,
      ruta,
      category,
      ingredients,
      portions,
      like,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={ruta} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 5,
    width: 100,
  },
});
