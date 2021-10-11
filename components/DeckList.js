import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native'
import Deck from "./Deck";

class DeckList extends Component
{

    render()
    {
        const {decks} = this.props.decks
        return(
            <ScrollView>
                {decks.map((deck)=> 
                    <Deck></Deck>
                )}
            </ScrollView>
        )
    }
}

export default DeckList
