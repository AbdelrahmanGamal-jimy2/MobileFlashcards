import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
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
    }
})
class DeckView extends Component
{
    
    render()
    {
        return(
                <View style={{flex: 1,}}>
                    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}} >
                        <Text style={[styles.textStyle]}>
                            Deck 1
                        </Text>
                        <Text style={[styles.textStyle]}>
                            2 Cards
                        </Text>
                    </View>
                    <View style={{flex: 2, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity style={[styles.btnStyle, styles.centerItem]}>
                        <Text style={{color: "white"}}>Start Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnStyle, styles.centerItem]}>
                            <Text style={{color: "white"}}>AddCard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnStyle, styles.centerItem, {backgroundColor: "white"}]}>
                            <Text style={{color: "red"}}>Delete Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}
export default DeckView