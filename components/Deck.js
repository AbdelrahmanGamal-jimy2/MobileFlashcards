import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'

class Deck extends Component
{
    render()
    {
        return(
            <TouchableOpacity>
                    <View>
                        <Text>
                            {this.props.title}
                        </Text>
                        <Text>
                            {this.props.size}
                        </Text>
                    </View>
            </TouchableOpacity>
        )
    }
}   
export default Deck