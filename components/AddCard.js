import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native'
import {addCardToDeck} from '../utils/api'

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
        backgroundColor: "#d1d1d1",
        margin: 10
    }
})

class AddCard extends Component
{
    state={
        question:"",
        answer: ""
    }
    handleChangeAnswer = (answer)=>
    {
        this.setState(()=>({answer}))
    }
    handleChangeQuestion = (question)=>
    {
        this.setState(()=>({question}))
    }
    handleAdd = ()=>
    {
        addCardToDeck({
            question: this.state.question,
            answer: this.state.answer
        }, this.props.route.params.id).then(()=>
        {
            this.props.route.params.update()
            this.props.route.params.updateCard()
            this.props.navigation.pop(1)
        })
    }
    render()
    {
        const {question,answer} = this.state
        return(
            <View style={[{flex: 1}, styles.centerItem]}>
                <View style={[{flex: 2}, styles.centerItem]}>
                    <TextInput
                    placeholder=" Enter Your Question" 
                    value={question}
                    onChangeText={this.handleChangeQuestion}
                    style={[styles.inputText]}
                    />
                    <TextInput
                    placeholder=" Enter Your Answer" 
                    value={answer}
                    onChangeText={this.handleChangeAnswer}
                    style={[styles.inputText]}
                    />
                </View>
                <View style={[{flex: 1},styles.centerItem]}>
                    <TouchableOpacity style={[styles.btnStyle, styles.centerItem]} onPress={()=>this.handleAdd() }>
                        <Text style={{color: "white"}}>Add Card</Text>
                    </TouchableOpacity>
                </View>
                <Text>{this.state.question}{this.state.answer}</Text>
            </View>
        )
    }
}

export default AddCard
