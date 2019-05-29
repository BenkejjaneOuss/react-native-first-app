import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component{
    constructor (){
        super()
        this.state= {
            title: 'Title with state'
        }
    }

    render(){
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Text>{this.state.title}</Text>
                <Text>Title without props & state</Text>
            </View>
        )
    }
}

