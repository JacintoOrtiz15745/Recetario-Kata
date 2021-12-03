/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Detail(props) {
  const {route, navigation} = props;
  const {name, ruta, ingredients, category, portions, like} = route.params;
  // console.log(props);

  function onNavigation() {
    navigation.navigate('home');
  }

  const [liked, setLiked] = useState(like== '0'? false:true);

  return (
    <>
      <View style={styles.ViewDetail}>
        <View style={styles.ViewImage}>
          <ImageBackground style={styles.image} source={ruta} />
          <View style={styles.Icons}>
            <View style={[styles.cont, {justifyContent: 'space-between'}]}>
              <View style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={onNavigation}>
                  <Icon
                    name="close"
                    style={{fontSize: 32, color: 'white', marginLeft: -10}}
                  />
                </TouchableWithoutFeedback>
              </View>
              <View
                style={[
                  styles.cont,
                  {justifyContent: 'space-around', justifyContent: 'flex-end'},
                ]}>
                <TouchableOpacity>
                  <Icon
                    name="upload"
                    style={{
                      fontSize: 28,
                      color: 'white',
                      marginLeft: -10,
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name={liked ? 'heart' : 'hearto'}
                    size={28}
                    color="white"
                    marginTop={-12}
                    onPress={() => {
                      setLiked(!liked);
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.ViewName}>
            <Text style={[styles.textColorImage, {fontSize: 18}]}>
              {' '}
              {category}{' '}
            </Text>
            <Text style={[styles.textColorImage, {fontSize: 25}]}>
              {' '}
              {name}{' '}
            </Text>
          </View>
          <View style={styles.ViewIngredients}>
            <Text style={[styles.textColorImage, {fontSize: 18, marginTop: 5}]}>
              Ingredients
            </Text>
            <Text style={[styles.textColorImage, {fontSize: 16}]}>
              for {portions} servings
            </Text>
            <ScrollView style={styles.scrollList}>
              {ingredients.map((item) => {
                return (
                  <View style={styles.viewList} key={item.key}>
                    <Text style={styles.textIngredient}>{item.ingredient}</Text>
                    <Text style={styles.textIngredient}>{item.quantity}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ViewDetail: {
    flex: 1,
    backgroundColor: '#282828',
  },
  ViewImage: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    opacity: 0.3,
  },
  Icons: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '-165%',
    paddingLeft: 15,
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '2%',
  },
  iconShare: {
    height: 27,
    width: 27,
  },
  iconX: {
    height: 50,
    width: 50,
  },

  ViewName: {
    position: 'absolute',
    marginTop: '70%',
    marginLeft: 10,
    width: '100%',
  },
  textColorImage: {
    color: 'white',
    fontWeight: '500',
  },
  ViewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  ViewIngredients: {
    flex: 1,
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 2,
    marginLeft: 20,
    width: Dimensions.get('window').width,
  },
  scrollList: {
    width: '90%',
    height: Dimensions.get('window').height / 3,
    marginTop: 10,
  },
  viewList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginTop: 25,
    marginBottom: 0,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#3C3C3C',
  },
  textIngredient: {
    fontSize: 15,
    color: 'white',
  },
});
