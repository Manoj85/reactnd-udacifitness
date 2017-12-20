import React, { Component } from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import MetricCard from './MetricCard'
import {white} from "../utils/colors";
import {connect} from "react-redux";

class EntryDetail extends Component {
    static navigationOptions = ({navigation}) => {
        const { entryId } = navigation.state.params

        const year = entryId.slice(0, 4)
        const month = entryId.slice(5, 7)
        const day = entryId.slice(8)

        return {
            title: `${month}/${day}/${year}`
        }
    }

    render() {
        const { metrics } = this.props
        return (
            <View style={styles.container}>
                <MetricCard metrics={metrics} />
                <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
        padding: 15
    }
})

function mapStateToProps (state, {navigation}) {
    const { entryId } = navigation.state.params

    return {
        entryId,
        metrics: state[entryId]
    }
}

export default connect(
    mapStateToProps,
)(EntryDetail)