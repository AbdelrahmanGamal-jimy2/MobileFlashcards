import * as React from "react";
import { View, Text } from "react-native";
import DeckList from './components/DeckList';
import NewDeck from "./components/NewDeck";
import DeckView from "./components/DeckView";
import AddCard from "./components/AddCard";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deck from "./components/Deck";
import StackNav from "./components/StackNav";
import {FontAwesome} from '@expo/vector-icons'
import {setLocalNotification} from './utils/api'


const Tab = createBottomTabNavigator()

class  App extends React.Component {
  state = {
    decks: {

    }
  }
  componentDidMount()
  {
    setLocalNotification()
  }
  updateState = ()=>
  {
      getDecks().then((decks)=> this.setState({decks}))

  }
  render()
  {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen initialParams={{update: this.updateState}} options={{tabBarIcon: () => (<FontAwesome style={{marginBottom: -10}} name="book" size={24} color="black" />)}} name="Home" component={StackNav} />
          <Tab.Screen initialParams={{update: this.updateState}} options={{tabBarIcon: () => (<FontAwesome style={{marginBottom: -10}} name="book" size={24} color="black" />)}} name="NewDeck" component={NewDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    );  
  }
}

export default App