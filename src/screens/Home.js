/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Input,
  Dimensions,
  StatusBar,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import List from '../components/List';
import CarouselVertical from '../components/CarouselVertical';
import {data} from '../components/Data';
import SearchBar from '../components/Searchbar';
import Icon from 'react-native-vector-icons/AntDesign';
import IconPhone from 'react-native-vector-icons/FontAwesome';

let recipes = data.recipes;

export default function Home(props) {
  const {navigation} = props;

  return (
    <>
      <ScrollView style={styles.viewPrincipal}>
        <View style={styles.container}>
          <View style={styles.viewsearchbar}>
            <Icon
              name="search1"
              style={{fontSize: 23, color: 'white', paddingLeft: 5}}
            />
            <TextInput
              style={styles.searchbar}
              placeholder="What do you want to eat?"
              placeholderTextColor="white"
            />
            <TouchableOpacity>
              <IconPhone
                name="microphone"
                style={{fontSize: 20, color: 'white', paddingRight: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewFirst}>
          <View style={styles.viewTrending}>
            <Text style={styles.textTrending}>TRENDING</Text>
            <View style={styles.flat}>
              <List data={recipes} navigation={navigation} />
            </View>
          </View>
        </View>
        <View style={styles.viewRecent}>
          <Text style={styles.textRecent}>RECENT</Text>
          <View style={styles.viewRecipes}>
            <CarouselVertical data={recipes} navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      {/* <ScrollView  style={styles.viewRecent}>

            </ScrollView>       */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  viewsearchbar: {
    backgroundColor: '#343435',
    flex: 1,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  searchbar: {
    fontSize: 14,
    color: 'white',
    marginLeft: 10,
    width: '50%',
    height: 40,
    backgroundColor: '#343435',
    borderRadius: 10,
    flex: 1,
  },
  viewFirst: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  viewPrincipal: {
    backgroundColor: '#282828',
  },
  viewRecent: {
    marginTop: 1,
  },
  viewTrending: {
    paddingHorizontal: 5,
    marginTop: 15,
    marginLeft: 10,
  },
  viewRecipes: {
    marginVertical: 10,
  },
  tending: {
    marginTop: 20,
    marginBottom: 50,
  },
  textTrending: {
    color: '#BB367A',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: -10,
  },
  textRecent: {
    color: '#BB367A',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  flat: {
    height: 160,
  },
});
