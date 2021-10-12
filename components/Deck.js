import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        padding:4
    },
    centerItem:
    {
        justifyContent:"center",
        alignItems:"center"
    },
    subText:
    {
        fontSize: 15,
        color: "#d1d1d1",
        padding:3,
        marginRight:5
    }
})
class Deck extends Component
{
    handlePress =()=>
    {
        
    }
    render()
    {
        const {navigation} =this.props
        console.log("DECK PROPS", this.props)
        return(
            <View style={[styles.centerItem], {flex: 1, borderColor: "black", borderWidth: 0.5, borderRadius: 3, margin:5}}>
                <TouchableOpacity style={[styles.centerItem] } onPress={()=>navigation.navigate("DeckView",{title: this.props.title, cards: this.props.cards, navigation,update: this.props.update})}>
                            <Text style={[styles.textStyle]}>
                                {this.props.title}
                            </Text>
                            <Text style={[styles.subText]}>
                                cards: {this.props.cards}
                            </Text>
                </TouchableOpacity>
            </View>
        )
    }
}   
export default Deck