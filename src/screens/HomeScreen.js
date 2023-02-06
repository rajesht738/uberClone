import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_KEY } from "@env";
const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
   
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      styles={{
        container:{
          flex: 0
        },
        textInput:{
          fontSize: 18
        },
      }}
      
      minLength={2}
      query={{
        key: 'AIzaSyBwLZVU1pTsEjIfoYVGmIEqPf2FtVTK4NE',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={200}
    />
      <NavOptions />
      <StatusBar backgroundColor="black" translucent />
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
