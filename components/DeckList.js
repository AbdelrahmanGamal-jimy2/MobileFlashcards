import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native'
import Deck from "./Deck";

import {getDecks} from '../utils/api'

class DeckList extends Component
{
    state = {
        decks: {

        }
    }
    componentDidMount()
    {
        getDecks().then((decks)=> this.setState({decks}))
    }
    refresh = ()=>
    {
        getDecks().then((decks)=> this.setState({decks}))
    }
    render()
    {
        const {decks} = this.state
        console.log("decks", this.state.decks)
        return(
            <ScrollView>
                {decks && Object.keys(decks).map((deck)=> 
                    {
                        console.log(decks[deck].questions.length)
                        return(<Deck key={deck} navigation ={this.props.navigation }title={deck} cards={decks[deck].questions.length}></Deck>)
                    }
                )}
            </ScrollView>
        )
    }
}

export default DeckList
