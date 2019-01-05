import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from "./Timer";
import Separator from "./Separator";
import uuid from 'react-native-uuid';
import AddBlock from "./AddBlock"; //https://stackoverflow.com/questions/42831397/how-to-create-uuid-for-reactnative

export default class TimeManager extends React.Component {
    state = {
        timers: [
            //{uuid, name, time}
        ]
    };

    render() {
        const timers = this.state.timers;
        let innerView = [];
        if (timers.length === 0) {
            innerView.push(<AddBlock onClick={() => this.addTimer()}/>);
        } else if (timers.length === 1) {
            innerView.push(
                <Timer id={timers[0].id} name={timers[0].name} time={timers[0].time}
                       onRemove={() => this.removeTimer(timers[0])}
                       onChange={data => this.changeTimer(timers[0], data)}
                />
            );
            innerView.push(<Separator/>);
            innerView.push(<AddBlock onClick={() => this.addTimer()}/>);
        } else if (timers.length === 2) {
            innerView.push(
                <Timer id={timers[0].id} name={timers[0].name} time={timers[0].time}
                       onRemove={() => this.removeTimer(timers[0])}
                       onChange={data => this.changeTimer(timers[0], data)}
                />
            );
            innerView.push(<Separator/>);
            innerView.push(
                <Timer id={timers[1].id} name={timers[1].name} time={timers[1].time}
                       onRemove={() => this.removeTimer(timers[1])}
                       onChange={data => this.changeTimer(timers[1], data)}
                />
            );
            innerView.push(<Separator/>);
            innerView.push(<AddBlock onClick={() => this.addTimer()}/>);
        } else if (timers.length === 3) {
            innerView.push(
                <Timer id={timers[0].id} name={timers[0].name} time={timers[0].time}
                       onRemove={() => this.removeTimer(timers[0])}
                       onChange={data => this.changeTimer(timers[0], data)}
                />
            );
            innerView.push(<Separator/>);
            innerView.push(
                <Timer id={timers[1].id} name={timers[1].name} time={timers[1].time}
                       onRemove={() => this.removeTimer(timers[1])}
                       onChange={data => this.changeTimer(timers[1], data)}
                />
            );
            innerView.push(<Separator/>);
            innerView.push(
                <Timer id={timers[2].id} name={timers[2].name} time={timers[2].time}
                       onRemove={() => this.removeTimer(timers[2])}
                       onChange={data => this.changeTimer(timers[2], data)}
                />
            );
        }


        return (
            <View style={styles.container}>
                {innerView}
            </View>
        );
    }

    addTimer() {
        let timers = this.state.timers;
        timers.push({id: uuid.v4(), name: 'Timer ' + timers.length, time: 0});
        this.setState({timers});
    }

    removeTimer(timer) {
        let timers = this.state.timers.filter(item => item !== timer);
        this.setState({timers});
    }

    changeTimer(timer, data) {
        let timers = this.state.timers.map(item => {
            if (item === timer) {
                return {id: timer.id, name: data.name, time: data.time};
            } else {
                return item;
            }
        });
        this.setState({timers});
    }
}

const styles = StyleSheet.create({
    container: {}
});
