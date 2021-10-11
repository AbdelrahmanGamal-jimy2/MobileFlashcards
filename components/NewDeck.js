import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native'

class NewDeck extends Component
{
    state ={
        input: ""
    }
    handleChange = (input)=>
    {
        this.setState(()=>({input}))
    }
    render()
    {
        const {input} =this.state
        return(
            <View>
                <Text>
                    What is the title of your new Deck: {this.state.input}
                </Text>
                <TextInput
                value={input}
                onChangeText={this.handleChange}
                style={{width:100, height:100}}
                />
                <View></View>
                <TouchableOpacity style={{justifyContent: "center", alignItems:"center"}}>
                    <Text>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default NewDeck