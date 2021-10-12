import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import {MyContext} from "../App"

import {saveDeckTitle, getDeck} from '../utils/api.js'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    centerItem:
    {
        justifyContent:"center",
        alignItems:"center"
    },
    btnStyle:
    {
        backgroundColor: "#4287f5",
        borderRadius: 50,
        width: 200,
        height:50,
        margin: 4
    },
    inputText:
    {
        width:200,
        height:50,
        backgroundColor: "#d1d1d1"
    }
})
class NewDeck extends Component
{
    state ={
        input: ""
    }
    handleChange = (input)=>
    {
        this.setState(()=>({input}))
    }
    handlePress = (decks, updateFunc)=>
    {
        console.log("MY ASS params", updateFunc)
        const {input} = this.state
        if(input)
        {
            saveDeckTitle({
                [input]:
                {
                    title: input,
                    questions: []
                }
            }).then(()=> updateFunc()).then(()=> this.props.navigation.navigate("DeckList"))
        }
    }
    render()
    {
        const {input} =this.state
        return(
            <MyContext.Consumer>
                {({ decks, update }) => (
                <View style={[styles.centerItem,{flex: 1}]}>
                    <Text style={[styles.textStyle, {padding: 50}  ]}>
                        What is the title of your new Deck: {this.state.input}
                    </Text>
                    <TextInput
                    placeholder={"Title"}
                    value={input}
                    onChangeText={this.handleChange}
                    style={[styles.inputText,{padding: 5}]}
                    />
                    <View></View>
                    <TouchableOpacity onPress={() => this.handlePress(decks, update)} style={[styles.btnStyle, styles.centerItem]}>
                        <Text style={{color: "white"}}>Create Deck</Text>
                    </TouchableOpacity>
                </View>
                )}
            </MyContext.Consumer>
        )
    }
}
export default NewDeck