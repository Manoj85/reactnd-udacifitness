import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import {gray, purple} from '../utils/colors'
import DateHeader from './DateHeader'

export default function MetricCard ({ date, metrics }) {
    return (
        <View>
            { date && <DateHeader date={date}/> }
            { Object.keys(metrics).map((metric) => {
                const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(metric)
                return (
                    <View style={styles.metric} key={metric}>
                        {getIcon()}
                        <View>
                            <Text style={{fontSize: 20}}>{displayName}</Text>
                            <Text style={{fontSize: 16, color: gray}}>{metrics[metric]}  {unit}</Text>
                        </View>
                    </View>


                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    metric: {
        flexDirection: 'row',
        marginTop: 12
    }
})