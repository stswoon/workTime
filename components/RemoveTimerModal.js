import React from "react"
import {StyleSheet, View} from "react-native";
import {ConfirmDialog} from "react-native-simple-dialogs";

export default class RemoveTimerModal extends React.Component {
    render() {
        const msg = "Remove timer with name '" + this.props.timerName + "' ?";
        return (
            <View>
                <ConfirmDialog
                    title='' message={msg} visible={true}
                    positiveButton={{
                        title: "Remove", onPress: () => this.props.onClick(true)
                    }}
                    negativeButton={{
                        title: "Cancel", onPress: () => this.props.onClick(false)
                    }}
                />
            </View>
        )
    }
}