import React from "react";
import {StyleSheet, View} from "react-native";
import {RkButton, RkText, RkTextInput} from "react-native-ui-kitten";
import RemoveTimerModal from "./RemoveTimerModal";

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'stretch',
        height: 160,
    },
    line: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        height: 60
    },
    button: {
        width: 82,
        margin: 1
    },
    buttonRemove: {
        width: 72,
        marginTop: 1,
        marginLeft: 1,
        marginBottom: 1,
        marginRight: 30
    },
    name: {
        width: 100,
        margin: 1
    },
    lineText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        //width: 130,
        margin: 1,
        fontSize: 40
    }
});


export default class Timer extends React.Component {
    state = {
        showDialog: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(-60)}>-1h</RkButton>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(-15)}>-15'</RkButton>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(-5)}>-5'</RkButton>
                    <RkTextInput rkType='xlarge' placeholder='Time Name' style={styles.name}
                                 onChangeText={text => this.setName(text)} value={this.props.name}
                    />
                </View>
                <View style={styles.lineText}>
                    <RkText rkType={'xlarge' + this.formatColor(this.props.time)}
                            style={styles.text}>{this.format(this.props.time)}</RkText>
                </View>
                <View style={styles.line}>
                    <RkButton rkType='xlarge danger' style={styles.buttonRemove}
                              onPress={() => this.askRemove()}>X</RkButton>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(+5)}>+5'</RkButton>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(+15)}>+15'</RkButton>
                    <RkButton rkType='xlarge' style={styles.button} onPress={() => this.click(+60)}>+1h</RkButton>
                </View>

                <View>
                {
                    this.state.showDialog &&
                   <RemoveTimerModal timerName={this.props.name} onClick={flag => this.handleModalClick(flag)}/>
                }
                </View>
            </View>
        );
    }

    click(value) {
        this.props.onChange({name: this.props.name, time: this.props.time + value});
    }

    setName(text) {
        this.props.onChange({name: text, time: this.props.time});
    }

    askRemove() {
        this.setState({showDialog: true})
    }

    handleModalClick(flag) {
        if (flag) {
            this.props.onRemove(this.props.id);
        }
        this.setState({showDialog: false});
    }

    format(time) {
        let t = Math.abs(time);
        let d = Math.floor(t / (8 * 60));
        t = t - d * 8 * 60;
        let h = Math.floor(t / 60);
        t = t - h * 60;
        let m = t;

        let result = "";

        if (time === 0) {
            result += "";
        } else if (time > 0) {
            result += "+ ";
        } else {
            result += "- ";
        }

        if (d > 0) {
            result += d + "d ";
        }
        if (h > 0) {
            result += h + "h ";
        }
        result += m + "m";

        return result;
    }

    formatColor(time) {
        if (time === 0) {
            return '';
        } else if (time > 0) {
            return ' success'
        } else if (time < 0) {
            return ' danger'
        }
    }
}