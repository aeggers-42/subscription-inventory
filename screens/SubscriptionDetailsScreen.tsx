import "react-native-gesture-handler";
import React from "react";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Item = ({ title, value }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {title} : {value}
    </Text>
  </View>
);

export default function SubscriptionDetailsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(props.route.params).map((key) => {
        return <Item title={key} value={props.route.params[key]} />;
      })}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#0000ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
