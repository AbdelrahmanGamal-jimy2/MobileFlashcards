import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {getDeck} from '../utils/api'
import { clearLocalNotification, setLocalNotification } from "../utils/api";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    },
    centerItem:
    {
        justifyContent:"center",
        alignItems:"center"
    },
    redBtn:
    {
        backgroundColor: "red",
        borderRadius: 50,
        width: 200,
        height:50,
        margin: 4
    },
    greenBtn:
    {
        backgroundColor: "green",
        borderRadius: 50,
        width: 200,
        height:50,
        margin: 4
    }
})
class Quiz extends Component
{
    state={
        index: 0,
        correct: 0,
        incorrect: 0,
        questions: '',
        toggle: false,
        showPrecentage: false
    }
    componentDidMount()
    {
        clearLocalNotification().then(setLocalNotification)
        const {id}= this.props.route.params
        getDeck(id).then((id)=>this.setState({
            questions: id.questions
        }))
    }
    nextQC = ()=>
    {
        if(this.state.index + 1  < this.state.questions.length )
        {
            this.setState({
                index: this.state.index + 1,
                correct: this.state.correct + 1
            }
            )
        }
        if(this.state.index+1   ===  this.state.questions.length)
        {
            if(this.state.incorrect + this.state.correct < this.state.questions.length )
                this.setState({
                    correct: this.state.correct + 1
                })
            this.setState({showPrecentage: true})
        }
    }
    nextQW = ()=>
    {
        if(this.state.index + 1  < this.state.questions.length )
        {
            this.setState({
                index: this.state.index + 1,
                incorrect: this.state.incorrect + 1
            })
        }
        if(this.state.index + 1   ===  this.state.questions.length)
        {
            if(this.state.incorrect + this.state.correct < this.state.questions.length )
                this.setState({
                    incorrect: this.state.incorrect + 1
                })
            this.setState({showPrecentage: true})
        }
    }
    
    render()
    {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignSelf:"flex-start"}}>
                    <Text>
                        {this.state.index +1}/{this.state.questions && this.state.questions.length}
                    </Text>
                </View>
                <View  style={[styles.centerItem,{flex: 3}, styles.textStyle]}>
                    <TouchableOpacity onPress={()=> this.setState({
                        toggle: !this.state.toggle
                    })}>
                        <Text style={{flex: 1}}>
                        Question{ this.state.questions && !this.state.toggle && this.state.questions[this.state.index].question }{"\n"}
                        Answer:{this.state.questions && this.state.toggle && this.state.questions[this.state.index].answer}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.centerItem,{flex: 1}]}>
                    <TouchableOpacity onPress={()=> this.nextQC()}style={[styles.greenBtn, styles.centerItem]}>
                            <Text style={{color: "white"}}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.nextQW()}style={[styles.redBtn, styles.centerItem]}>
                            <Text style={{color: "white"}}>Incorrect</Text>
                    </TouchableOpacity>
                </View>       
                <View style={[{flex:1}, styles.centerItem]}>
                    <Text>
                        {this.state.showPrecentage && "%" + Math.floor((this.state.correct/(this.state.correct + this.state.incorrect) )* 100)}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Quiz