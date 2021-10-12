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
    updateState = ()=>
    {
        getDecks().then((decks)=> this.setState({decks}))

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
        return(
            <ScrollView>
                {decks && Object.keys(decks).map((deck)=> 
                    {
                        return(<Deck key={deck} update={this.updateState}navigation={this.props.navigation}title={deck} cards={decks[deck].questions.length}></Deck>)
                    }
                )}
            </ScrollView>
        )
    }
}

export default DeckList
