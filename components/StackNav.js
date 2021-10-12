import React, { Component } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DeckList from "./DeckList";
import Deck from "./Deck"
import AddCard from './AddCard'
import DeckView from "./DeckView";
import Quiz from "./Quiz";
import NewDeck from "./NewDeck";

const Stack = createNativeStackNavigator()
import {getDecks} from '../utils/api'

class StackNav extends Component
{
    render()
    {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="DeckList"  component={DeckList} />
                <Stack.Screen name="DeckView"  component={DeckView} />
                <Stack.Screen name="AddCard"  component={AddCard} />
                <Stack.Screen name="Quiz"  component={Quiz} />
            </Stack.Navigator>
        )
    }
}
export default StackNav