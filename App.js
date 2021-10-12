import * as React from "react";
import NewDeck from "./components/NewDeck";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from "./components/StackNav";
import {FontAwesome} from '@expo/vector-icons'
import {setLocalNotification} from './utils/api'
import { getDecks } from "./utils/api";
import MyContext from "./components/appContext"

const Tab = createBottomTabNavigator()

class  App extends React.Component {
  state = {
    decks: {

    }
  }
  componentDidMount()
  {
    setLocalNotification()
    getDecks().then((decks) => {
      this.setState({decks})
    })

  }
  updateState = ()=>
  {

    getDecks().then((decks)=> this.setState({decks}))

  }
  render()
  {
    return (
      <MyContext.Provider value={{decks: this.state.decks, update: this.updateState}}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen options={{tabBarIcon: () => (<FontAwesome style={{marginBottom: -10}} name="book" size={24} color="black" />)}} name="Home" component={StackNav} />
            <Tab.Screen options={{tabBarIcon: () => (<FontAwesome style={{marginBottom: -10}} name="plus" size={24} color="black" />)}} name="NewDeck" component={NewDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );  
  }
}

export default App