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
    render()
    {
        return(
            <View style={[styles.centerItem], {flex: 1}}>
                <TouchableOpacity style={[styles.centerItem] }>
                            <Text style={[styles.textStyle]}>
                                Deck 1 
                            </Text>
                            <Text style={[styles.subText]}>
                                3 Cards
                            </Text>
                </TouchableOpacity>
            </View>
        )
    }
}   
export default Deck