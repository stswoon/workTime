import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from "./Timer";
import Separator from "./Separator";

export default class TimeManager extends React.Component {
    state = {
        time: 0
    };

    render() {
        return (
            <View style={styles.container}>
                <Timer/>
                <Separator/>
                <Timer/>
                <Separator/>
                <Timer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
});
