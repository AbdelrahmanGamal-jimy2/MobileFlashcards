import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native'
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
    render()
    {
        const {input} =this.state
        return(
            <View style={[styles.centerItem,{flex: 1}]}>
                <Text style={[styles.textStyle, {padding: 50}  ]}>
                    What is the title of your new Deck: {this.state.input}
                </Text>
                <TextInput
                value={input}
                onChangeText={this.handleChange}
                style={[styles.inputText]}
                />
                <View></View>
                <TouchableOpacity style={[styles.btnStyle, styles.centerItem]}>
                    <Text style={{color: "white"}}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default NewDeck