import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import HomeScreen from "./screens/HomeScreen";
import SubscriptionDetailsScreen from "./screens/SubscriptionDetailsScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "All Subscriptions" }}
        />
        <Stack.Screen
          name="SubscriptionDetails"
          component={SubscriptionDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
