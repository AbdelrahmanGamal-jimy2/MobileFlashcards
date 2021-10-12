import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {removeDeck, getDeck} from '../utils/api'


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
    state=
    {
        cards: ''
    }
    componentDidMount()
    {
        this.setState({
            cards: this.props.route.params.cards
        })
    }
    handleDelete = ()=>
    {
        const {title,update} =this.props.route.params
        const {navigation} = this.props
        removeDeck(title).then(()=>{
            update()
            navigation.pop(1)
        })
    }
    updateCard =()=>
    {
        
        getDeck(this.props.route.params.title).then((deck)=> {
            console.log(deck.questions)
            this.setState({
            cards: deck.questions.length
        }
    )}
    )
    }
    render()
    {
        const {title, cards,update} =this.props.route.params
        const {navigation} = this.props
        return(

                <View style={{flex: 1,}}>
                    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}} >
                        <Text style={[styles.textStyle]}>
                            {title}
                        </Text>
                        <Text style={[styles.textStyle]}>
                            {this.state.cards}
                        </Text>
                    </View>
                    <View style={{flex: 2, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Quiz",{id: title})} style={[styles.btnStyle, styles.centerItem]}>
                        <Text style={{color: "white"}}>Start Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("AddCard",{id: title, update, updateCard: this.updateCard})} style={[styles.btnStyle, styles.centerItem]}>
                            <Text style={{color: "white"}}>AddCard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.handleDelete()} style={[styles.btnStyle, styles.centerItem, {backgroundColor: "white"}]}>
                            <Text style={{color: "red"}}>Delete Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}
export default DeckView