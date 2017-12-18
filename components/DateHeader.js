import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {purple, white} from "../utils/colors";

export default function DateHeader ({date}) {
    return (
        <Text style={styles.dateText}> { date } </Text>
    )
}

const styles = StyleSheet.create({
    dateText: {
        color: purple,
        fontSize: 25
    }
})