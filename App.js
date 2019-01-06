import React from 'react';
import {StyleSheet, View} from 'react-native';
import TimeManager from "./components/TimeManager";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Text>Open up App.js to start working on your app!</Text>*/}
                <TimeManager/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
        //marginTop: 30
        marginTop: 0
    }
});
