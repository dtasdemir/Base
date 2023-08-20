import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";

// Custom Css Style
import m from '../style';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: [m.h(70), m.pb(8)]
        }}>
            <Tab.Screen name="home" options={{
               tabBarIcon: ({color}) => (
                <Icon name="home" type="font-awesome" color={color} size={26} />
               ),
               tabBarLabel: 'Ana Sayfa'
            }} component={Home} />
            <Tab.Screen name="profile" options={{
                tabBarIcon: ({color}) => (
                    <Icon name="user" type="font-awesome" color={color} size={24} />
                ),
                tabBarLabel: 'Profilim'
            }} component={Profile}/>
        </Tab.Navigator>
    )
}