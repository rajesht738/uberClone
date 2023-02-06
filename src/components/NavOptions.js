import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "HomeScreen",
  },
  {
    id: "455",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "MapScreen",
  },
];

// const Item = ({ title }) => (
//   <View>
//     <TouchableOpacity
//       style={tw`bg-gray-200 p-2 pl-5 pb-4 pt-4 m-2`}
//       onPress={() => navigation.navigate(title.screen)}
//     >
//       <Image
//         style={{ width: 120, height: 120, resizeMode: "contain" }}
//         source={{ uri: title.image }}
//       />
//       <Text style={tw`mt-2 text-sm font-semibold`}>{title.title}</Text>
//       <Icon
//         style={tw`p-2 rounded-full bg-black w-10 mt-4`}
//         name="arrowright"
//         color="white"
//         type="antdesign"
//       />
//     </TouchableOpacity>
//   </View>
// );

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity
            style={tw`bg-gray-200 p-2 pl-5 pb-4 pt-4 m-2`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-sm font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 rounded-full bg-black w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {},
});
