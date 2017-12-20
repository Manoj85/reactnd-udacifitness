import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default class Live extends Component {

    state = {
        coords: null,
        status: null,
        direction: ''
    }

    render() {
        const {coords, status, direction} = this.state

        if (status === null) {
            return <ActivityIndicator style={{marginTop: 20}} />
        }

        if (status === 'denied') {
            return (
                <View>
                    <Text>Denied!</Text>
                </View>
            )
        }

        if (status === 'undetermined') {
            return (
                <View>
                    <Text>Undetermined!</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>Live!</Text>
                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        )

    }
}