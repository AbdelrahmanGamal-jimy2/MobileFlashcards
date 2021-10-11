import * as React from "react";
import { View, Text } from "react-native";
import DeckList from './components/DeckList';
import NewDeck from "./components/NewDeck";
import DeckView from "./components/DeckView";
import AddCard from "./components/AddCard";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deck from "./components/Deck";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DeckView" component={DeckView} />
        <Tab.Screen name="AddCard" component={AddCard} />
      </Tab.Navigator>
    </NavigationContainer>
  );  
}
