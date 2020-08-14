import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    title: "Cleaning Products",
    data: [
      { name: "Dropps Detergent" },
      { name: "Dropps Fabric Softener" },
      { name: "Dropps Dishwasher Detergent" },
      {
        name: "Clorox Wipes",
        frequency: "Every three months",
        nextRenewal: "September 19",
      },
      {
        name: "Disposal Cleaner",
        frequency: "Every two months",
        nextRenewal: "August 19",
      },
      {
        name: "Washer Cleaner",
        frequency: "Every six months",
        nextRenewal: "September 19",
      },
      {
        name: "Dishwasher Cleaner",
        frequency: "Every four months",
        nextRenewal: "October 19",
      },
      {
        name: "Toilet Cleaner",
        frequency: "Every six months",
        nextRenewal: "August 19",
      },
      {
        name: "Cascade Rinse Aid",
        frequency: "Every six months",
        nextRenewal: "October 19",
      },
    ],
  },
  {
    title: "Animals",
    data: [
      { name: "Smudge Kibbles" },
      {
        name: "Carter Kibbles",
        frequency: "Every two months",
        nextRenewal: "August 19",
      },
      { name: "Smudge Wet Food" },
      { name: "Carter Bedtime Treat" },
      { name: "Carter Biscuits" },
      {
        name: "Smudge Cosequin",
        frequency: "Every two months",
        nextRenewal: "August 19",
      },
      {
        name: "Smudge Cosequin",
        frequency: "Every month",
        nextRenewal: "August 19",
      },
      { name: "Carter Duralactin" },
      {
        name: "Smudge Feliway",
        frequency: "Every month",
        nextRenewal: "August 19",
      },
      {
        name: "Probiotics",
        frequency: "Every one months",
        nextRenewal: "August 19",
      },
      {
        name: "Smudge Litter",
        frequency: "Every month",
        nextRenewal: "August 19",
      },
    ],
  },
  {
    title: "Household",
    data: [
      {
        name: "Hand Soap",
        frequency: "Every four months",
        nextRenewal: "August 19",
      },
      {
        name: "Paper Towels",
        frequency: "Every six months",
        nextRenewal: "December 19",
      },
      {
        name: "Toilet Paper",
        frequency: "Every two months",
        nextRenewal: "September 19",
      },
      {
        name: "Kleenex",
        frequency: "Every two months",
        nextRenewal: "August 19",
      },
      {
        name: "Trash Bags",
        frequency: "Every six months",
        nextRenewal: "September 19",
      },
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeScreen(props) {
  const pressed = (item) => {
    console.log("Pressed an item", item);
    props.navigation.navigate("SubscriptionDetails", item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressed(item)}>
            <Item title={item.name} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
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
