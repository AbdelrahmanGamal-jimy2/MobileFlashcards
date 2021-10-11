import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'
class DeckView extends Component
{
    render()
    {
        return(
                <View>
                    <Text>
                        Deck1
                    </Text>
                    <Text>
                        2 Cards
                    </Text>
                    <View>
                        <TouchableOpacity>
                        <   Text>Start Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>AddCard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Delete Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}
export default DeckView