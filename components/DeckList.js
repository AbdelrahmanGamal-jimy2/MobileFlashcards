import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'

class DeckList extends Component
{

    render()
    {
        const {decks} = this.props.decks
        return(
            <ScrollView>
                {decks.map((deck)=> 
                <TouchableOpacity>
                        <View>
                            <Text>
                                {deck.title}
                            </Text>
                            <Text>
                                {deck.questions.length()}
                            </Text>
                        </View>
                </TouchableOpacity>
                )}
            </ScrollView>
        )
    }
}

export default DeckList
