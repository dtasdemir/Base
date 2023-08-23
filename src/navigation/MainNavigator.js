import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Splash from "../pages/Splash";
import Login from "../pages/Login";

// Navigators
import TabNavigator from "./TabNavigator";

import m from '../style/index';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{
           headerShown: false,
           statusBarColor: m.primaryColor
        }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="tab" component={TabNavigator} />
        </Stack.Navigator>
    )
}