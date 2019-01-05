import React from "react";
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 30
    }
});

export default class Separator extends React.Component {
    render() {
        return (
            <View style={styles.container}/>
        )
    }
}