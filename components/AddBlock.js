import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RkButton} from "react-native-ui-kitten";

export default class AddBlock extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <RkButton rkType='xlarge outline circle'>+</RkButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100
    }
});
