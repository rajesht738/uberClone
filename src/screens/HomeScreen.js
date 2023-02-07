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
        placeholder='Where is ..'
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        keyboardShouldPersistTaps="handled"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails r= true
          // console.log(data);
          // console.log(details);
        }}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        minLength={2}
        enablePoweredByContainer={false}
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
