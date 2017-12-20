import React from 'react';
import { View, Platform } from 'react-native'
import AddEntry from './components/AddEntry'
import History from './components/History'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { TabNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        }
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            tabBarLabel: 'AddEntry',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowRadius: 6,
            shadowOpacity: 1,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            }
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
          <View style={{flex: 1}}>
            <View style={{height: 20}}/>
            <Tabs/>
          </View>
        </Provider>
    );
  }
}

