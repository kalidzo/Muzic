import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Audio from '../screens/Audio'
import Player from '../screens/Player'
import PlayList from '../screens/PlayList'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Audio' component={Audio} options={{
        tabBarIcon:({color,size})=>{
            return <Ionicons name="ios-headset" size={size} color={color} />
        }
    }}/>
    <Tab.Screen name='Player' component={Player} options={{
        tabBarIcon:({color,size})=>{
            return <FontAwesome5 name="compact-disc" size={size} color={color} />
        }
    }}/>
    <Tab.Screen name='Play List' component={PlayList} options={{
        tabBarIcon:({color,size})=>{
            return <MaterialIcons name="library-music" size={size} color={color} />
        }
    }}/>
   </Tab.Navigator>
  )
}

export default AppNavigator