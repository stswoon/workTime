import React from "react";
import {StyleSheet, View} from "react-native";
import Dash from 'react-native-dash';

const styles = StyleSheet.create({
    container: {
        margin: 30
    }
});

export default class Separator extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Dash style={{width: 300, height: 1}} dashThickness={1} dashLength={16} dashGap={8}
                      dashColor={'#838383'}/>
            </View>
        )
    }
}