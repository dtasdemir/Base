import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Splash from "../pages/Splash";
import Login from "../pages/Login";

// Navigators
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{
           headerShown: false 
        }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="tab" component={TabNavigator} />
        </Stack.Navigator>
    )
}