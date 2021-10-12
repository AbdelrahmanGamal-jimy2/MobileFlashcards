import React, { Component } from "react";
import {
    ScrollView,
} from 'react-native'
import Deck from "./Deck";
import { MyContext } from "../App"

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
        return(
            <MyContext.Consumer>
                {({decks, update}) => (
                <ScrollView>
                    {decks && Object.keys(decks).map((deck)=> 
                        {
                            console.log("TITLE", decks[deck].questions.length)
                            return(<Deck key={deck} update={update} navigation={this.props.navigation} title={deck} cards={decks[deck].questions.length}></Deck>)
                        }
                    )}
                </ScrollView>
                )}
            </MyContext.Consumer>
        )
    }
}

export default DeckList
