import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
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
    render()
    {
        const {question,answer} = this.state
        return(
            <View>
                <View>
                    <TextInput
                    value={question}
                    onChangeText={this.handleChangeQuestion}
                    style={{width:150, height:30, backgroundColor: "purple", margin: 5}}
                    />
                    <TextInput
                    value={answer}
                    onChangeText={this.handleChangeAnswer}
                    style={{width:150, height:30, backgroundColor: "purple", margin:5}}
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                </View>
                <Text>{this.state.question}{this.state.answer}</Text>
            </View>
        )
    }
}

export default AddCard
